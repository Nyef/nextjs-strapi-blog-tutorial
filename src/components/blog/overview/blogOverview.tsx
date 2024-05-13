import React from "react";
import BlogOverviewFilter from "@/components/blog/overview/blogOverviewFilter";
import Pagination from "@/components/pagination/pagination";
import {BlogPostPreview, FilterOnTag, Page} from "@/lib/types";
import {getAllTagsToFilterOn, getBlogPosts} from "@/lib/data";
import BlogPostCard from "@/components/blog/card/blogPostCard";

const BlogOverview = async () => {
    const tags: FilterOnTag[] = await getAllTagsToFilterOn();
    const blogPosts: Page<BlogPostPreview> = await getBlogPosts();

    return (
        <div
            className={"w-full max-w-[700px] lg:max-w-none mx-auto mt-3 md:mt-12 mb-12 md:mb-24 flex flex-col items-start gap-6"}
        >
            <BlogOverviewFilter tags={tags}/>

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

            <Pagination/>
        </div>
    );
};

export default BlogOverview;