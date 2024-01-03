import InputLabel from "@mui/material/InputLabel";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
};

export default function Select<T extends string | number>({
  label,
  value,
  id,
  options,
  onChange,
}: CustomSelectProps<T>) {
  return (
    <>
      <InputLabel id={`${id}-label`} sx={{ mr: 1 }}>
        {label}
      </InputLabel>
      <MuiSelect
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </>
  );
}
