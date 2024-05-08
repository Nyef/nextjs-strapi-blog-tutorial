import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBarLogo = () => {
    return (
        <Link
            href={"/"}
            title={"Home"}
        >
            <Image
                className={"h-7 md:h-full w-auto"}
                src={"/logo.svg"}
                alt={"Tutorial Blog"}
                width={82}
                height={40}
                priority
            />
        </Link>
    );
};

export default NavBarLogo;