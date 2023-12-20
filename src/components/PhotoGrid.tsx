import Grid from "@mui/material/Grid";
import PhotoCard from "@/components/PhotoCard";
import type { Photo } from "../types/photo";

type PhotoGrid = {
  promise: Promise<Photo[]>;
};

export default async function PhotoGrid({ promise }: PhotoGrid) {
  const photos = await promise;

  if (!photos) {
    return null;
  }
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          imageUrl={photo.thumbnailUrl}
          title={photo.title}
        />
      ))}
    </Grid>
  );
}
