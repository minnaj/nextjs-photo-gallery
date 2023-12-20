import { Suspense } from "react";
import Container from "@mui/material/Container";
import type { Photo } from "../types/photo";
import PhotoGrid from "@/components/PhotoGrid";

async function getPhotos(page = 1, limit = 10): Promise<Photo[]> {
  const res = await fetch(
    `${process.env.URL}/api/photos?page=${page}&limit=${limit}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  return res.json();
}

export default async function Home() {
  const photos = getPhotos(1, 20);

  return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoGrid promise={photos} />
      </Suspense>
    </Container>
  );
}
