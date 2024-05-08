"use client";
import React from "react";
import {useWindowScroll} from "@uidotdev/usehooks";
import {twJoin} from "tailwind-merge";
import Container from "@/components/layout/container/container";
import NavBarLogo from "@/components/layout/navigation/navBarLogo";
import NavBarLinks from "@/components/layout/navigation/links/navBarLinks";

const NavBar = () => {
    const [{y: scrollOffsetY}] = useWindowScroll();

    return (
        <nav
            className={twJoin(
                "fixed transition-all inset-x-0 top-0 w-full h-14 md:h-20 bg-orange-100 border-b-2",
                scrollOffsetY !== null && scrollOffsetY > 100
                    ? "border-slate-900"
                    : "border-transparent",
            )}
        >
            <Container className={"max-w-none h-full flex flex-row items-center justify-between"}>
                <NavBarLogo/>
                <NavBarLinks/>
            </Container>
        </nav>
    );
};

export default NavBar;