import Image from "next/image";
import Grid from "@mui/material/Grid";
import {
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  shimmer,
  toBase64,
} from "@/utils/image";

type PhotoCardProps = {
  imageUrl: string;
  title: string;
};

export default function PhotoCard({ imageUrl, title }: PhotoCardProps) {
  return (
    <Grid item xs={12} md={3}>
      <Image
        height={THUMBNAIL_HEIGHT}
        width={THUMBNAIL_WIDTH}
        src={imageUrl}
        alt={title}
        loading="lazy"
        placeholder={`data:image/svg+xml;base64,${toBase64(
          shimmer(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT),
        )}`}
      />
    </Grid>
  );
}
