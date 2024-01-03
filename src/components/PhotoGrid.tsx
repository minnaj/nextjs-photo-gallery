"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import PhotoCard from "@/components/PhotoCard";
import type { Photo } from "../types/photo";

type PhotoGrid = {
  photos: Photo[];
  page: number;
  pageCount: number | null;
};

export default function PhotoGrid({ photos, page, pageCount }: PhotoGrid) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", `${value}`);
    replace(`${pathname}?${params.toString()}`);
  };

  if (!photos) {
    return null;
  }
  return (
    <Stack spacing={2} alignItems="center">
      {pageCount && (
        <Pagination
          page={page}
          onChange={handlePageChange}
          count={pageCount}
          shape="rounded"
          color="primary"
        />
      )}
      <Grid
        container
        spacing={{ xs: 1, sm: 2 }}
        alignItems="center"
        justifyContent="center"
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
