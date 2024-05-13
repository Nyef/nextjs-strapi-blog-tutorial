import React from "react";
import PaginationButton from "@/components/pagination/paginationButton";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";


const Pagination = () => {
    return (
        <div className={"self-end flex flex-col items-end gap-2"}>
            <div className={"text-slate-500 text-base md:text-lg"}>
                1-5 van 7
            </div>

            <div className={"flex flex-row gap-2 items-center justify-end"}>
                <PaginationButton
                    title={"Vorige"}
                    icon={ChevronLeftIcon}
                    disabled
                />
                <PaginationButton
                    title={"Volgende"}
                    icon={ChevronRightIcon}
                />
            </div>
        </div>
    );
};

export default Pagination;