import { useLocale, useTranslations } from "next-intl";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LanguageSelect from "./LanguageSelect";
import { locales } from "@/navigation";

type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  const t = useTranslations("LanguageSelect");
  const locale = useLocale();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <LanguageSelect
          label={t("language")}
          locale={locale}
          options={locales.map((locale) => ({
            label: t("locale", { locale }),
            value: locale,
          }))}
        />
      </Toolbar>
    </AppBar>
  );
}
