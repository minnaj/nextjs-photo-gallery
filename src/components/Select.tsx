import InputLabel from "@mui/material/InputLabel";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useSmOrLarger } from "@/utils/breakpoints";

type CustomSelectOption<T> = {
  label: string;
  value: T;
};

type CustomSelectProps<T> = {
  label: string;
  value: T;
  id: string;
  options: CustomSelectOption<T>[];
  onChange: (event: SelectChangeEvent<T>) => void;
  size?: "medium" | "small";
};

export default function Select<T extends string | number>({
  label,
  value,
  id,
  options,
  onChange,
  size,
}: CustomSelectProps<T>) {
  const smOrLarger = useSmOrLarger();

  let selectSize: "medium" | "small" = smOrLarger ? "medium" : "small";
  if (size) {
    selectSize = size;
  }
  return (
    <FormControl size={selectSize}>
      <InputLabel id={`${id}-label`} sx={{ mr: 1 }}>
        {label}
      </InputLabel>
      <MuiSelect
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={onChange}
        label={label}
      >
        {options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
