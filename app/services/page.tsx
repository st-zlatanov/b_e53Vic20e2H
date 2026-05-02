import { Header } from "@/components/header";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги | Autoworks Сандански",
  description: "Пълен спектър от автомобилни услуги — диагностика, смяна на масла, спирачна система, климатик, двигатели и още.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServicesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </>
  );
}
