import React from "react";
import PageHeading from "@/components/heading/pageHeading";
import BlogOverview from "@/components/blog/overview/blogOverview";
import {BlogPostPreview, Page, Tag} from "@/lib/types";
import {dataFactory} from "@/lib/data/data";

type Props = {
    searchParams: {
        pagina?: string,
        filter?: string,
    }
};

const Home = async ({searchParams: {pagina = "1", filter}}: Props) => {
    const filterOnTags: string[] = filter?.split(";") || [];
    const blogPosts: Page<BlogPostPreview> = await dataFactory()
        .getBlogPosts(4, pagina === undefined ? 1 : Number(pagina), filterOnTags);
    const tags: Tag[] = await dataFactory().getAllTagsToFilterOn();

    return (
        <div>
            <PageHeading>
                Duik in onze blog!
            </PageHeading>

            <BlogOverview
                blogPosts={blogPosts}
                tags={tags}
                filterOnTags={filterOnTags}
            />
        </div>
    );
}

export default Home;