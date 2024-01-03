import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <CircularProgress color="secondary" sx={{ my: 5 }} />
    </Grid>
  );
}
