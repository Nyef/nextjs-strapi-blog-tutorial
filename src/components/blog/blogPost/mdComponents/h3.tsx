import React from "react";

const H3 = ({children}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    return (
        <h3 className={"mt-6 mb-2 text-2xl md:text-3xl font-bold"}>
            {children}
        </h3>
    );
};

export default H3;