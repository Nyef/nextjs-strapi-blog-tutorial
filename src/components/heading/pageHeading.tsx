import React from "react";
import {twMerge} from "tailwind-merge";

const PageHeading = ({
                         children,
                         className,
                         ...h1Props
                     }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    return (
        <h1
            {...h1Props}
            className={twMerge("font-bold text-4xl md:text-7xl", className)}
        >
            {children}
        </h1>
    );
};

export default PageHeading;