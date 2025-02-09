import React from "react";
import type {Metadata} from "next";
import PageHeading from "@/components/heading/pageHeading";
import {AboutUs} from "@/lib/types";
import {dataFactory} from "@/lib/data/data";

export async function generateMetadata(): Promise<Metadata> {
    const aboutUs: AboutUs = await dataFactory().getAboutUs();
    return {
        title: aboutUs.title,
        description: aboutUs.seoMetadata.description,
    }
}

const AboutUsPage = async () => {
    const aboutUs: AboutUs = await dataFactory().getAboutUs();
    return (
        <div>
            <PageHeading>
                {aboutUs.title}
            </PageHeading>

            <p className={"mt-4 md:mt-8 w-full max-w-2xl text-xl md:text-2xl text-slate-700"}>
                {aboutUs.description}
            </p>
        </div>
    );
}

export default AboutUsPage;