"use client";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MuiPagination from "@mui/material/Pagination";
import MuiPaginationItem from "@mui/material/PaginationItem";
import { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Select from "@/components/Select";
import { LIMIT_OPTIONS } from "@/utils/image";
import { useSmOrLarger } from "@/utils/breakpoints";
import { Link } from "@/navigation";

type PaginationProps = {
  page: number;
  pageCount: number | null;
  limit: number;
  limitLabel: string;
};

export default function Pagination({
  page,
  pageCount,
  limit,
  limitLabel,
}: PaginationProps) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const smOrLarger = useSmOrLarger();

  useEffect(() => {
    if (pageCount && page > pageCount) {
      const params = new URLSearchParams(searchParams);
      params.set("page", `${pageCount}`);
      push(`${pathname}?${params.toString()}`);
    }
  }, [push, page, pageCount, pathname, searchParams]);

  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    const params = new URLSearchParams(searchParams);
    params.set("limit", `${event.target.value}`);
    push(`${pathname}?${params.toString()}`);
  };

  const limitParam = searchParams.get("limit");

  if (!pageCount) {
    return null;
  }
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <MuiPagination
        page={page}
        count={pageCount}
        shape="rounded"
        color="primary"
        siblingCount={smOrLarger ? 1 : 0}
        size={smOrLarger ? "medium" : "small"}
        renderItem={(item) => (
          <MuiPaginationItem
            component={Link}
            href={`?page=${item.page}${
              limitParam ? `&limit=${limitParam}` : ""
            }`}
            shallow
            {...item}
          />
        )}
      />
      <Select
        id="limit-select"
        label={`${limitLabel}:`}
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
