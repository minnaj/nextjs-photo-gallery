import { notFound } from "next/navigation";
import { Photo } from "@/types/photo";
import PhotoView from "@/components/PhotoView";
import { parseNumber } from "@/utils/parse";

async function getPhoto(id: number): Promise<Photo> {
  // await sleep(4000); // To test suspense
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch photo ID ${id}`);
  }
  return res.json();
}

type PhotoPageProps = {
  params: { id: string };
};

export default async function PhotoPage({ params }: PhotoPageProps) {
  const numberId = parseNumber(params.id, null);
  if (Number.isNaN(numberId) || numberId === null) {
    return notFound();
  }
  const photo = await getPhoto(numberId);

  return <PhotoView photo={photo} />;
}
