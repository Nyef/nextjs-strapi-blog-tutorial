import React from "react";
import type {Metadata} from "next";

const pageTitle = "Over ons";
export const metadata: Metadata = {
    title: pageTitle,
}

const AboutUs = () => {
    return (
        <main className={"text-red-500 underline"}>
            {pageTitle}
        </main>
    );
}

export default AboutUs;