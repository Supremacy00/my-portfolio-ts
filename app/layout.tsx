import { Inter } from "next/font/google";
import "./globals.css";
import { MyContextProvider } from "@/context/ComponentContext";
import NavMobile from "@/components/navbar/NavMobile";
import { ThemeProvider } from "@/context/theme-provider";
import { Suspense } from "react";
import PageLoader from "@/components/loader/PageLoader";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://explore-my-portfolio.vercel.app/"),
  title: "Explore My Portfolio - Frontend Developer & Creator",
  description:
    "Showcasing the projects, skills, and expertise of a passionate frontend developer. Discover a world of seamless designs, intuitive user interfaces, and innovative solutions.",
  openGraph: {
    title: "Explore My Portfolio",
    description:
      "Dive into the journey of a frontend developer. Explore dynamic projects, innovative solutions, and a commitment to crafting exceptional digital experiences.",
    url: "https://my-portfolio-ts.vercel.app/",
    type: "website",
    siteName: "Explore My Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://my-portfolio-ts.vercel.app/assets/images/my-portfolio-opengraph-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio OpenGraph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore My Portfolio",
    description:
      "Discover projects, skills, and insights from a dedicated frontend developer.",
    images: [
      {
        url: "https://my-portfolio-ts.vercel.app/assets/images/my-portfolio-opengraph-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Twitter Card Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: "no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <MyContextProvider>
            <NavMobile />
            <Suspense fallback={<PageLoader />}>{children}</Suspense>
            <Toaster
              position="top-center"
              richColors
              style={{
                zIndex: 9999,
              }}
            />
          </MyContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
