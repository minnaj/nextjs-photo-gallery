import { useTranslations } from "next-intl";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Photo } from "@/types/photo";
import NavigationLink from "../NavigationLink";
import LoadableImage from "./LoadableImage";
import PhotoInformation from "./PhotoInformation";

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
          <LoadableImage src={photo?.url} alt={photo?.title} />
        </Grid>
        <Grid item xs>
          <PhotoInformation photo={photo} />
        </Grid>
      </Grid>
    </>
  );
}
