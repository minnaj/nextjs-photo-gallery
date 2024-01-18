"use client";
import Image from "next/image";
import { useState } from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useSmOrLarger } from "@/utils/breakpoints";

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
  const smOrLarger = useSmOrLarger();
  const [isLoading, setIsLoading] = useState(true);

  if (!src) {
    return (
      <Skeleton
        width={
          smOrLarger
            ? `min(calc(100vw - 2rem), ${width}px)`
            : "calc(100vw - 2rem)"
        }
        height={
          smOrLarger
            ? `min(calc(100vw - 2rem), ${height}px)`
            : "calc(100vw - 2rem)"
        }
        sx={{ transform: "none" }}
      />
    );
  }

  // Use display: block to remove extra space below img
  return (
    <>
      <Box sx={{ position: "relative", "& img": { display: "block" } }}>
        <StyledImage
          height={height}
          width={width}
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          sx={{
            opacity: isLoading ? 0 : 1,
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Skeleton
          variant="rectangular"
          height="100%"
          width={width}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            maxWidth: "100%",
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
