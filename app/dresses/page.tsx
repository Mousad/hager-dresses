"use client";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { DressCard } from "@/components/dress-card";
import { Footer, Header, PageIntro } from "@/components/site-chrome";
import { categories, dresses } from "@/lib/dresses";

const PRODUCTS_PER_PAGE = 9;

export default function DressesPage() {
  const [category, setCategory] = useState("الكل");
  const [sort, setSort] = useState("new");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    const list =
      category === "الكل"
        ? [...dresses]
        : dresses.filter((dress) => dress.category === category);

    if (sort === "price-low") {
      list.sort(
        (a, b) => (a.price ?? 99999) - (b.price ?? 99999)
      );
    } else if (sort === "price-high") {
      list.sort(
        (a, b) => (b.price ?? 0) - (a.price ?? 0)
      );
    }

    return list;
  }, [category, sort]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  const visibleDresses = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />

      <PageIntro
        eyebrow="المجموعة كاملة"
        title="جميع الفساتين"
        description={`${dresses.length} فستاناً قابلاً للاختيار من مجموعة هاجر دريسز.`}
      />

      <main dir="rtl" className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
        {/* Filters and Sorting */}
        <div className="border-b border-[#E8EAE5] pb-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {[
                "الكل",
                ...categories.map((item) => item.name),
              ].map((item, index) => (
                <button
                  key={`${item}-${index}`}
                  type="button"
                  onClick={() => handleCategoryChange(item)}
                  aria-pressed={category === item}
                  className={`min-h-9 rounded-full border px-4 py-2 text-xs transition-colors sm:text-sm ${
                    category === item
                      ? "border-[#8D9B83] bg-[#8D9B83] text-white"
                      : "border-[#E8EAE5] bg-white text-[#777A73] hover:border-[#8D9B83] hover:text-[#687764]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <select
              value={sort}
              onChange={(event) => handleSortChange(event.target.value)}
              aria-label="ترتيب الفساتين"
              className="w-full border border-[#E8EAE5] bg-white px-4 py-3 text-sm text-[#292B27] outline-none focus:border-[#8D9B83] md:w-auto"
            >
              <option value="new">الترتيب الافتراضي</option>
              <option value="price-low">السعر من الأقل للأعلى</option>
              <option value="price-high">السعر من الأعلى للأقل</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-[#777A73]">
            {filtered.length > 0
              ? `عرض ${(currentPage - 1) * PRODUCTS_PER_PAGE + 1} - ${Math.min(
                  currentPage * PRODUCTS_PER_PAGE,
                  filtered.length
                )} من ${filtered.length} فستان`
              : "لا توجد فساتين في هذا التصنيف"}
          </p>
        </div>

        {/* Dresses Grid */}
        {visibleDresses.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3">
            {visibleDresses.map((dress) => (
              <DressCard dress={dress} key={dress.id} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex min-h-48 flex-col items-center justify-center bg-[#F3F5F0] px-5 text-center">
            <h2 className="font-serif text-xl text-[#292B27]">
              لا توجد فساتين في هذا التصنيف
            </h2>

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
              disabled={currentPage === 1}
              aria-label="الصفحة السابقة"
              className="flex size-10 items-center justify-center border border-[#DDE1D8] transition-colors hover:bg-[#F3F5F0] disabled:cursor-not-allowed disabled:opacity-30"
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
                aria-current={currentPage === page ? "page" : undefined}
                className={`flex size-10 items-center justify-center border text-sm transition-colors ${
                  currentPage === page
                    ? "border-[#8D9B83] bg-[#8D9B83] text-white"
                    : "border-[#DDE1D8] text-[#292B27] hover:bg-[#F3F5F0]"
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
              disabled={currentPage === totalPages}
              aria-label="الصفحة التالية"
              className="flex size-10 items-center justify-center border border-[#DDE1D8] transition-colors hover:bg-[#F3F5F0] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="size-4" />
            </button>
          </nav>
        )}
      </main>

      <Footer />
    </>
  );
}