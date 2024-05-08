import React from "react";
import NavBarLink from "@/components/layout/navigation/links/navBarLink";

const NavBarLinks = () => {
    return (
        <ul className={"text-base font-semibold md:text-xl flex flex-row items-center gap-x-4 md:gap-x-10"}>
            <NavBarLink
                name={"Home"}
                href={"/"}
            />
            <NavBarLink
                name={"Over ons"}
                href={"/over-ons"}
            />
        </ul>
    );
};

export default NavBarLinks;