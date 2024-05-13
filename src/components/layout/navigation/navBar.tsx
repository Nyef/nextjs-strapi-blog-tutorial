"use client";
import React, {useEffect, useState} from "react";
import {twJoin} from "tailwind-merge";
import Container from "@/components/layout/container/container";
import NavBarLogo from "@/components/layout/navigation/navBarLogo";
import NavBarLinks from "@/components/layout/navigation/links/navBarLinks";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const determineScrolled = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", determineScrolled);
        return () => window.removeEventListener("scroll", determineScrolled);
    }, [setIsScrolled]);

    return (
        <nav
            className={twJoin(
                "z-50 fixed transition-all inset-x-0 top-0 w-full h-14 md:h-20 bg-orange-100 border-b-2",
                isScrolled ? "border-slate-900" : "border-transparent",
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