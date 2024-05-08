import React from "react";

type Props = {
    title: string,
};

const PageHeading = ({title}: Props) => {
    return (
        <h1 className={"font-bold text-3xl md:text-5xl"}>
            {title}
        </h1>
    );
};

export default PageHeading;