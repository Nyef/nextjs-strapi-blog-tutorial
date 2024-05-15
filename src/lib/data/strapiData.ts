import {Data} from "@/lib/data/data";
import {AboutUs, BlogPost, BlogPostPreview, Page, SeoMetadata, Tag} from "../types";
import {formatDistance} from "date-fns";
import {nl} from "date-fns/locale";

export type StrapiAboutUs = {
    data: {
        id: number,
        attributes: AboutUs,
    },
};

export type StrapiTag = {
    id: number,
    attributes: {
        name: string,
        description: string,
        accentColor: string,
        icon: {
            data: {
                id: number,
                attributes: {
                    url: string,
                }
            }
        }
    }
}

export type StrapiAuthorPreview = {
    id: number,
    attributes: {
        name: string,
        avatar: {
            data: {
                id: number,
                attributes: {
                    url: string,
                }
            }
        }
    }
};

export type StrapiAuthor = {
    id: number,
    attributes: {
        name: string,
        biography: string,
        avatar: {
            data: {
                id: number,
                attributes: {
                    url: string,
                }
            }
        }
    }
};

export type StrapiBlogPostPreview = {
    id: number,
    attributes: {
        title: string,
        publishedOn: string,
        modifiedOn: string | null,
        slug: string,
        cover: {
            data: {
                id: number,
                attributes: {
                    url: string,
                }
            }
        },
        tags: {
            data: StrapiTag[],
        },
        author: {
            data: StrapiAuthorPreview
        },
    },
};

export type StrapiBlogPost = Omit<StrapiBlogPostPreview, "author"> & {
    id: number,
    attributes: {
        title: string,
        publishedOn: string,
        modifiedOn: string | null,
        content: string,
        slug: string,
        cover: {
            data: {
                id: number,
                attributes: {
                    url: string,
                }
            }
        },
        tags: {
            data: StrapiTag[],
        },
        author: {
            data: StrapiAuthor
        },

        seoMetadata: SeoMetadata,
    },
    author: StrapiAuthor,
};

export class StrapiData implements Data {

    async getAboutUs(): Promise<AboutUs> {
        const url: URL = new URL(`${process.env.STRAPI_API_BASE_URL}/about-us`);
        url.searchParams.set("fields[0]", "title");
        url.searchParams.set("fields[1]", "description");
        url.searchParams.set("populate[seoMetadata][fields][0]", "description");

        const response = await fetch(url.toString(), this.getHeaders());
        const responseJson: StrapiAboutUs = await response.json();
        return responseJson.data.attributes;
    };

    async getAllTagsToFilterOn(): Promise<Tag[]> {
        const url: URL = new URL(`${process.env.STRAPI_API_BASE_URL}/tags`);
        url.searchParams.set("fields[0]", "name");
        url.searchParams.set("fields[1]", "description");
        url.searchParams.set("fields[2]", "accentColor");
        url.searchParams.set("populate[icon][fields][0]", "url");

        const response = await fetch(url.toString(), this.getHeaders());
        const responseJson: Page<StrapiTag> = await response.json();
        return responseJson.data.map((d: StrapiTag) => ({
            ...d.attributes,
            icon: process.env.STRAPI_BASE_URL + d.attributes.icon.data.attributes.url,
        }));
    };

    async getBlogPost(slug: string): Promise<BlogPost> {
        const url: URL = new URL(`${process.env.STRAPI_API_BASE_URL}/blog-posts`);
        this.setBlogPostQueryParams(url);

        url.searchParams.set("filters[publishedOn][$lte]", new Date().toISOString());
        url.searchParams.set("filters[slug][$eq]", slug);

        url.searchParams.set("fields[4]", "content"); // new
        url.searchParams.set("populate[author][fields][1]", "biography"); // new
        url.searchParams.set("populate[seoMetadata][fields][0]", "description"); // new

        const response = await fetch(url.toString(), this.getHeaders());
        const jsonResponse: Page<StrapiBlogPost> = await response.json();

        if (jsonResponse.data.length === 0) {
            throw new Error("Not found!");
        }

        const blogPost: StrapiBlogPost = jsonResponse.data[0];
        return this.convertBlogPostProps(blogPost) as BlogPost;
    };

    async getBlogPosts(page: number, filterOnTags: string[]): Promise<Page<BlogPostPreview>> {
        const url: URL = new URL(`${process.env.STRAPI_API_BASE_URL}/blog-posts`);
        this.setBlogPostQueryParams(url);

        // Pagination
        url.searchParams.set("pagination[page]", page + "");
        url.searchParams.set("pagination[pageSize]", "4");
        url.searchParams.set("pagination[withCount]", "true");

        // Sorting
        url.searchParams.set("sort[0]", "publishedOn:desc");

        // Filter on tags
        if (filterOnTags.length > 0) {
            filterOnTags.forEach((f: string, i: number) => {
                url.searchParams.set(`filters[$or][${i}][tags][name][$eqi]`, f);
            });
        }

        // Make request
        const response = await fetch(url.toString(), this.getHeaders());
        const jsonResponse: Page<StrapiBlogPostPreview> = await response.json();

        // Transform `Page<StrapiBlogPostPreview>` to `Page<BlogPostPreview>`
        return {
            data: jsonResponse.data.map(this.convertBlogPostProps),
            meta: jsonResponse.meta,
        };
    };

    private setBlogPostQueryParams(url: URL) {
        // Blog post properties
        url.searchParams.set("fields[0]", "title");
        url.searchParams.set("fields[1]", "publishedOn");
        url.searchParams.set("fields[2]", "modifiedOn");
        url.searchParams.set("fields[3]", "slug");

        // Cover relation (media type):
        url.searchParams.set("populate[cover][fields][0]", "url");

        // Author relation:
        url.searchParams.set("populate[author][fields][0]", "name");
        url.searchParams.set("populate[author][populate][avatar][fields][0]", "url");

        // Tags relation:
        url.searchParams.set("populate[tags][fields][0]", "name");
        url.searchParams.set("populate[tags][fields][1]", "accentColor");
        url.searchParams.set("populate[tags][fields][2]", "description");
        url.searchParams.set("populate[tags][populate][icon][fields][0]", "url");

        // Filter publishedOn
        url.searchParams.set("filters[publishedOn][$lte]", new Date().toISOString());
    }

    private convertBlogPostProps(post: StrapiBlogPostPreview | StrapiBlogPost): BlogPostPreview | BlogPost {
        return {
            ...post.attributes,
            cover: process.env.STRAPI_BASE_URL + post.attributes.cover.data.attributes.url,
            tags: post.attributes.tags.data.map((tag: StrapiTag) => ({
                ...tag.attributes,
                icon: process.env.STRAPI_BASE_URL + tag.attributes.icon.data.attributes.url,
            })),
            author: {
                ...post.attributes.author.data.attributes,
                avatar: process.env.STRAPI_BASE_URL +
                    post.attributes.author.data.attributes.avatar.data.attributes.url,
            },
            formattedPublishedOn: formatDistance(new Date(post.attributes.publishedOn), new Date(), {
                locale: nl,
                addSuffix: true
            }),
        }
    }

    private getHeaders() {
        return {
            headers: {
                "Authorization": `Bearer ${process.env.STRAPI_KEY}`,
            },
        };
    }

}
