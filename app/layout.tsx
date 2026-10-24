
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { BookingProvider } from "@/components/booking-provider";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "هاجر دريسز | فساتين سهرة للتأجير",
  description:
    "اكتشفي مجموعة هاجر دريسز من فساتين السهرة للتأجير في ٦ أكتوبر.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#8D9B83",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased`}>
        <BookingProvider>{children}</BookingProvider>
        
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
