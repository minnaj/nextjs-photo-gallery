import Image from "next/image";
import Grid from "@mui/material/Grid";
import {
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  shimmer,
  toBase64,
} from "@/utils/image";

export default function Loading() {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {Array.from(new Array(20)).map((_, index) => (
        <Grid key={index} item xs={12} md={3}>
          <Image
            src={`data:image/svg+xml;base64,${toBase64(
              shimmer(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT),
            )}`}
            width={THUMBNAIL_WIDTH}
            height={THUMBNAIL_HEIGHT}
            alt=""
          />
        </Grid>
      ))}
    </Grid>
  );
}
