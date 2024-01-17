import { useTranslations } from "next-intl";
import MuiLink from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Photo } from "@/types/photo";

type PhotoViewProps = {
  photo?: Photo;
};

export default function PhotoInformation({ photo }: PhotoViewProps) {
  const t = useTranslations("PhotoView");

  return (
    <Paper
      sx={{
        p: 4,
        width: "31.25rem",
        maxWidth: "100%",
        "& > ul": { margin: 0, padding: 0, "> li": { listStyleType: "none" } },
      }}
    >
      <ul>
        <Typography variant="body1" component="li">
          {`${t("title")}: ${photo?.title || ""}`}
        </Typography>
        <Typography variant="body1" component="li">
          ID: {photo?.id || ""}
        </Typography>
        <Typography variant="body1" component="li">
          {`${t("album")} ID: ${photo?.albumId || ""}`}
        </Typography>
        <Typography variant="body1" component="li">
          {"URL: "}
          {photo?.url && (
            <MuiLink
              href={photo.url}
              rel="noreferrer noopener"
              color="secondary"
            >
              {photo.url}
            </MuiLink>
          )}
        </Typography>
        <Typography variant="body1" component="li">
          {`${t("thumbnail")} URL: `}
          {photo?.thumbnailUrl && (
            <MuiLink
              href={photo.thumbnailUrl}
              rel="noreferrer noopener"
              color="secondary"
            >
              {photo.thumbnailUrl}
            </MuiLink>
          )}
        </Typography>
      </ul>
    </Paper>
  );
}
