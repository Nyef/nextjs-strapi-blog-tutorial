import React from "react";

const H4 = ({children}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    return (
        <h4 className={"mt-6 mb-2 text-xl md:text-2xl font-bold"}>
            {children}
        </h4>
    );
};

export default H4;