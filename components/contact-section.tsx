"use client";
import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Грешка при изпращане')
      }

      setIsSubmitted(true)
      setFormState({ name: "", phone: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 6000)
    } catch {
      setError('Възникна грешка. Моля, опитайте отново или се свържете с нас по телефон.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Контакти
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Свържете се с нас
          </h2>
          <p className="text-gray-500 max-w-xl">
            Запазете час или задайте въпрос — ще се свържем с вас в рамките на деня.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info + map */}
          <div className="lg:col-span-2 space-y-5">
            <a
              href="tel:0876709701"
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors shrink-0">
                <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Телефон</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">0876709701</p>
              </div>
            </a>

            <a
              href="https://maps.app.goo.gl/mN1HVXd5bvLD3SkQA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors shrink-0">
                <MapPin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Адрес</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">гр. Сандански, бул. Европа 17</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Работно време</p>
                <p className="text-sm font-semibold text-gray-900">Пон–Пет: 9:00–18:00</p>
                <p className="text-xs text-gray-500">Събота: 9:00–14:00 · Неделя: затворено</p>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://maps.app.goo.gl/mN1HVXd5bvLD3SkQA"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Сандански"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Запазете час</h3>
            <p className="text-sm text-gray-500 mb-6">Попълнете формата и ще се свържем с вас.</p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Съобщението е изпратено!
                </h4>
                <p className="text-sm text-gray-500">
                  Ще се свържем с вас възможно най-скоро.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Вашето име <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    className="border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="0876709701"
                    value={formState.phone}
                    onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                    className="border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Съобщение <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Опишете проблема или услугата, от която се нуждаете..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="border-gray-200 focus:border-blue-400 focus:ring-blue-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white h-11"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Изпращане...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Изпрати съобщение
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  С изпращането се съгласявате с нашата{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">Политика за поверителност</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
