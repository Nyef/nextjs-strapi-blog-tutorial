"use client";
import React from "react";
import {Tag} from "@/lib/types";
import TagBadge from "@/components/tag/tagBadge";
import {usePathname, useSearchParams} from "next/navigation";

type Props = {
    tags: Tag[],
    filterOnTags: string[],
}

const BlogOverviewFilter = ({tags, filterOnTags}: Props) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <div
            className={"bg-slate-300 w-full flex rounded-3xl flex-row flex-wrap p-4 gap-4 items-center justify-start transition-all"}
        >
            {
                tags.map((t: Tag, i: number) => {
                    const isFilteredOn: boolean = filterOnTags
                        .filter((f) => f.toLowerCase() === t.name.toLowerCase()).length > 0;

                    let updatedFilterOn = [...filterOnTags];
                    if (!isFilteredOn) {
                        updatedFilterOn.push(t.name.toLowerCase());
                    } else {
                        updatedFilterOn = updatedFilterOn.filter(f => f.toLowerCase() !== t.name.toLowerCase());
                    }

                    const params = new URLSearchParams(searchParams.toString());
                    if (updatedFilterOn.length === 0) {
                        params.delete("filter");
                    } else {
                        params.set("filter", updatedFilterOn.join(";"));
                    }

                    // Go back to first page
                    params.delete("pagina");

                    return (
                        <TagBadge
                            key={i}
                            {...t}
                            as={"a"}
                            href={pathname + "?" + params.toString()}
                            active={isFilteredOn}
                        />
                    );
                })
            }
        </div>
    );
};

export default BlogOverviewFilter;