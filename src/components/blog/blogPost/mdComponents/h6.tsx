import React from "react";

const H6 = ({children}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    return (
        <h6 className={"mt-6 mb-2 text-base md:text-lg font-bold"}>
            {children}
        </h6>
    );
};

export default H6;