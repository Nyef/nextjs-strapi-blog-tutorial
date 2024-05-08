import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React, {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Tutorial Blog",
};

type Props = {
    children: ReactNode;
};

const RootLayout = ({children}: Props): ReactNode => {
    return (
        <html lang="nl-NL">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
};

export default RootLayout;