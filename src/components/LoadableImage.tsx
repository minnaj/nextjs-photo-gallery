"use client";
import Image from "next/image";
import { useState } from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const StyledImage = styled(Image)(() => ({
  transitionDuration: "500ms",
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-out",
}));

type LoadableImageProps = {
  src?: string;
  alt: string;
  width: number;
  height: number;
};

export default function LoadableImage({
  src,
  alt,
  width,
  height,
}: LoadableImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!src) {
    return <Skeleton variant="rectangular" height={height} width={width} />;
  }

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <StyledImage
          height={height}
          width={width}
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          sx={{
            opacity: isLoading ? 0 : 1,
          }}
        />
        <Skeleton
          variant="rectangular"
          height={height}
          width={width}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: isLoading ? 1 : 0,
            transitionDuration: "500ms",
            transitionProperty: "opacity",
            transitionTimingFunction: "ease-out",
            animation: isLoading ? null : "none",
          }}
        />
      </Box>
    </>
  );
}
