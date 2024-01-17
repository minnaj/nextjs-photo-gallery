"use client";
import { SelectChangeEvent } from "@mui/material";
import { usePathname, useRouter } from "@/navigation";
import Select from "../Select";

type LanguageOption = {
  value: string;
  label: string;
};

type LanguageSelectProps = {
  label: string;
  locale: string;
  options: LanguageOption[];
};

export default function LanguageSelect({
  label,
  locale,
  options,
}: LanguageSelectProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: SelectChangeEvent<string>) => {
    router.replace(pathname, { locale: event.target.value });
  };

  return (
    <Select
      id="language-select"
      label={label}
      value={locale}
      options={options}
      onChange={handleChange}
      size="small"
    />
  );
}
