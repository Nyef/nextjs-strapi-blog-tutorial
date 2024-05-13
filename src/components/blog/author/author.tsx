import React from "react";
import Image from "next/image";
import {twJoin} from "tailwind-merge";
import {BlogPostPreview} from "@/lib/types";

type Props = {
    prominent: boolean,
    blogPost: BlogPostPreview,
};

const Author = ({prominent, blogPost}: Props) => {
    return (
        <div className={"flex flex-row gap-3 items-start justify-start"}>
            <Image
                className={twJoin(
                    "bg-orange-200/50 rounded-full",
                    prominent ? "size-[56px]" : "size-[48px]"
                )}
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                width={prominent ? 56 : 48}
                height={prominent ? 56 : 48}
            />

            <div
                className={twJoin(
                    "flex flex-col",
                    prominent ? "" : "text-base"
                )}
            >
                <span className={"font-semibold"}>
                    {blogPost.author.name}
                </span>
                <time
                    dateTime={blogPost.publishedOn}
                    className={"text-slate-600"}
                >
                    {blogPost.formattedPublishedOn}
                </time>
            </div>
        </div>
    );
};

export default Author;