"use client";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+359 88 812 3456",
    href: "tel:+359888123456"
  },
  {
    icon: Mail,
    label: "Имейл",
    value: "info@autoservice-sandanski.bg",
    href: "mailto:info@autoservice-sandanski.bg"
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "ул. Индустриална 15, Сандански",
    href: "https://maps.google.com/?q=Sandanski,Bulgaria"
  },
  {
    icon: Clock,
    label: "Работно време",
    value: "Пон-Пет: 8:00-18:00, Съб: 9:00-14:00",
    href: null
  }
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", phone: "", email: "", car: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
            Контакти
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Свържете се с нас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Имате въпроси или искате да запазите час? Свържете се с нас по удобен за вас начин.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {contactInfo.map((item) => (
                <div 
                  key={item.label}
                  className="group p-4 bg-card rounded-md border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-9 h-9 bg-primary/10 group-hover:bg-primary rounded-md flex items-center justify-center mb-3 transition-colors">
                    <item.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-sm font-medium text-card-foreground hover:text-primary transition-colors"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-card-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="aspect-video bg-card rounded-md border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47696.99854693!2d23.253!3d41.567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aad282e2f00001%3A0x400a01269bf4e20!2sSandanski!5e0!3m2!1sen!2sbg!4v1"
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

          <div className="bg-card p-6 rounded-md border border-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-5">
              Запазете час за обслужване
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-md flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-base font-semibold text-card-foreground mb-2">
                  Съобщението е изпратено!
                </h4>
                <p className="text-sm text-muted-foreground">
                  Ще се свържем с вас възможно най-скоро.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Име *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="Вашето име"
                      value={formState.name}
                      onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+359 88 123 4567"
                      value={formState.phone}
                      onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Имейл
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label htmlFor="car" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Марка и модел
                    </label>
                    <Input
                      id="car"
                      type="text"
                      placeholder="напр. BMW X5"
                      value={formState.car}
                      onChange={(e) => setFormState(prev => ({ ...prev, car: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1.5">
                    Съобщение *
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Опишете проблема или услугата, от която се нуждаете..."
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <Button type="submit" className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Изпращане..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Изпрати съобщение
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  С изпращането на формуляра се съгласявате да обработим вашите данни за целите на комуникацията.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
