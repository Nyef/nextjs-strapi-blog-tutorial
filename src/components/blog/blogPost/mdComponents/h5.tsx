import React from "react";

const H5 = ({children}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => {
    return (
        <h5 className={"mt-6 mb-2 text-lg md:text-xl font-bold"}>
            {children}
        </h5>
    );
};

export default H5;