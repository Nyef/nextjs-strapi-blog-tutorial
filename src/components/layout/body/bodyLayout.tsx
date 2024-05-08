import React, {ReactNode} from "react";
import NavBar from "@/components/layout/navigation/navBar";
import Footer from "@/components/layout/footer/footer";
import {containerPaddingY} from "@/components/layout/layout";
import Container from "../container/container";

type Props = {
    children: ReactNode,
};

const BodyLayout = ({children}: Props) => {
    return (
        <div className={"w-full h-full"}>
            <NavBar/>

            <main className={"w-full min-h-[3000px] transition-all mt-14 md:mt-20"}>
                <Container className={containerPaddingY}>
                    {children}
                </Container>
            </main>

            <Footer/>
        </div>
    );
};

export default BodyLayout;