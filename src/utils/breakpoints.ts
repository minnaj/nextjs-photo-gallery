import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export function useSmOrLarger() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("sm"));
}
