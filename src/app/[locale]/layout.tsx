import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Container from "@mui/material/Container";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/Navbar";

type GenerateMetadataParams = { params: { locale: string } };

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataParams) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
  };
}

type RootLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const t = useTranslations("PhotoGallery");
  return (
    <html lang={locale}>
      <body>
        <ThemeRegistry>
          <Navbar title={t("photo_gallery")} />
          <Container maxWidth="lg" sx={{ marginTop: 5, minWidth: "22rem" }}>
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
