import React from "react";
import {Tag} from "@/lib/types";
import TagBadge from "@/components/tag/tagBadge";

type Props = {
    tags: Tag[],
};

const TagRow = ({tags}: Props) => {
    return (
        <div className={"w-full flex flex-row overflow-hidden flex-nowrap gap-2"}>
            {
                tags.map((tag: Tag, i: number) =>
                    <TagBadge
                        key={i}
                        size={"base"}
                        {...tag}
                    />
                )
            }
        </div>
    );
};

export default TagRow;