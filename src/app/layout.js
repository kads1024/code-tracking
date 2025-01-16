import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FirefliesBackground";
import Sound from "@/components/Sound";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Portfolio | %s | Kenneth",
    default:
      "Kenneth's Portfolio",
  },
  description:
    "A creative portfolio developed with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
