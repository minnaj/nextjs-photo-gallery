import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "React Photo Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
