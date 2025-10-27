import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "AIDA Creative",
  description: "A minimal and elegant creative portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
