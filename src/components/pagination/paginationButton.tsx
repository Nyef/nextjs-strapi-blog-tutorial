import React from "react";
import {Icon} from "@/util/icons";
import {twJoin} from "tailwind-merge";

type Props = {
    title: string,
    icon: Icon,
    disabled?: boolean,
};

const PaginationButton = ({title, icon: Icon, disabled = false}: Props) => {
    return (
        <button
            className={twJoin(
                "p-2 rounded flex items-center justify-center outline-0 disabled:cursor-not-allowed",
                "transition-colors bg-orange-200/30 hover:bg-orange-200/75 disabled:bg-slate-200/50",
                "text-orange-800/75 hover:text-orange-800 disabled:text-slate-400/50",
            )}
            title={title}
            disabled={disabled}
        >
            <Icon className={"size-6 md:size-9 stroke-2"}/>
        </button>
    );
};

export default PaginationButton;