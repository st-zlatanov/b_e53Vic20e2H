"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  span?: string;
}

const galleryImages: GalleryImage[] = [
{
  id: 1,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_101913475-1772255578223.png",
  alt: "Механик извършва компютърна диагностика на автомобил в сервиза",
  title: "Компютърна диагностика",
  span: "col-span-2 row-span-2"
},
{
  id: 2,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1585bc084-1777547763826.png",
  alt: "Смяна на масло и филтри в автосервиза",
  title: "Смяна на масла"
},
{
  id: 3,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc99196c-1774003177259.png",
  alt: "Ремонт на спирачна система на автомобил",
  title: "Спирачна система"
},
{
  id: 4,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_138a3afc3-1772729321776.png",
  alt: "Работно пространство и инструменти в автосервиза",
  title: "Работно пространство"
},
{
  id: 5,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1eadce5f1-1772690396859.png",
  alt: "Ремонт на двигател в автосервиза",
  title: "Ремонт на двигатели"
},
{
  id: 6,
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_181c98e0b-1765186968378.png",
  alt: "Автомобил в сервизен бокс за обслужване",
  title: "Сервизен бокс",
  span: "col-span-2"
}];


export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Галерия
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Нашият сервиз
          </h2>
          <p className="text-gray-500 max-w-xl">
            Разгледайте нашето работно пространство и оборудване
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3">
          {galleryImages.map((image) =>
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`group relative overflow-hidden rounded-xl bg-gray-100 ${image.span || ''} hover:shadow-lg transition-all duration-300`}>

              <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2.5">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-white font-medium">{image.title}</p>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage &&
      <div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}>

          <button
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full p-2"
          onClick={() => setSelectedImage(null)}
          aria-label="Затвори">

            <X className="w-6 h-6" />
          </button>
          <div
          className="relative max-w-3xl w-full max-h-[80vh] rounded-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}>

            <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={900}
            height={600}
            className="object-contain w-full h-full" />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-medium">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      }
    </section>);

}