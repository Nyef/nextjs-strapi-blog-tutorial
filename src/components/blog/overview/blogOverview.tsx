import React from "react";
import BlogOverviewFilter from "@/components/blog/overview/blogOverviewFilter";
import Pagination from "@/components/pagination/pagination";
import {BlogPostPreview, Page, Tag} from "@/lib/types";
import BlogPostCard from "@/components/blog/card/blogPostCard";

type Props = {
    blogPosts: Page<BlogPostPreview>,
    tags: Tag[],
    filterOnTags: string[],
};

const BlogOverview = async ({blogPosts, tags, filterOnTags}: Props) => {
    return (
        <div
            className={"w-full max-w-[700px] lg:max-w-none mx-auto mt-3 md:mt-12 mb-12 md:mb-24 flex flex-col items-start gap-6"}
        >
            <div
                className={"w-full grid grid-cols-1 lg:grid-cols-2 gap-6"}
                itemScope
                itemType="https://schema.org/Blog"
            >
                <div className={"col-span-1"}>
                    <BlogPostCard
                        blogPost={blogPosts.data[0] || null}
                        prominent
                    />
                </div>

                <div className={"flex flex-col gap-6"}>
                    <div>
                        <BlogPostCard blogPost={blogPosts.data[1] || null}/>
                    </div>
                    <div>
                        <BlogPostCard blogPost={blogPosts.data[2] || null}/>
                    </div>
                    <div>
                        <BlogPostCard blogPost={blogPosts.data[3] || null}/>
                    </div>
                </div>
            </div>

            <Pagination page={blogPosts}/>

            <BlogOverviewFilter
                tags={tags}
                filterOnTags={filterOnTags}
            />
        </div>
    );
};

export default BlogOverview;