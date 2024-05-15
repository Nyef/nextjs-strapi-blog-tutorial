"use client";
import React from "react";
import PaginationButton from "@/components/pagination/paginationButton";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {BlogPostPreview, Page} from "@/lib/types";


type Props = {
    page: Page<BlogPostPreview>
};

const Pagination = ({page}: Props) => {
    if (page.meta.pagination.pageCount === 1) {
        return <></>;
    }

    return (
        <div className={"self-end flex flex-col items-end gap-2"}>
            <div className={"text-slate-500 text-base md:text-lg"}>
                {((page.meta.pagination.page - 1) * page.meta.pagination.pageSize) + 1}
                -
                {Math.min((page.meta.pagination.page ) * page.meta.pagination.pageSize, page.meta.pagination.total)}
                {" "}van{" "}
                {page.meta.pagination.total}
            </div>

            <div className={"flex flex-row gap-2 items-center justify-end"}>
                <PaginationButton
                    title={"Vorige"}
                    icon={ChevronLeftIcon}
                    disabled={page.meta.pagination.page === 1}
                    toPage={page.meta.pagination.page - 1}
                />
                <PaginationButton
                    title={"Volgende"}
                    icon={ChevronRightIcon}
                    disabled={page.meta.pagination.page >= (page.meta.pagination.pageCount )}
                    toPage={page.meta.pagination.page + 1}
                />
            </div>
        </div>
    );
};

export default Pagination;