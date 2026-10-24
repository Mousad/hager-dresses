
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { categories, dresses } from "@/lib/dresses";
import { ChevronRight, ChevronLeft, ArrowUpLeft } from "lucide-react";

const PRODUCTS_PER_PAGE = 6;

export default function HomeDressCollection() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDresses = useMemo(() => {
    if (activeCategory === "الكل") return dresses;
    return dresses.filter(
      (dress) => dress.category === activeCategory
    );
  }, [activeCategory]);

  const totalPages = Math.ceil(
    filteredDresses.length / PRODUCTS_PER_PAGE
  );

  const safePage = Math.min(currentPage, Math.max(totalPages, 1));

  const visibleDresses = filteredDresses.slice(
    (safePage - 1) * PRODUCTS_PER_PAGE,
    safePage * PRODUCTS_PER_PAGE
  );

  function selectCategory(category: string) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function changePage(page: number) {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    document
      .getElementById("home-dress-collection")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section
      id="home-dress-collection"
      dir="rtl"
      className="scroll-mt-24 bg-[#F3F5F0] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* عنوان القسم */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#8D9B83]">
              HAGER DRESSES COLLECTION
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#292B27] sm:text-4xl">
              اكتشفي مجموعتنا
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#777A73]">
              اختاري الفستان الذي يناسب مناسبتكِ وأسلوبكِ.
            </p>
          </div>

          <Link
            href="/dresses"
            className="hidden shrink-0 items-center gap-2 pb-1 text-sm text-[#55594F] transition hover:text-[#8D9B83] sm:flex"
          >
            جميع الفساتين
            <ArrowUpLeft className="size-4" />
          </Link>
        </div>

        {/* فلترة الأقسام */}
        <div className="mt-8 -mx-1 flex gap-2 overflow-x-auto px-1 pb-3">
          {[
            { name: "الكل" },
            ...categories.map((category) => ({
              name: category.name,
            })),
          ].map((category) => {
            const active = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => selectCategory(category.name)}
                aria-pressed={active}
                className={`shrink-0 border px-5 py-2.5 text-sm transition-all duration-300 ${
                  active
                    ? "border-[#8D9B83] bg-[#8D9B83] text-white"
                    : "border-[#DDE1D7] bg-white text-[#55594F] hover:border-[#8D9B83]"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* عدد النتائج */}
        <div className="mb-5 mt-4 flex items-center justify-between">
          <p className="text-xs text-[#777A73]">
            {filteredDresses.length} فستان
          </p>

          <p className="text-xs text-[#777A73]">
            الصفحة {safePage} من {Math.max(totalPages, 1)}
          </p>
        </div>

        {/* شبكة المنتجات */}
        {visibleDresses.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
            {visibleDresses.map((dress) => (
              <Link
                key={dress.id}
                href={`/dresses/${dress.slug}`}
                className="group min-w-0"
              >
                {/* الصورة داخل حدود البطاقة */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
                  <Image
                    src={dress.image}
                    alt={dress.name}
                    fill
                    sizes="(max-width: 639px) 46vw, (max-width: 1023px) 46vw, (max-width: 1279px) 30vw, 23vw"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.03] sm:p-2"
                  />

                  <span className="absolute right-2 top-2 bg-white/90 px-2 py-1 text-[10px] text-[#55594F] sm:right-3 sm:top-3 sm:text-xs">
                    {dress.code}
                  </span>
                </div>

                {/* تفاصيل الفستان */}
                <div className="px-1 pt-3 sm:px-0 sm:pt-4">
                  <p className="text-[10px] text-[#8D9B83] sm:text-xs">
                    {dress.category}
                  </p>

                  <h3 className="mt-1.5 line-clamp-2 text-sm leading-6 text-[#292B27] transition-colors group-hover:text-[#78866E] sm:text-base">
                    {dress.name}
                  </h3>

                  {dress.price !== undefined && (
                    <p className="mt-2 text-sm text-[#55594F]">
                      {dress.price.toLocaleString("en-US")} جنيه
                    </p>
                  )}

                  <div className="mt-3 flex items-center justify-between border-t border-[#E0E4DB] pt-3">
                    <span className="text-xs text-[#777A73]">
                      عرض التفاصيل
                    </span>

                    <ArrowUpLeft className="size-4 text-[#8D9B83] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white px-5 py-16 text-center">
            <p className="text-[#777A73]">
              لا توجد فساتين في هذا القسم حاليًا.
            </p>
          </div>
        )}

        {/* ترقيم الصفحات */}
        {totalPages > 1 && (
          <nav
            aria-label="صفحات المنتجات"
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              type="button"
              onClick={() => changePage(safePage - 1)}
              disabled={safePage === 1}
              aria-label="الصفحة السابقة"
              className="flex size-10 items-center justify-center border border-[#DDE1D7] bg-white text-[#55594F] transition hover:border-[#8D9B83] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="size-4" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => changePage(page)}
                  aria-label={`الصفحة ${page}`}
                  aria-current={safePage === page ? "page" : undefined}
                  className={`size-10 border text-sm transition ${
                    safePage === page
                      ? "border-[#8D9B83] bg-[#8D9B83] text-white"
                      : "border-[#DDE1D7] bg-white text-[#55594F] hover:border-[#8D9B83]"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => changePage(safePage + 1)}
              disabled={safePage === totalPages}
              aria-label="الصفحة التالية"
              className="flex size-10 items-center justify-center border border-[#DDE1D7] bg-white text-[#55594F] transition hover:border-[#8D9B83] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="size-4" />
            </button>
          </nav>
        )}

        {/* رابط المجموعة الكاملة على الموبايل */}
        <div className="mt-9 text-center sm:hidden">
          <Link
            href="/dresses"
            className="inline-flex items-center gap-2 border border-[#8D9B83] px-6 py-3 text-sm text-[#55594F] transition hover:bg-[#8D9B83] hover:text-white"
          >
            جميع الفساتين
            <ArrowUpLeft className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
