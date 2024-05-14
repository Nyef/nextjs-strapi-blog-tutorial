import React from "react";

const Paragraph = ({children}: any) => {
    return (
        <p className={"mb-6"}>
            {children}
        </p>
    );
};

export default Paragraph;