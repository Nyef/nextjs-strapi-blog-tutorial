import {AboutUs, BlogPost, BlogPostPreview, Page, Tag} from "@/lib/types";
import {MockData} from "@/lib/data/mockData";
import {StrapiData} from "@/lib/data/strapiData";
import {StrapiDataTutorial} from "@/lib/data/strapiDataTutorial";

type DataSource = "mock" | "strapi" | "strapi-tutorial";

export interface Data {
    getAboutUs: () => Promise<AboutUs>,
    getAllTagsToFilterOn: () => Promise<Tag[]>,
    getBlogPost: (slug: string) => Promise<BlogPost>,
    getBlogPosts: (page: number, filterOnTags: string[]) => Promise<Page<BlogPostPreview>>,
}

export const dataFactory = (): Data => {
    const src = process.env.DATA_SOURCE as DataSource;

    if (src === "strapi") {
        return new StrapiData();
    }

    if (src === "strapi-tutorial") {
        return new StrapiDataTutorial();
    }

    return new MockData();
};