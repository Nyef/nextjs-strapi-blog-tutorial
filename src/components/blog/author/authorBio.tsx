import React from "react";
import {Author} from "@/lib/types";
import Image from "next/image";

type Props = {
    author: Author,
};

const AuthorBio = ({author}: Props) => {
    return (
        <div className={"w-full p-4 md:p-6 border-2 border-slate-900 rounded-xl mt-6 flex flex-row gap-4 md:gap-6"}>
            <Image
                className={"rounded-full bg-orange-200 size-14 sm:size-16 md:size-24"}
                src={author.avatar}
                alt={author.name}
                width={96}
                height={96}
            />
            <div className={"flex flex-col gap-1"}>
                <h2 className={"font-semibold text-2xl md:text-3xl"}>
                    Geschreven door {author.name}
                </h2>
                <p>
                    {author.biography}
                </p>
            </div>

        </div>
    );
};

export default AuthorBio;