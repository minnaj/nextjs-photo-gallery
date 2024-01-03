"use client";
import { ChangeEvent, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SelectChangeEvent } from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Select from "@/components/Select";
import { LIMIT_OPTIONS } from "@/utils/image";

type PaginationProps = {
  page: number;
  pageCount: number | null;
  limit: number;
};

export default function Pagination({
  page,
  pageCount,
  limit,
}: PaginationProps) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pageCount && page > pageCount) {
      const params = new URLSearchParams(searchParams);
      params.set("page", `${pageCount}`);
      replace(`${pathname}?${params.toString()}`);
    }
  }, [replace, page, pageCount, pathname, searchParams]);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", `${value}`);
    replace(`${pathname}?${params.toString()}`);
  };

  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", `${event.target.value}`);
    replace(`${pathname}?${params.toString()}`);
  };

  if (!pageCount) {
    return null;
  }
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <MuiPagination
        page={page}
        onChange={handlePageChange}
        count={pageCount}
        shape="rounded"
        color="primary"
      />
      <Select
        id="limit-select"
        label="Limit:"
        value={limit}
        onChange={handlePageSizeChange}
        options={LIMIT_OPTIONS.map((option) => ({
          label: `${option}`,
          value: option,
        }))}
      />
    </Stack>
  );
}
