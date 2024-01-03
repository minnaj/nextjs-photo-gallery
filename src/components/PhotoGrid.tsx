import Grid from "@mui/material/Grid";
import PhotoCard from "@/components/PhotoCard";
import type { Photo } from "../types/photo";

type PhotoGrid = {
  photos: Photo[];
};

export default async function PhotoGrid({ photos }: PhotoGrid) {
  if (!photos) {
    return null;
  }
  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 2 }}
      alignItems="center"
      justifyContent="center"
    >
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          id={photo.id}
          imageUrl={photo.thumbnailUrl}
          title={photo.title}
        />
      ))}
    </Grid>
  );
}
