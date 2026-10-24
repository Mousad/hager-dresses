
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  ShieldCheck,
  Gem,
} from "lucide-react";

import { useBooking } from "@/components/booking-provider";
import { Header, Footer } from "@/components/site-chrome";
import { DressCard } from "@/components/dress-card";
import { categories, dresses } from "@/lib/dresses";

const features = [
  {
    icon: HeartHandshake,
    title: "خدمة تهتم بيكِ",
    description: "نساعدك تختاري الفستان المناسب ليومك المميز",
  },
  {
    icon: ShieldCheck,
    title: "ثقة وراحة",
    description: "تجربة حجز واضحة واهتمام بكل التفاصيل",
  },
  {
    icon: Gem,
    title: "جودة وأناقة",
    description: "فساتين مختارة بعناية لإطلالة تليق بيكِ",
  },
];

const PRODUCTS_PER_PAGE = 6;

export default function Home() {
  const { count } = useBooking();

  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedGalleryImage, setSelectedGalleryImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // ترتيب ثابت للفساتين لتجنب اختلاف HTML بين السيرفر والمتصفح
  const mixedDresses = dresses;

  const filteredDresses =
    activeCategory === "الكل"
      ? mixedDresses
      : mixedDresses.filter(
          (dress) => dress.category === activeCategory
        );

  const totalPages = Math.ceil(
    filteredDresses.length / PRODUCTS_PER_PAGE
  );

  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const visibleDresses = filteredDresses.slice(
    (safeCurrentPage - 1) * PRODUCTS_PER_PAGE,
    safeCurrentPage * PRODUCTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      <Header count={count} />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[560px] overflow-hidden bg-white text-white">
          <Image
            src="/images/hager-hero.png"
            alt="إطلالة من مجموعة هاجر دريسز"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-75"
          />

          <div className="absolute inset-0 bg-[#292B27]/35" />

          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-16 lg:items-center lg:px-10 lg:pb-0">
            <div className="max-w-lg">
              <h1 className="font-serif text-5xl leading-[1.18] lg:text-7xl">
                إطلالتكِ
                <br />
                المميزة تبدأ من هنا
              </h1>

              <p className="mt-6 leading-8 text-white/85">
                اكتشفي فساتين السهرة واختاري الإطلالة المناسبة لأجمل مناسباتكِ.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/dresses"
                  className="bg-white px-6 py-3 text-sm text-[#292B27] transition-colors hover:bg-[#F3F5F0]"
                >
                  اكتشفي الفساتين
                  <ArrowLeft className="mr-2 inline size-4" />
                </Link>

                <Link
                  href="/booking"
                  className="border border-white/60 px-6 py-3 text-sm transition-colors hover:bg-white/10"
                >
                  احجزي فستانكِ
                  {count > 0 && (
                    <span className="mr-2 inline-flex size-5 items-center justify-center rounded-full bg-[#8D9B83] text-xs text-white">
                      {count}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Features */}
        <section
          dir="rtl"
          className="border-b border-[#E8EAE4] bg-white px-4 py-8 sm:py-10"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-x-reverse divide-[#E8EAE4]">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center px-2 text-center sm:px-6"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#F3F5F0] text-[#8D9B83] sm:size-12">
                    <Icon
                      className="size-5 sm:size-6"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-[11px] font-semibold text-[#292B27] sm:text-sm">
                    {feature.title}
                  </h3>

                  <p className="mt-2 hidden max-w-[220px] text-xs leading-6 text-[#777A73] sm:block">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mx-auto max-w-7xl bg-white px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                التصنيفات
              </h2>
            </div>

            <Link
              href="/categories"
              className="shrink-0 text-sm underline underline-offset-4 transition-colors hover:text-[#8D9B83]"
            >
              الكل
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                href={`/categories/${category.slug}`}
                key={category.slug}
                className="group relative aspect-[.8] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <p className="absolute bottom-5 right-5 font-serif text-xl text-white sm:text-2xl">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Dresses */}
        <section
          id="featured-dresses"
          dir="rtl"
          className="bg-white px-5 py-16 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                  اختيارات مميزة
                </h2>
              </div>

              <Link
                href="/dresses"
                className="w-fit shrink-0 text-sm underline underline-offset-8 transition-colors hover:text-[#8D9B83]"
              >
                كل المجموعة
              </Link>
            </div>

            {/* Category Filters */}
            <div className="mt-8 border-b border-[#DDE1D8] pb-5">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "الكل",
                  ...categories.map((category) => category.name),
                ].map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={activeCategory === category}
                    className={`inline-flex min-h-7 items-center justify-center rounded-[12px] border px-2 py-1 text-[12px] transition-all duration-200 sm:text-sm ${
                      activeCategory === category
                        ? "border-[#8D9B83] bg-[#8D9B83] text-white shadow-sm"
                        : "border-[#DDE1D8] bg-white text-[#777A73] hover:border-[#8D9B83] hover:text-[#687764]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Dresses Grid */}
            {visibleDresses.length > 0 ? (
              <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3">
                {visibleDresses.map((dress) => (
                  <DressCard key={dress.id} dress={dress} />
                ))}
              </div>
            ) : (
              <div className="mt-8 flex min-h-48 flex-col items-center justify-center bg-white px-5 text-center">
                <p className="font-serif text-xl">
                  لا توجد فساتين في هذا التصنيف
                </p>

                <p className="mt-2 text-sm text-[#777A73]">
                  جرّبي اختيار تصنيف آخر لمشاهدة الفساتين المتاحة.
                </p>

                <button
                  type="button"
                  onClick={() => handleCategoryChange("الكل")}
                  className="mt-4 text-sm text-[#8D9B83] underline underline-offset-4"
                >
                  عرض جميع الفساتين
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                aria-label="صفحات الفساتين"
                className="mt-12 flex flex-wrap items-center justify-center gap-2"
              >
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.max(1, page - 1))
                  }
                  disabled={safeCurrentPage === 1}
                  aria-label="الصفحة السابقة"
                  className="flex size-10 items-center justify-center border border-[#DDE1D8] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronRight className="size-4" />
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    aria-label={`الصفحة ${page}`}
                    aria-current={
                      safeCurrentPage === page ? "page" : undefined
                    }
                    className={`flex size-10 items-center justify-center border text-sm transition-colors ${
                      safeCurrentPage === page
                        ? "border-[#8D9B83] bg-[#8D9B83] text-white"
                        : "border-[#DDE1D8] text-[#292B27] hover:bg-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(totalPages, page + 1)
                    )
                  }
                  disabled={safeCurrentPage === totalPages}
                  aria-label="الصفحة التالية"
                  className="flex size-10 items-center justify-center border border-[#DDE1D8] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft className="size-4" />
                </button>
              </nav>
            )}

            {/* Results Count */}
            {filteredDresses.length > 0 && (
              <p className="mt-5 text-center text-xs text-[#777A73]">
                عرض{" "}
                {Math.min(
                  (safeCurrentPage - 1) * PRODUCTS_PER_PAGE + 1,
                  filteredDresses.length
                )}
                {" - "}
                {Math.min(
                  safeCurrentPage * PRODUCTS_PER_PAGE,
                  filteredDresses.length
                )}
                {" من "}
                {filteredDresses.length} فستان
              </p>
            )}
          </div>
        </section>

        {/* About Atelier Section */}
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10 lg:py-20">
          <div className="relative min-h-[480px] overflow-hidden bg-[#292B27] lg:min-h-[600px]">
            <Image
              src="/images/dress-black.png"
              alt="تفاصيل فستان من هاجر دريسز"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

            <div className="absolute inset-0 flex items-end p-6 sm:p-10 lg:p-16">
              <div className="max-w-xl text-white">
                <span className="text-xs tracking-[.2em] text-[#D5DDCE]">
                  عن الأتيليه
                </span>

                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-6xl">
                  أناقتكِ تستحق الاختيار بعناية
                </h2>

                <p className="mt-5 max-w-md text-sm leading-8 text-white/85 sm:text-base">
                  اكتشفي مجموعة من فساتين السهرة، واختاري ما يناسب ذوقكِ
                  ومناسبتكِ.
                </p>

                <Link
                  href="/about"
                  className="mt-7 inline-flex items-center bg-[#8D9B83] px-6 py-3 text-sm text-white transition-colors hover:bg-[#75846B]"
                >
                  تعرّفي علينا
                  <ArrowLeft className="mr-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Dress Carousel */}
        {visibleDresses.length > 0 && (
          <section
            dir="rtl"
            className="bg-white px-5 pb-12 sm:hidden"
            aria-label="فساتين مقترحة"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-serif text-xl">اكتشفي المزيد</h2>
              <Link
                href="/dresses"
                className="text-xs text-[#8D9B83] underline underline-offset-4"
              >
                كل الفساتين
              </Link>
            </div>

            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {visibleDresses.map((dress) => (
                <div
                  key={dress.id}
                  className="w-[60%] shrink-0 snap-start"
                >
                  <DressCard dress={dress} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Image Lightbox */}
        {selectedGalleryImage && (
          <div
            dir="rtl"
            role="dialog"
            aria-modal="true"
            aria-label={selectedGalleryImage.alt}
            onClick={() => setSelectedGalleryImage(null)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setSelectedGalleryImage(null);
              }
            }}
            tabIndex={-1}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              aria-label="إغلاق الصورة"
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white transition-colors hover:bg-white/15"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            <div
              className="relative h-[80vh] w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedGalleryImage.src}
                alt={selectedGalleryImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Google Maps */}
        <section
          id="location"
          dir="rtl"
          className="bg-white px-4 py-16 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#292B27] md:text-4xl">
                موقعنا
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
                يسعدنا زيارتك لاختيار فستانك المناسب وتجربته في الأتيليه.
                شوفي موقعنا على الخريطة وسهّلي وصولك لينا.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#8D9B83]/20 bg-white shadow-sm">
              <iframe
                title="موقع هاجر دريسز على خرائط جوجل"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6914.279976524641!2d30.931293703615673!3d29.94665177069492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585500086f2765%3A0xec2af2532a012a25!2sHager%20dresses!5e0!3m2!1sar!2seg!4v1792841242410!5m2!1sar!2seg"
                className="h-[300px] w-full border-0 md:h-[420px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section
          dir="rtl"
          className="bg-white px-4 py-14 md:py-20"
        >
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mt-3 text-2xl font-bold text-[#292B27] md:text-4xl">
              تابعينا على
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500 md:text-base">
              شوفي أحدث الفساتين، وتابعي جديدنا، وتواصلي معانا بسهولة.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/YOUR_INSTAGRAM/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تابعينا على إنستغرام"
                className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[#8D9B83]/20 bg-[#f3f5f0] text-[#8D9B83] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8D9B83] hover:text-white hover:shadow-lg md:h-20 md:w-20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-7 w-7 md:h-8 md:w-8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/YOUR_FACEBOOK/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تابعينا على فيسبوك"
                className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[#8D9B83]/20 bg-[#f3f5f0] text-[#8D9B83] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8D9B83] hover:text-white hover:shadow-lg md:h-20 md:w-20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7 md:h-8 md:w-8"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.8H7V13h2.8v8h3.7Z" />
                </svg>
              </a>

              <a
                href="https://wa.me/201032693166"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصلي معنا على واتساب"
                className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[#8D9B83]/20 bg-[#f3f5f0] text-[#8D9B83] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8D9B83] hover:text-white hover:shadow-lg md:h-20 md:w-20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 md:h-8 md:w-8"
                >
                  <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
                  <path d="M9 8.5c.4 2 2 3.6 4 4l1.2-1 2 1c-.3 1.4-1.3 2-2.5 1.8-3.2-.7-5.5-3-6.2-6.2C7.3 6.9 8 5.9 9.3 5.7l1 2-1.3.8Z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
