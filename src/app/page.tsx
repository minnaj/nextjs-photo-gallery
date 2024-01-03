import PhotoGrid from "@/components/PhotoGrid";
import { Photo } from "@/types/photo";
import { LIMIT_OPTIONS } from "@/utils/image";
import { parseNumber } from "@/utils/parse";
// import sleep from "@/utils/sleep";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 20;

type PhotoData = {
  photos: Photo[];
  pageCount: number | null;
};

async function getPhotos(page = 1, limit = 10): Promise<PhotoData> {
  // await sleep(4000); // To test suspense
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  const photos = await res.json();
  const totalCount = parseNumber(res.headers.get("x-total-count"), null);
  const pageCount = totalCount ? Math.ceil(totalCount / limit) : null;
  return {
    photos,
    pageCount,
  };
}

type HomeProps = {
  searchParams?: {
    page?: string;
    limit?: string;
  };
};

export default async function Home({ searchParams }: HomeProps) {
  const page = parseNumber(searchParams?.page || "", DEFAULT_PAGE);
  let limit = parseNumber(searchParams?.limit || "", DEFAULT_LIMIT);
  if (!LIMIT_OPTIONS.includes(limit)) {
    limit = DEFAULT_LIMIT;
  }

  const photoData = await getPhotos(page, limit);

  return (
    <PhotoGrid
      photos={photoData.photos}
      page={page}
      pageCount={photoData.pageCount}
      limit={limit}
    />
  );
}
