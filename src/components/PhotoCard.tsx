import Image from "next/image";
import Grid from "@mui/material/Grid";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "@/utils/image";
import Link from "next/link";

type PhotoCardProps = {
  id: number;
  imageUrl: string;
  title: string;
};

export default function PhotoCard({ id, imageUrl, title }: PhotoCardProps) {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} flexShrink="0">
      <Link href={`/photo/${id}`}>
        <Image
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src={imageUrl}
          alt={title}
          loading="lazy"
        />
      </Link>
    </Grid>
  );
}
