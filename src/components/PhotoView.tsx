import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import { Photo } from "@/types/photo";
import { PHOTO_HEIGHT, PHOTO_WIDTH } from "@/utils/image";

type PhotoViewProps = {
  photo?: Photo;
};

export default async function PhotoView({ photo }: PhotoViewProps) {
  return (
    <>
      <Box mb={2}>
        <MuiLink component={Link} href="/">
          Back
        </MuiLink>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          {photo ? (
            <Image
              width={PHOTO_WIDTH}
              height={PHOTO_HEIGHT}
              src={photo.url}
              alt={photo.title}
            />
          ) : (
            <Skeleton
              variant="rectangular"
              width={PHOTO_WIDTH}
              height={PHOTO_HEIGHT}
            />
          )}
        </Grid>
        <Grid item container direction="column" xs="auto">
          <Grid item>Title: {photo?.title || ""}</Grid>
          <Grid item>ID: {photo?.id || ""}</Grid>
          <Grid item>Album ID: {photo?.albumId || ""}</Grid>
          <Grid item>URL: {photo?.url || ""}</Grid>
          <Grid item>Thumbnail URL: {photo?.thumbnailUrl || ""}</Grid>
        </Grid>
      </Grid>
    </>
  );
}
