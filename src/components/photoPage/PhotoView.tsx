import { useTranslations } from "next-intl";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Photo } from "@/types/photo";
import NavigationLink from "../NavigationLink";
import PhotoInformation from "./PhotoInformation";
import LoadableImage from "../LoadableImage";
import { PHOTO_HEIGHT, PHOTO_WIDTH } from "@/utils/image";

type PhotoViewProps = {
  photo?: Photo;
};

export default function PhotoView({ photo }: PhotoViewProps) {
  const t = useTranslations("PhotoView");

  return (
    <>
      <Box mb={2}>
        <NavigationLink href="/">{t("return_to_gallery")}</NavigationLink>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <LoadableImage
            src={photo?.url}
            alt={photo?.title || ""}
            width={PHOTO_WIDTH}
            height={PHOTO_HEIGHT}
          />
        </Grid>
        <Grid item xs>
          <PhotoInformation photo={photo} />
        </Grid>
      </Grid>
    </>
  );
}
