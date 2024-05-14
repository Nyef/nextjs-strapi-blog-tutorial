import React from "react";

const Ol = ({children}: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>) => {
    return (
        <ol className={"list-outside mb-6 pl-12 list-decimal"}>
            {children}
        </ol>
    );
};

export default Ol;