import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";

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
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
