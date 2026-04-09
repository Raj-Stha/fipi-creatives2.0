import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Our Services | FiPi Creatives",
  description: "Explore our wide range of creative and digital services designed to grow your business.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            We provide end-to-end digital and creative solutions to help your brand stand out and thrive in the modern landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 block"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Image
                    src={service.heroImage || `https://picsum.photos/seed/${service.slug}/800/600`}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
                        {service.slug.replace("-", " ")}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 text-sm text-gray-500">
                      {(service.packages.length > 0 
                        ? service.categories.filter(c => c.id !== "all") 
                        : service.categories
                      ).slice(0, 3).map((cat) => (
                        <div key={cat.id} className="flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          <span>{cat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-secondary font-semibold group/link">
                    Explore Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Section/CTA */}
      <section className="max-w-5xl mx-auto px-4 mt-32 text-center">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-[100px]" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to scale your business?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Our team of experts is ready to help you navigate your digital journey and achieve measurable results.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-secondary text-gray-900 font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 relative z-10"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
