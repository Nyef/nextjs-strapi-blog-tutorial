import React from "react";
import Image from "next/image";

const Img = ({
                 src,
                 alt,
                 title,
                 width,
                 height,
             }: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
    return (
        <Image
            className={"w-full h-auto mb-6 border border-gray-200 rounded-xl"}
            style={{
                maxWidth: width !== null ? `${width}px` : undefined
            }}
            src={src as string}
            alt={alt || ""}
            title={title}
            width={width === undefined ? 700 : parseInt(width + "")}
            height={height === undefined ? 300 : parseInt(height + "")}
            unoptimized={true}
            loading={"lazy"}
            placeholder={"empty"}
            itemProp={"image"}
        />
    )
};

export default Img;