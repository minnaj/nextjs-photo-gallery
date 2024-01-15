import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Photo } from "@/types/photo";
import { PHOTO_HEIGHT, PHOTO_WIDTH } from "@/utils/image";
import NavigationLink from "./NavigationLink";

type PhotoViewProps = {
  photo?: Photo;
};

export default async function PhotoView({ photo }: PhotoViewProps) {
  return (
    <>
      <Box mb={2}>
        <NavigationLink href="/">Return to gallery</NavigationLink>
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
        <Grid item xs>
          <Paper sx={{ p: 2 }}>
            <ul>
              <Typography variant="body1" component="li">
                Title: {photo?.title || ""}
              </Typography>
              <Typography variant="body1" component="li">
                ID: {photo?.id || ""}
              </Typography>
              <Typography variant="body1" component="li">
                Album ID: {photo?.albumId || ""}
              </Typography>
              <Typography variant="body1" component="li">
                {"URL: "}
                {photo?.url && (
                  <MuiLink href={photo.url} rel="noreferrer noopener">
                    {photo.url}
                  </MuiLink>
                )}
              </Typography>
              <Typography variant="body1" component="li">
                {"Thumbnail URL: "}
                {photo?.thumbnailUrl && (
                  <MuiLink href={photo.thumbnailUrl} rel="noreferrer noopener">
                    {photo.thumbnailUrl}
                  </MuiLink>
                )}
              </Typography>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
