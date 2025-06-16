import { Metadata } from "next";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { Rubik } from "next/font/google"
import "./globals.css";

const rubik = Rubik({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Jhon Edmir Calingco",
  description: "Welcome to my online portfolio, crafted with care and creativity by Jhon Edmir Calingco using Next.js. Dive into a showcase of my skills, projects, and experiences, presented with an elegant touch and powered by modern web technologies. Explore my journey, discover my expertise, and get inspired by the passion driving my work. Let this portfolio be a window into my world, where innovation meets design and where possibilities are endless. Join me on this digital journey, and let's create something remarkable together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.className}>
      <body
        className="bg-[#f4f4f4] dark:bg-[#0a192f] antialiased"
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
