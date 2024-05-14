import React, {AnchorHTMLAttributes} from "react";

const Anchor = ({children, href}: AnchorHTMLAttributes<any>) => {
    return (
        <a
            className={"text-blue-600 hover:underline"}
            href={href}
            rel={"nofollow"}
        >
            {children}
        </a>
    );
}

export default Anchor;