import React from "react";

const Ul = ({children}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => {
    return (
        <ul className={"list-outside mb-6 pl-12 list-disc"}>
            {children}
        </ul>
    );
};

export default Ul;