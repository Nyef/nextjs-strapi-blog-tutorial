export type Page<T> = {
    data: T[],
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number,
        }
    }
};

export type SeoMetadata = {
    description: string,
};

export type AboutUs = {
    title: string,
    description: string,
    seoMetadata: SeoMetadata,
};

export type Tag = {
    name: string,
    description: string,
    accentColor: string,
    icon: string,
};

export type FilterOnTag = Tag & {
    filter: boolean,
};

export type AuthorPreview = {
    name: string,
    avatar: string,
};

export type Author = AuthorPreview & {
    biography: string,
};

export type BlogPostPreview = {
    title: string,
    publishedOn: string,
    modifiedOn: string | null,
    formattedPublishedOn: string,
    tags: Tag[],
    cover: string,
    slug: string,
    author: AuthorPreview,
};

export type BlogPost = Omit<BlogPostPreview, "author"> & {
    content: string,
    seoMetadata: SeoMetadata,
    author: Author,
};


