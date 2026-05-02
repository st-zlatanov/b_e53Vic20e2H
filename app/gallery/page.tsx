import { Header } from "@/components/header";
import { GallerySection } from "@/components/gallery-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерия | Autoworks Сандански",
  description: "Разгледайте нашия автосервиз — работно пространство, оборудване и извършени ремонти.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}
