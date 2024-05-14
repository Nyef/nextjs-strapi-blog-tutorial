import React from "react";
import type {Metadata} from "next";
import PageHeading from "@/components/heading/pageHeading";

const pageTitle = "Over ons";
export const metadata: Metadata = {
    title: pageTitle,
    description: "...",
}

const AboutUs = () => {
    return (
        <div>
            <PageHeading>
                {pageTitle}
            </PageHeading>

            <p className={"mt-4 md:mt-8 w-full max-w-2xl text-xl md:text-2xl text-slate-700"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt eget odio at vehicula.
                Maecenas a mauris vitae leo viverra fermentum. Nunc non ullamcorper augue. Integer felis quam, pulvinar
                eget ipsum vel, iaculis dictum nulla. In volutpat accumsan urna non auctor. In sit amet egestas mauris.
                Donec sem odio, imperdiet at dui at, euismod tristique ex.
            </p>
        </div>
    );
}

export default AboutUs;