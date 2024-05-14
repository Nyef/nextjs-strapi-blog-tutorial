import React from "react";
import Link from "next/link";
import Image from "next/image";
import {BlogPostPreview} from "@/lib/types";
import {twJoin} from "tailwind-merge";
import Author from "@/components/blog/author/author";
import TagRow from "@/components/tag/tagRow";
import BlogPostMetadata from "@/components/blog/metadata/blogPostMetadata";

type Props = {
    prominent?: boolean,
    blogPost: BlogPostPreview | null,
};

const BlogPostCard = ({blogPost, prominent = false}: Props) => {
    if (blogPost === null) {
        return <></>;
    }

    return (
        <Link
            className={twJoin(
                "group w-full flex rounded-3xl p-3 md:p-6 flex-col",
                prominent
                    ? "border-[2px] border-solid border-slate-900 gap-4"
                    : "xs:flex-row gap-3",
            )}
            href={`/blog/${blogPost.slug}`}
            title={blogPost.title}
            itemType="https://schema.org/BlogPosting"
            itemProp="blogPost"
            itemScope
        >
            <BlogPostMetadata blogPost={blogPost}/>

            <Image
                className={twJoin(
                    "rounded-xl object-cover",
                    prominent
                        ? "w-full h-auto max-h-[250px] lg:max-h-[400px]"
                        : "w-full h-[150px] xs:w-[164px] xs:h-[124px] lg:w-[200px] lg:h-[164px]",
                )}
                src={blogPost.cover}
                alt={blogPost.title}
                width={prominent ? 552 : 200}
                height={prominent ? 400 : 164}
            />

            <div
                className={twJoin(
                    "flex flex-col",
                    prominent
                        ? "gap-4"
                        : "gap-2 justify-between"
                )}
            >
                <TagRow tags={blogPost.tags}/>

                <h2
                    itemProp={"headline"}
                    className={twJoin(
                        "group-hover:underline font-semibold decoration-dashed line-clamp-2 overflow-hidden",
                        prominent
                            ? "text-3xl lg:text-5xl lg:leading-snug underline-offset-4 md:underline-offset-8 decoration-2 md:decoration-4"
                            : "text-xl lg:text-2xl underline-offset-2 md:underline-offset-4 decoration-1 md:decoration-2",
                    )}
                >
                    {blogPost.title}
                </h2>

                <Author
                    prominent={prominent}
                    blogPost={blogPost}
                />
            </div>
        </Link>
    );
};

export default BlogPostCard;