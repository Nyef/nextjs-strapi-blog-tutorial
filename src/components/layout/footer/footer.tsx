import React from "react";
import Container from "@/components/layout/container/container";

const Footer = () => {
    return (
        <footer className={"w-full py-6 bg-white border-t-2 border-slate-900"}>
            <Container className={"text-center text-sm md:text-base text-slate-600"}>
                <p>
                    &copy; Tutorial Blog 2024
                </p>
            </Container>
        </footer>
    );
};

export default Footer;