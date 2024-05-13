"use client";
import React from "react";
import Link from "next/link";
import {Url} from "node:url";
import {twJoin} from "tailwind-merge";
import {usePathname} from "next/navigation";

type Props = {
    name: string,
    href: string | Url,
};

const NavBarLink = ({name, href}: Props) => {
    const pathname = usePathname();

    return (
        <li>
            <Link
                className={twJoin(
                    "underline-offset-4 decoration-2 md:underline-offset-8 md:decoration-4 decoration-dashed",
                    pathname === href
                        ? "underline decoration-slate-900"
                        : "hover:underline decoration-slate-900/20"
                )}
                href={href}
            >
                {name}
            </Link>
        </li>
    );
};

export default NavBarLink;