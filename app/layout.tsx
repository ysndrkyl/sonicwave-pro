import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "SonicWave Pro — Engineering Perception",
  description:
    "Precision-engineered audio technology — built for those who hear what others miss.",
  openGraph: {
    title: "SonicWave Pro",
    description: "Sound is our universe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-white overflow-x-hidden">
        <LanguageProvider>
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
