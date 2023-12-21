import { Suspense } from "react";
import Container from "@mui/material/Container";
import PhotoGrid from "@/components/PhotoGrid";
import Loading from "@/app/loading";
// import sleep from "@/utils/sleep";

async function getPhotos(page = 1, limit = 10) {
  // await sleep(4000); // To test suspense
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
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
      <Suspense fallback={<Loading />}>
        <PhotoGrid promise={photos} />
      </Suspense>
    </Container>
  );
}
