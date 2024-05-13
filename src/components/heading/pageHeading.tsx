import React from "react";

type Props = {
    title: string,
};

const PageHeading = ({title}: Props) => {
    return (
        <h1 className={"font-bold text-4xl md:text-7xl"}>
            {title}
        </h1>
    );
};

export default PageHeading;