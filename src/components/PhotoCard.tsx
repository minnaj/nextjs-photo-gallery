"use client";
import Image from "next/image";
import { useState } from "react";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "@/utils/image";
import NavigationLink from "./NavigationLink";

const StyledImage = styled(Image)(() => ({
  transitionDuration: "500ms",
  transitionProperty: "opacity",
  transitionTimingFunction: "ease-out",
}));

type PhotoCardProps = {
  id: number;
  imageUrl: string;
  title: string;
};

export default function PhotoCard({ id, imageUrl, title }: PhotoCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Use display: block to remove extra space below img
  return (
    <Grid
      item
      flexShrink="0"
      sx={{ "& img": { display: "block" }, "> a": { position: "relative" } }}
    >
      <NavigationLink href={`/photo/${id}`} shallow>
        <StyledImage
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src={imageUrl}
          alt={title}
          onLoad={() => setIsLoading(false)}
          sx={{
            opacity: isLoading ? 0 : 1,
          }}
        />
        <Skeleton
          variant="rectangular"
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          sx={{
            position: "absolute",
            top: "15px",
            left: "0",
            opacity: isLoading ? 1 : 0,
            transitionDuration: "500ms",
            transitionProperty: "opacity",
            transitionTimingFunction: "ease-out",
          }}
        />
      </NavigationLink>
    </Grid>
  );
}
