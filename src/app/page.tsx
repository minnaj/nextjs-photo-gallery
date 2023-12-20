import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PhotoCard from "@/components/PhotoCard";
import type { Photo } from "../types/photo";

async function getPhotos(page = 1, limit = 10): Promise<Photo[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  return res.json();
}

export default async function Home() {
  const photos = await getPhotos(1, 20);

  return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
      {photos && (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              imageUrl={photo.thumbnailUrl}
              title={photo.title}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
}
