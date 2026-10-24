
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Home,
  Menu,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  Shirt,
  Sparkles,
  UserRound,
  X,
  Grid2X2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { categories, dresses } from "@/lib/dresses";

const PRODUCTS_PER_PAGE = 6;

function Header({ count }: { count: number }) {
  const [open, setOpen] = useState(false);

  const mobileLinks = [
    { label: "الرئيسية", href: "/", icon: Home },
    { label: "الفساتين", href: "/dresses", icon: Shirt },
    { label: "الأقسام", href: "/categories", icon: Grid2X2 },
    { label: "من نحن", href: "/about", icon: UserRound },
    { label: "الحجز", href: "/booking", icon: ShoppingBag },
  ];

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 text-white">
        {/* Desktop navigation */}
        <div className="mx-auto hidden h-[84px] max-w-7xl items-center justify-between border-b border-white/20 px-10 lg:flex">
          <nav className="flex items-center gap-8 text-sm">
            <Link
              href="/dresses"
              className="transition-opacity hover:opacity-70"
            >
              الفساتين
            </Link>

            <Link
              href="/categories"
              className="transition-opacity hover:opacity-70"
            >
              الأقسام
            </Link>

            <Link
              href="/about"
              className="transition-opacity hover:opacity-70"
            >
              من نحن
            </Link>

            <Link
              href="/contact"
              className="transition-opacity hover:opacity-70"
            >
              تواصلي معنا
            </Link>
          </nav>

          <Link href="/" className="text-center">
            <span className="block font-serif text-2xl tracking-wide">
              Hager
            </span>
            <span className="block text-[9px] uppercase tracking-[.34em]">
              Dresses
            </span>
          </Link>

          <Link
            href="/booking"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          >
            <ShoppingBag className="size-5" />
            قائمة الحجز

            {count > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-[#8D9B83] text-xs text-white">
                {count}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile top navbar */}
        <div className="flex h-[66px] items-center justify-center border-b border-[#E8EAE5] bg-white text-[#292B27] lg:hidden">
          <Link
            href="/"
            aria-label="هاجر دريسز - الرئيسية"
            className="text-center"
          >
            <span className="block font-serif text-[23px] leading-6 tracking-wide">
              Hager
            </span>
            <span className="block pt-1 text-[9px] uppercase tracking-[.34em]">
              Dresses
            </span>
          </Link>
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <nav
        aria-label="التنقل الرئيسي"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E8EAE5] bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(41,43,39,0.06)] backdrop-blur-md lg:hidden"
      >
        <div className="mx-auto grid h-[64px] max-w-lg grid-cols-5">
          {mobileLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="relative flex flex-col items-center justify-center gap-1 text-[#777A73] transition-colors hover:text-[#8D9B83]"
            >
              <span className="relative">
                <Icon className="size-[21px]" strokeWidth={1.7} />

                {href === "/booking" && count > 0 && (
                  <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-[#8D9B83] text-[9px] text-white">
                    {count}
                  </span>
                )}
              </span>

              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="فتح القائمة"
        className="fixed right-4 top-[19px] z-50 flex size-8 items-center justify-center text-[#292B27] lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-[#292B27] p-6 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-serif text-xl"
            >
              Hager Dresses
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="إغلاق القائمة"
              className="rounded-full p-2 hover:bg-white/10"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-7 text-xl">
            <Link href="/" onClick={() => setOpen(false)}>
              الرئيسية
            </Link>
            <Link href="/dresses" onClick={() => setOpen(false)}>
              جميع الفساتين
            </Link>
            <Link href="/categories" onClick={() => setOpen(false)}>
              الأقسام
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              من نحن
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              تواصلي معنا
            </Link>
            <Link href="/booking" onClick={() => setOpen(false)}>
              قائمة الحجز ({count})
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export function HagerHome() {
  const [selected, setSelected] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);

  // تصفية الفساتين حسب التصنيف المحدد
  const filtered =
    activeCategory === "الكل"
      ? dresses
      : dresses.filter((dress) => dress.category === activeCategory);

  // حساب عدد الصفحات
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);

  // ضمان بقاء رقم الصفحة ضمن الحدود الصحيحة
  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1),
  );

  // الفساتين التي ستظهر في الصفحة الحالية فقط
  const startIndex = (safeCurrentPage - 1) * PRODUCTS_PER_PAGE;

  const visibleDresses = filtered.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  // تغيير التصنيف وإعادة الصفحة إلى البداية
  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // الانتقال بين الصفحات
  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // إضافة الفستان إلى قائمة الحجز أو إزالته
  const toggle = (slug: string) => {
    setSelected((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-x-clip bg-white pb-20 text-[#292B27] lg:pb-0"
    >
      {/* Hero */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#687764] text-white lg:min-h-[780px]">
        <Image
          src="/images/hager-hero.png"
          alt="إطلالة من مجموعة هاجر دريسز"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-l from-[#292B27]/65 via-transparent to-transparent" />

        <Header count={selected.length} />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-20 pt-28 lg:min-h-[780px] lg:items-center lg:px-10 lg:pb-0 lg:pt-20">
          <div className="max-w-lg">
            <p className="mb-6 text-sm tracking-widest text-white/80">
              أتيليه هاجر دريسز · ٦ أكتوبر
            </p>

            <h1 className="font-serif text-5xl leading-[1.18] lg:text-7xl">
              إطلالتكِ
              <br />
              المميزة تبدأ من هنا
            </h1>

            <p className="mt-7 max-w-md text-base leading-8 text-white/85">
              اكتشفي مجموعة مختارة من فساتين السهرة وتأجّري الفستان الذي يليق
              بأجمل مناسباتكِ.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/dresses"
                className="bg-white px-7 py-3 text-sm text-[#292B27] transition hover:bg-[#F3F5F0]"
              >
                اكتشفي الفساتين
                <ArrowLeft className="mr-2 inline size-4" />
              </Link>

              <Link
                href="/booking"
                className="border border-white/60 px-7 py-3 text-sm transition hover:bg-white/10"
              >
                احجزي فستانكِ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs tracking-[.2em] text-[#8D9B83]">
              اكتشفي حسب ذوقكِ
            </span>
            <h2 className="mt-3 font-serif text-4xl">التصنيفات</h2>
          </div>

          <Link
            href="/categories"
            className="hidden text-sm underline-offset-8 hover:underline sm:block"
          >
            عرض الكل
            <ArrowLeft className="mr-2 inline size-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              href={`/categories/${category.slug}`}
              key={category.slug}
              className="group relative aspect-[3/4] overflow-hidden bg-[#F3F5F0] sm:aspect-[4/5] lg:aspect-[.8]"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 right-6 text-white">
                <p className="font-serif text-2xl">{category.name}</p>
                <span className="mt-2 block text-xs opacity-80">
                  اكتشفي المجموعة
                  <ArrowLeft className="mr-1 inline size-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Collection */}
      <section
        id="collection"
        className="bg-[#F3F5F0] px-5 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <span className="text-xs tracking-[.2em] text-[#8D9B83]">
                المجموعة المختارة
              </span>

              <h2 className="mt-3 font-serif text-4xl">
                اختاري إطلالتكِ القادمة
              </h2>

              <p className="mt-3 text-sm text-[#777A73]">
                {filtered.length > 0
                  ? `${filtered.length} فستان متاح في هذه المجموعة`
                  : "لا توجد فساتين في هذا التصنيف حاليًا"}
              </p>
            </div>

            {/* Category filters */}
            <div className="flex max-w-full gap-5 overflow-x-auto border-b border-[#DDE1D8] text-sm">
              {["الكل", ...categories.map((category) => category.name)].map(
                (name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => selectCategory(name)}
                    aria-pressed={activeCategory === name}
                    className={`shrink-0 whitespace-nowrap pb-3 transition-colors ${
                      activeCategory === name
                        ? "border-b border-[#8D9B83] text-[#8D9B83]"
                        : "text-[#777A73] hover:text-[#292B27]"
                    }`}
                  >
                    {name}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Dress cards */}
          {visibleDresses.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-7">
              {visibleDresses.map((dress) => {
                const isSelected = selected.includes(dress.slug);

                return (
                  <article key={dress.slug} className="group min-w-0">
                    <Link
                      href={`/dresses/${dress.slug}`}
                      className="relative block aspect-[3/4] overflow-hidden bg-white p-2 sm:p-4"
                    >
                      <Image
                        src={dress.image}
                        alt={dress.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3"
                      />

                      <span className="absolute right-2 top-2 z-10 bg-white/90 px-2 py-1 text-[9px] text-[#777A73] sm:right-4 sm:top-4 sm:px-3 sm:text-[10px]">
                        {dress.code}
                      </span>
                    </Link>

                    <div className="flex items-start justify-between gap-2 pt-3 sm:gap-3 sm:pt-4">
                      <div className="min-w-0">
                        <Link
                          href={`/dresses/${dress.slug}`}
                          className="break-words font-serif text-base transition-colors hover:text-[#8D9B83] sm:text-xl"
                        >
                          {dress.name}
                        </Link>

                        <p className="mt-1 text-[10px] text-[#777A73] sm:text-xs">
                          {dress.category}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggle(dress.slug)}
                        className={`flex size-8 shrink-0 items-center justify-center border transition-colors sm:size-9 ${
                          isSelected
                            ? "border-[#8D9B83] bg-[#8D9B83] text-white"
                            : "border-[#DDE1D8] text-[#8D9B83] hover:bg-[#8D9B83] hover:text-white"
                        }`}
                        aria-label={
                          isSelected
                            ? "إزالة من قائمة الحجز"
                            : "إضافة إلى قائمة الحجز"
                        }
                        aria-pressed={isSelected}
                      >
                        {isSelected ? (
                          <Minus className="size-4" />
                        ) : (
                          <Plus className="size-4" />
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-12 flex min-h-48 flex-col items-center justify-center bg-white px-5 text-center">
              <Shirt className="size-8 text-[#8D9B83]" />
              <p className="mt-4 text-lg">لا توجد فساتين في هذا التصنيف</p>
              <p className="mt-2 text-sm text-[#777A73]">
                جرّبي اختيار تصنيف آخر لمشاهدة الفساتين المتاحة.
              </p>

              <button
                type="button"
                onClick={() => selectCategory("الكل")}
                className="mt-5 border-b border-[#8D9B83] pb-1 text-sm text-[#77866e]"
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
                onClick={() => changePage(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                aria-label="الصفحة السابقة"
                className="flex size-10 items-center justify-center border border-[#DDE1D8] text-[#292B27] transition hover:border-[#8D9B83] hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
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
                    aria-current={
                      safeCurrentPage === page ? "page" : undefined
                    }
                    className={`flex size-10 items-center justify-center border text-sm transition-colors ${
                      safeCurrentPage === page
                        ? "border-[#8D9B83] bg-[#8D9B83] text-white"
                        : "border-[#DDE1D8] bg-transparent text-[#292B27] hover:bg-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={() => changePage(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                aria-label="الصفحة التالية"
                className="flex size-10 items-center justify-center border border-[#DDE1D8] text-[#292B27] transition hover:border-[#8D9B83] hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="size-4" />
              </button>
            </nav>
          )}

          <div className="mt-14 text-center">
            <Link
              href="/dresses"
              className="inline-flex items-center border-b border-[#8D9B83] pb-2 text-sm transition-colors hover:text-[#77866e]"
            >
              عرض جميع الفساتين
              <ArrowLeft className="mr-2 size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-24 lg:px-10 lg:py-32"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-[#F3F5F0] sm:aspect-[.9]">
          <Image
            src="/images/dress-black.png"
            alt="تفاصيل فستان من هاجر دريسز"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-md">
          <Sparkles className="size-6 text-[#8D9B83]" />

          <h2 className="mt-6 font-serif text-4xl leading-tight lg:text-5xl">
            لأن كل مناسبة تستحق إطلالة استثنائية
          </h2>

          <p className="mt-6 leading-8 text-[#777A73]">
            نساعدكِ على اختيار فستان يناسب مناسبتكِ وذوقكِ، مع إمكانية الاستفادة
            من خدمات البروفة والتعديلات وفق التفاصيل المتاحة لكل فستان.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center bg-[#8D9B83] px-7 py-3 text-sm text-white transition-colors hover:bg-[#77866e]"
          >
            تعرّفي على الأتيليه
            <ArrowLeft className="mr-2 size-4" />
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#292B27] px-5 py-20 text-white lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <span className="text-xs tracking-[.2em] text-[#AEBBA5]">
              نحن بانتظاركِ
            </span>

            <h2 className="mt-4 font-serif text-4xl lg:text-5xl">
              تواصلي معنا
              <br />
              في الأتيليه
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-white/60">
              تواصلي معنا لمعرفة تفاصيل الفساتين والتأجير وخدمات البروفة
              والتعديلات.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center border border-white/30 px-5 py-3 text-sm transition hover:bg-white/10"
            >
              جميع وسائل التواصل
              <ArrowLeft className="mr-2 size-4" />
            </Link>
          </div>

          <div className="grid gap-6 border-t border-white/15 pt-7 text-sm sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[#AEBBA5]">الحي الخامس</p>
              <p className="leading-7 text-white/75">
                ٦ أكتوبر، محور الكفراوي
              </p>

              <a
                href="tel:01032693166"
                className="mt-2 block text-white"
                dir="ltr"
              >
                01032693166 <Phone className="mr-2 inline size-4" />
              </a>
            </div>

            <div>
              <p className="mb-2 text-[#AEBBA5]">الحي الرابع</p>
              <p className="leading-7 text-white/75">
                ٦ أكتوبر، شارع مسجد الخلفاء
              </p>

              <a
                href="tel:01116561668"
                className="mt-2 block text-white"
                dir="ltr"
              >
                01116561668 <Phone className="mr-2 inline size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#292B27] px-5 pb-8 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/15 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} هاجر دريسز. جميع الحقوق محفوظة.</p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.instagram.com/hager_elhennawy/"
              target="_blank"
              rel="noreferrer"
              aria-label="إنستغرام"
            >
              Instagram
              <ArrowUpLeft className="mr-1 inline size-4" />
            </a>

            <a
              href="https://www.threads.com/@hager_dresses"
              target="_blank"
              rel="noreferrer"
              aria-label="ثريدز"
            >
              Threads
              <ArrowUpLeft className="mr-1 inline size-4" />
            </a>

            <Link href="/about">من نحن</Link>
            <Link href="/contact">تواصلي معنا</Link>
            <Link href="/rental-policy">سياسة التأجير</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
