"use client";
import React, {useState} from "react";
import {FunnelIcon} from "@heroicons/react/24/solid";
import {Tag} from "@/lib/types";
import TagBadge from "@/components/tag/tagBadge";
import {Swiper, SwiperSlide} from "swiper/react";
import {twJoin} from "tailwind-merge";
import "swiper/css";

export type FilterOnTag = Tag & {
    filter: boolean,
};

type Props = {
    tags: FilterOnTag[],
};

const BlogOverviewFilter = ({tags}: Props) => {
    const [expanded, setExpanded] = useState(false);
    const [filterTags, setFilterTags] = useState(tags);

    return (
        <div
            className={twJoin(
                "bg-slate-300 w-full flex rounded-3xl flex-row items-center justify-start transition-all overflow-hidden",
                expanded ? "max-w-[600px]" : "max-w-[40px] md:max-w-[56px] hover:max-w-20",
            )}
        >
            <button
                className={"grow-0 shrink-0 p-2 md:p-4 h-full w-[40px] md:w-[56px] outline-0 flex items-center justify-center"}
                onClick={() => setExpanded(!expanded)}
                title={"Toon/verberg filter-opties"}
            >
                <FunnelIcon className="size-4 md:size-6 text-slate-700 shrink-0"/>
            </button>

            <Swiper
                className={"w-[calc(100%-48px)] md:w-[calc(100%-72px)] rounded-3xl shrink-0"}
                slidesPerView={"auto"}
            >
                {
                    filterTags.map((t: FilterOnTag, i: number) =>
                        <SwiperSlide className={"!w-fit py-2 md:py-4 mr-2 md:mr-4"} key={i}>
                            <TagBadge
                                {...t}
                                key={filterTags + ""}
                                as={"button"}
                                onClick={() => {
                                    setFilterTags(filterTags.map(
                                        (t, i2) => i2 === i
                                            ? ({
                                                ...t,
                                                filter: !t.filter
                                            })
                                            : t));
                                }}
                                active={t.filter}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default BlogOverviewFilter;