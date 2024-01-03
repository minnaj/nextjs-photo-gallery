import { Photo } from "@/types/photo";
import PhotoView from "@/components/PhotoView";

async function getPhoto(id: number): Promise<Photo> {
  // await sleep(4000); // To test suspense
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch photo ID ${id}`);
  }
  return res.json();
}

type PhotoPageProps = {
  params: { id: number };
};

export default async function PhotoPage({ params }: PhotoPageProps) {
  const photo = await getPhoto(params.id);

  return <PhotoView photo={photo} />;
}
