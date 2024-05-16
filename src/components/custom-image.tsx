"use client";
import { FC, useState } from "react";
import Image from "next/image";
import cx from "classnames";

import { CustomImageProps } from "@/interfaces/props";

const CustomImage: FC<CustomImageProps> = props => {
  const { title, className = "", image, fill, height, width } = props;
  const [isLoading, setIsLoading] = useState(true);

  const loadingClasses = isLoading
    ? "scale-110 blur-2xl grayscale"
    : "scale-100 blur-0 grayscale-0";

  const handleLoadingComplete = () => setIsLoading(false);

  return (
    <Image
      className={cx(
        fill ? "" : `h-[${height || 300}px]`,
        "w-full object-contain object-center",
        loadingClasses,
        className
      )}
      onLoad={handleLoadingComplete}
      src={image}
      alt={title}
      fill={fill}
      width={fill ? undefined : width || 268}
      height={fill ? undefined : height || 300}
    />
  );
};

export default CustomImage;
