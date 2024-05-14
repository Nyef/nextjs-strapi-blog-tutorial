import React from "react";

const H2 = ({children}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    return (
        <h2 className={"block mt-8 mb-2 text-3xl md:text-4xl font-bold"}>
            {children}
        </h2>
    );
};

export default H2;