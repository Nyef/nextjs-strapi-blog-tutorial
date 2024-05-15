import React from "react";
import ReactMarkdown from "react-markdown";
import H2 from "@/components/blog/blogPost/mdComponents/h2";
import H3 from "@/components/blog/blogPost/mdComponents/h3";
import H4 from "@/components/blog/blogPost/mdComponents/h4";
import H5 from "@/components/blog/blogPost/mdComponents/h5";
import H6 from "@/components/blog/blogPost/mdComponents/h6";
import Paragraph from "@/components/blog/blogPost/mdComponents/paragraph";
import Anchor from "@/components/blog/blogPost/mdComponents/anchor";
import Img from "@/components/blog/blogPost/mdComponents/img";
import Ol from "@/components/blog/blogPost/mdComponents/ol";
import Ul from "@/components/blog/blogPost/mdComponents/ul";
import PageHeading from "@/components/heading/pageHeading";
import Author from "@/components/blog/author/author";
import Image from "next/image";
import BlogPostMetadata from "@/components/blog/metadata/blogPostMetadata";
import type {Metadata} from "next";
import TagRow from "@/components/tag/tagRow";
import AuthorBio from "@/components/blog/author/authorBio";
import {dataFactory} from "@/lib/data/data";

type Props = {
    params: {
        slug: string,
    }
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const blogPost = await dataFactory().getBlogPost(params.slug);
    return {
        title: `${blogPost.title} | Blog`,
        description: blogPost.seoMetadata.description,
        openGraph: {
            images: [blogPost.cover],
        },
    }
}

const Page = async ({params}: Props) => {
    const blogPost = await dataFactory().getBlogPost(params.slug);
    return (
        <article
            className={"w-full flex flex-col gap-4 max-w-[700px] mx-auto"}
            itemScope
            itemType="https://schema.org/BlogPosting"
        >
            <PageHeading itemProp="headline">
                {blogPost.title}
            </PageHeading>

            <Author
                prominent={false}
                blogPost={blogPost}
            />

            <BlogPostMetadata blogPost={blogPost}/>

            <Image
                className={"w-full h-auto max-h-[200px] sm:max-h-[300px] object-cover mb-8 rounded-xl"}
                src={blogPost.cover}
                alt={blogPost.title}
                width={700}
                height={300}
                itemProp={"image"}
                priority
            />

            <div itemProp="articleBody">
                <ReactMarkdown
                    components={{
                        h2: H2,
                        h3: H3,
                        h4: H4,
                        h5: H5,
                        h6: H6,
                        p: Paragraph,
                        a: Anchor,
                        ol: Ol,
                        ul: Ul,
                        img: Img,
                    }}
                >
                    {blogPost.content}
                </ReactMarkdown>
            </div>

            <TagRow tags={blogPost.tags}/>
            <AuthorBio author={blogPost.author}/>
        </article>
    );
};

export default Page;