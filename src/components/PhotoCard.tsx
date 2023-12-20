import Image from "next/image";
import Grid from "@mui/material/Grid";

type PhotoCardProps = {
  imageUrl: string;
  title: string;
};

export default function PhotoCard({ imageUrl, title }: PhotoCardProps) {
  return (
    <Grid item xs={12} md={3}>
      <Image
        height={150}
        width={150}
        src={imageUrl}
        alt={title}
        loading="lazy"
      />
    </Grid>
  );
}
