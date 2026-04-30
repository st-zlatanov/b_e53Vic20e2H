"use client";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Диагностично оборудване",
    description: "Съвременна компютърна диагностика"
  },
  {
    id: 2,
    title: "Работно пространство",
    description: "Просторен и оборудван сервиз"
  },
  {
    id: 3,
    title: "Специализирани инструменти",
    description: "Професионално оборудване"
  },
  {
    id: 4,
    title: "Ремонт на двигатели",
    description: "Основен ремонт на двигатели"
  },
  {
    id: 5,
    title: "Обслужване на климатици",
    description: "Зареждане и диагностика"
  },
  {
    id: 6,
    title: "Смяна на масла",
    description: "Качествени масла и филтри"
  }
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
            Галерия
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Нашият сервиз
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Разгледайте нашето работно пространство и оборудване
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-square bg-card rounded-md overflow-hidden border border-border hover:border-primary/30 transition-all"
            >
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-2">
                    <span className="text-lg font-bold text-primary">{image.id}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{image.title}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-primary p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-xs text-primary-foreground text-center">{image.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-xl w-full bg-card rounded-md p-8 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-md flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">{selectedImage}</span>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {galleryImages.find(img => img.id === selectedImage)?.title}
            </h3>
            <p className="text-muted-foreground">
              {galleryImages.find(img => img.id === selectedImage)?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
