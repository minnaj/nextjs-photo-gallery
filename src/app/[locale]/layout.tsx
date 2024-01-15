import type { Metadata } from "next";
import { ReactNode } from "react";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "React Photo Gallery",
};

type RootLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body>
        <ThemeRegistry>
          <Navbar />
          <Container maxWidth="lg" sx={{ marginTop: 5, minWidth: "22rem" }}>
            {children}
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
