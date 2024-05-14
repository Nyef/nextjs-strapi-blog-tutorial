import React from "react";
import PageHeading from "@/components/heading/pageHeading";
import BlogOverview from "@/components/blog/overview/blogOverview";

const Home = () => {
    return (
        <div>
            <PageHeading>
                Duik in onze blog!
            </PageHeading>
            <BlogOverview/>
        </div>
    );
}

export default Home;