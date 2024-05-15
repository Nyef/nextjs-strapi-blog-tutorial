"use client";
import React, {useCallback, useMemo} from "react";
import {Icon} from "@/util/icons";
import {twJoin} from "tailwind-merge";
import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";

type Props = {
    title: string,
    icon: Icon,
    disabled?: boolean,
    toPage: number,
};

const PaginationButton = ({title, icon, toPage, disabled = false}: Props) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const iconElement = useMemo(() => {
        const Icon = icon;
        return <Icon className={"size-6 md:size-9 stroke-2"}/>;
    }, [icon]);
    const className = useMemo(() => twJoin(
        "p-2 rounded flex items-center justify-center outline-0",
        disabled
            ? "cursor-not-allowed bg-slate-200/50 text-slate-400/50"
            : "transition-colors bg-orange-200/30 hover:bg-orange-200/75 text-orange-800/75 hover:text-orange-800"
    ), [disabled]);

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    // https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString()
        },
        [searchParams]);

    if (disabled) {
        return (
            <div className={className}>
                {iconElement}
            </div>
        );
    }

    return (
        <Link
            className={className}
            title={title}
            href={pathname + "?" + createQueryString("pagina", toPage + "")}
        >
            {iconElement}
        </Link>
    );
};

export default PaginationButton;