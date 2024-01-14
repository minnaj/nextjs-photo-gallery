import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import PhotoCard from "@/components/PhotoCard";
import Pagination from "@/components/Pagination";
import type { Photo } from "../types/photo";

type PhotoGridProps = {
  photos: Photo[];
  page: number;
  pageCount: number | null;
  limit: number;
};

export default function PhotoGrid({
  photos,
  page,
  pageCount,
  limit,
}: PhotoGridProps) {
  if (!photos) {
    return null;
  }
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination page={page} pageCount={pageCount} limit={limit} />
      <Grid
        container
        spacing={{ xs: 1, sm: 3 }}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "56.25rem" }}
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
    </Stack>
  );
}
