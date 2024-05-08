import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";
import BodyLayout from "@/components/layout/body/bodyLayout";
import {twJoin} from "tailwind-merge";

const outfit = Outfit({subsets: ["latin"], weight: ["400", "500"]});

const siteName = "| Tutorial Blog";
export const metadata: Metadata = {
    title: {
        default: `Home ${siteName}`,
        template: `%s ${siteName}`
    },
};

type Props = {
    children: ReactNode;
};

const RootLayout = ({children}: Props): ReactNode => {
    return (
        <html lang="nl-NL">
        <body className={twJoin(outfit.className, "text-slate-900 bg-orange-100 w-full h-full text-xl")}>
        <BodyLayout>
            {children}
        </BodyLayout>
        </body>
        </html>
    );
};

export default RootLayout;