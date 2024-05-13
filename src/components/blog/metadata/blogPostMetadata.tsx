import React from "react";
import {BlogPostPreview} from "@/lib/types";

type Props = {
    blogPost: BlogPostPreview,
};


const BlogPostMetadata = ({blogPost}: Props) => {
    return (
        <div className={"hidden"}>
            <meta itemProp="datePublished" content={blogPost.publishedOn}/>
            {
                blogPost.modifiedOn !== null &&
                <meta itemProp="dateModified" content={blogPost.modifiedOn}/>
            }

            <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content={blogPost.author.name}/>
                <meta itemProp="url" content={"mysite.com"}/>
            </div>

            <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content={"Blog Tutorial"}/>
            </div>

            {/* TODO - URL: */}
            <meta itemProp="url" content={"#"}/>
            <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                <meta itemProp="url" content={blogPost.cover}/>
            </div>
        </div>
    );
};

export default BlogPostMetadata;