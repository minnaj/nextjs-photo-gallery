import Image from "next/image";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import { PHOTO_HEIGHT, PHOTO_WIDTH } from "@/utils/image";

type LoadableImageProps = {
  src?: string;
  alt?: string;
};

export default function LoadableImage({ src, alt }: LoadableImageProps) {
  return (
    <Grid item>
      {src && alt ? (
        <Image width={PHOTO_WIDTH} height={PHOTO_HEIGHT} src={src} alt={alt} />
      ) : (
        <Skeleton
          variant="rectangular"
          width={PHOTO_WIDTH}
          height={PHOTO_HEIGHT}
        />
      )}
    </Grid>
  );
}
