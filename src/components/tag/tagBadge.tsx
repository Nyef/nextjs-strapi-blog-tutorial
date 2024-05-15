import React from "react";
import {Tag} from "@/lib/types";
import Image from "next/image";
import {twJoin} from "tailwind-merge";

type Props = ({
    as?: "span",
} | {
    as: "a",
    href: string,
    active?: boolean,
}) & {
    size?: "xl" | "base",
};

const TagBadge = ({size = "xl", as = "span", name, icon, accentColor, description, ...props}: Tag & Props) => {
    const Component = as;
    const active: boolean = "active" in props && props.active !== undefined
        ? props.active
        : true;

    return (
        <Component
            itemProp={"keyword"}
            className={twJoin(
                "group inline-flex flex-row items-center justify-start gap-2 rounded-full whitespace-nowrap transition-all",
                as === "a" ? "hover:shadow-xl" : "",
                active ? "" : "bg-slate-400 text-slate-500 hover:text-slate-700",
                size === "xl"
                    ? "text-base md:text-xl py-1 md:py-2 px-2 md:px-3"
                    : "text-sm py-1 md:py-1.5 px-1 md:px-2",
            )}
            style={{backgroundColor: active ? accentColor : undefined}}
            title={description}
            {..."href" in props ? {href: props.href} : {}}
        >
            <Image
                className={twJoin(
                    "rounded-full",
                    size === "xl"
                        ? "size-[20px] md:size-[30px]"
                        : "size-[15px] md:size-[20px]",
                    active ? "" : "transition-transform grayscale group-hover:grayscale-0"
                )}
                src={icon}
                alt={name}
                width={size === "xl" ? 30 : 20}
                height={size === "xl" ? 30 : 20}
                unoptimized={true}
            />

            <span>
                {name}
            </span>
        </Component>
    );
};

export default TagBadge;