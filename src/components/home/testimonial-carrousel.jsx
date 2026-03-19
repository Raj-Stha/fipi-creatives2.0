"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: "1",
    quote:
      "The best place to create a website. We have been working with this company since 2017 and are very happy with the cooperation. Their professionalism, support, and expertise make them a reliable partner for any business.",
    satisfaction: {
      value: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations",
    },
    responseTime: {
      value: "12hr",
      label: "Response Time",
      description: "Fast and reliable communication",
    },
    delivery: {
      value: "99%",
      label: "On-Time Delivery",
      description: "Projects delivered as promised",
    },
    name: "Mukesh Khadayat",
    title: "Founder at Elite Events",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    quote:
      "Outstanding service and dedication to excellence. Webpal has transformed our digital presence and helped us scale our business to new heights. Truly a game-changer for our organization.",
    satisfaction: {
      value: "95%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations",
    },
    responseTime: {
      value: "8hr",
      label: "Response Time",
      description: "Fast and reliable communication",
    },
    delivery: {
      value: "97%",
      label: "On-Time Delivery",
      description: "Projects delivered as promised",
    },
    name: "Hemant Kumar Goit",
    title: "Dean at Purbanchal University",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    quote:
      "Exceptional attention to detail and customer support. The team at Webpal went above and beyond to ensure our project was a success. Highly recommended for any digital transformation needs.",
    satisfaction: {
      value: "99%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations",
    },
    responseTime: {
      value: "6hr",
      label: "Response Time",
      description: "Fast and reliable communication",
    },
    delivery: {
      value: "100%",
      label: "On-Time Delivery",
      description: "Projects delivered as promised",
    },
    name: "Priya Singh",
    title: "CEO at Tech Innovations Ltd",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const current = testimonials[currentIndex];

  const handleChange = (newIndex, dir) => {
    if (animating) return;

    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimating(false);
    }, 250);
  };

  const next = () =>
    handleChange((currentIndex + 1) % testimonials.length, "next");

  const prev = () =>
    handleChange(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
      "prev",
    );

  return (
    <section className="w-full py-12  bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid mb-8 items-end justify-end grid-cols-2">
          <div className="">
            <h2 className="text-4xl font-bold text-gray-900">
              Delivering scalable solutions with real impact
            </h2>
          </div>

          <div className=" flex justify-end items-end gap-3 ">
            <button
              onClick={prev}
              className="p-2 w-12 h-12 flex  justify-center items-center bg-primary cursor-pointer hover:bg-secondary text-white rounded-full"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-2 w-12 h-12 flex justify-center items-center bg-primary cursor-pointer hover:bg-secondary text-white rounded-full"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Nav */}

        <div className="flex gap-5 items-stretch">
          {/* LEFT (STATIC CARD) */}
          <div className="w-[70%] ">
            <div className="bg-slate-950  rounded-xl px-10 py-16 text-white overflow-hidden">
              {/* 🔥 ONLY THIS PART ANIMATES */}
              <div
                className={`transition-all duration-400 ${
                  animating
                    ? direction === "next"
                      ? "-translate-y-8 opacity-0"
                      : "translate-y-8 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <p className="text-lg md:text-xl font-light">{current.quote}</p>

                <div className="h-px bg-slate-700 my-8"></div>

                <div className="grid grid-cols-3 gap-8">
                  {["satisfaction", "responseTime", "delivery"].map((key) => {
                    const item = current[key];
                    return (
                      <div key={key}>
                        <p className="text-5xl font-bold mb-2">{item.value}</p>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-2 mt-12">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        handleChange(i, i > currentIndex ? "next" : "prev")
                      }
                      className={`h-1.5 rounded-full ${
                        i === currentIndex
                          ? "bg-white w-7"
                          : "bg-slate-700 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT (UNCHANGED) */}
          <div className="flex rounded-xl overflow-hidden w-[30%]">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-500 to-orange-500 rounded-3xl"></div>

              <div className="relative  h-full">
                <img
                  src={current.image}
                  className="w-full h-full object-cover "
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold">{current.name}</h3>
                <p className="text-sm">{current.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
