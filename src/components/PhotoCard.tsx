"use client";
import Grid from "@mui/material/Grid";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "@/utils/image";
import NavigationLink from "./NavigationLink";
import LoadableImage from "./LoadableImage";

type PhotoCardProps = {
  id: number;
  imageUrl: string;
  title: string;
};

export default function PhotoCard({ id, imageUrl, title }: PhotoCardProps) {
  return (
    <Grid item flexShrink="0">
      <NavigationLink href={`/photo/${id}`} shallow>
        <LoadableImage
          src={imageUrl}
          alt={title}
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
        />
      </NavigationLink>
    </Grid>
  );
}
