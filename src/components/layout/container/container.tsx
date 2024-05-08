import React, {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {containerPaddingX} from "@/components/layout/layout";

type Props = {
    className?: string,
    children: ReactNode,
};

const Container = ({className = "", children}: Props) => {
    return (
        <div
            className={twMerge(
                "mx-auto w-full max-w-7xl",
                containerPaddingX,
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;