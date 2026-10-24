
"use client";

import Link from "next/link";
import {
  Home,
  UserRound,
  ShoppingBag,
  Menu,
  X,
  Phone,
  ArrowUpLeft,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { GiDress } from "react-icons/gi";
import { useState } from "react";
import { useBooking } from "@/components/booking-provider";

/* =========================
   Header
========================= */

export function Header({ count: countProp }: { count?: number } = {}) {
  const { count: bookingCount } = useBooking();
  const count = countProp ?? bookingCount;
  const [open, setOpen] = useState(false);

  const mobileLinks = [
    { label: "المنيو", href: "#menu", icon: Menu },
    { label: "الفساتين", href: "/dresses", icon: GiDress },
    { label: "الرئيسية", href: "/", icon: Home },
    { label: "السلة", href: "/booking", icon: ShoppingBag },
    { label: "من نحن", href: "/about", icon: UserRound },
  ];

  const menuLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "جميع الفساتين", href: "/dresses" },
    { label: "الأقسام", href: "/categories" },
    { label: "من نحن", href: "/about" },
    { label: "تواصلي معنا", href: "/contact" },
    { label: "سياسة التأجير", href: "/rental-policy" },
    { label: `قائمة الحجز (${count})`, href: "/booking" },
  ];

  return (
    <>
      {/* Fixed Responsive Header */}
      <header className="sticky top-0 z-40 border-b border-[#E8EAE5] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[66px] max-w-7xl items-center justify-center px-5 lg:h-20 lg:justify-between lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Hager Dresses - الرئيسية"
            className="shrink-0 text-center lg:text-right"
          >
            <span className="block font-serif text-[23px] leading-6 tracking-wide text-[#292B27] lg:text-2xl">
              Hager
            </span>

            <span className="mt-1 hidden text-[9px] uppercase tracking-[0.34em] text-[#8D9B83] lg:block">
              DRESSES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="القائمة الرئيسية"
            className="hidden items-center gap-6 text-sm lg:flex xl:gap-8"
          >
            <Link href="/" className="transition-colors hover:text-[#8D9B83]">
              الرئيسية
            </Link>

            <Link
              href="/dresses"
              className="transition-colors hover:text-[#8D9B83]"
            >
              الفساتين
            </Link>

            <Link
              href="/categories"
              className="transition-colors hover:text-[#8D9B83]"
            >
              الأقسام
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-[#8D9B83]"
            >
              من نحن
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-[#8D9B83]"
            >
              تواصلي معنا
            </Link>
          </nav>

          {/* Desktop Booking */}
          <Link
            href="/booking"
            aria-label={`قائمة الحجز، ${count} فساتين`}
            className="hidden shrink-0 items-center gap-2 rounded-full border border-[#E8EAE5] px-4 py-2.5 text-sm transition-colors hover:border-[#8D9B83] hover:text-[#78866E] lg:flex"
          >
            <span className="relative inline-flex">
              <ShoppingBag className="size-[18px]" strokeWidth={1.7} />

              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-[#8D9B83] px-1 text-[10px] font-bold leading-none text-white ring-2 ring-white">
                  {count}
                </span>
              )}
            </span>

            <span>قائمة الحجز</span>
          </Link>
        </div>
      </header>

      {/* Floating Mobile Bottom Navigation */}
      <nav
        aria-label="التنقل الرئيسي"
        className="fixed inset-x-3 bottom-3 z-50 lg:hidden"
      >
        <div className="relative mx-auto grid h-[55px] max-w-lg grid-cols-5 items-center rounded-2xl border border-[#E8EAE5] bg-white/95 px-1 shadow-[0_8px_30px_rgba(41,43,39,0.12)] backdrop-blur-xl">
          {mobileLinks.map(({ label, href, icon: Icon }) => {
            const isMenu = href === "#menu";
            const isHome = href === "/";
            const isCart = href === "/booking";

            const content = (
              <span
                className={
                  isHome
                    ? "flex size-[54px] -translate-y-5 items-center justify-center rounded-full border-[5px] border-white bg-[#8D9B83] text-white shadow-[0_5px_15px_rgba(141,155,131,0.35)]"
                    : "relative flex size-6 items-center justify-center"
                }
              >
                <Icon
                  className={isHome ? "size-6" : "size-[21px]"}
                  strokeWidth={1.7}
                />

                {isCart && count > 0 && (
                  <span className="absolute -right-2 -top-2 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold leading-none text-white ring-2 ring-white">
                    {count}
                  </span>
                )}
              </span>
            );

            if (isMenu) {
              return (
                <button
                  key={href}
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-label="فتح القائمة"
                  aria-expanded={open}
                  className="flex h-full flex-col items-center justify-center gap-1 text-[#777A73] transition-colors hover:text-[#8D9B83] active:text-[#8D9B83]"
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                aria-label={
                  isCart ? `السلة، ${count} فساتين` : label
                }
                className={`relative flex h-full flex-col items-center justify-center gap-1 transition-colors ${
                  isHome
                    ? "text-[#8D9B83]"
                    : "text-[#777A73] hover:text-[#8D9B83] active:text-[#8D9B83]"
                }`}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Side Menu */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/45 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <aside
            dir="rtl"
            role="dialog"
            aria-modal="true"
            aria-label="قائمة الموقع"
            className="h-full w-[82%] max-w-sm animate-in slide-in-from-right duration-300 overflow-y-auto bg-white p-6 text-[#292B27] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between border-b border-[#E8EAE5] pb-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-center"
              >
                <span className="block font-serif text-2xl">Hager</span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="إغلاق القائمة"
                className="flex size-10 items-center justify-center rounded-full bg-[#F3F5F0] transition-colors hover:bg-[#E8EAE5]"
              >
                <X className="size-5" strokeWidth={1.7} />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="mt-8 flex flex-col">
              {menuLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[#E8EAE5] py-4 text-base transition-colors hover:pr-2 hover:text-[#8D9B83]"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Booking CTA */}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-7 flex items-center justify-center gap-3 rounded-lg bg-[#8D9B83] px-5 py-4 text-sm text-white transition-colors hover:bg-[#78866E]"
            >
              <ShoppingBag className="size-5" strokeWidth={1.7} />

              قائمة الحجز

              {count > 0 && (
                <span className="flex min-h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs text-[#78866E]">
                  {count}
                </span>
              )}
            </Link>

            {/* Contact Information */}
            <div className="mt-8 rounded-lg bg-[#F3F5F0] p-4">
              <p className="text-sm leading-7 text-[#777A73]">
                فساتين سهرة للتأجير، واختيار يليق بمناسبتكِ.
              </p>

              <a
                href="tel:01032693166"
                className="mt-3 inline-flex items-center gap-2 text-sm text-[#292B27]"
              >
                <Phone className="size-4 text-[#8D9B83]" />
                01032693166
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

/* =========================
   Footer
========================= */


export function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-[#292B27] px-5 pb-24 pt-10 text-white sm:px-7 lg:px-10 lg:pb-10 lg:pt-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Brand */}
        <div className="border-b border-white/10 pb-7 lg:border-0 lg:pb-0">
          <Link href="/" className="inline-flex items-center gap-3">
           

            <span>
              <span className="block font-serif text-2xl tracking-wide">
                Hager 
              </span>
              <span className="mt-1 block text-[10px] tracking-[0.2em] text-white/45">
                YOUR SPECIAL MOMENT
              </span>
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
            فساتين سهرة للتأجير، واختيار يليق بمناسبتكِ.
            اكتشفي مجموعتنا واختاري إطلالتكِ القادمة.
          </p>

         <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
  <a
    href="https://www.instagram.com/hager_elhennawy/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-[#AEBBA5] hover:bg-[#AEBBA5] hover:text-[#292B27]"
  >
    <FaInstagram className="size-4" />
  </a>

  <a
    href="https://www.threads.com/@hager_dresses"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Threads"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/75 transition hover:border-[#AEBBA5] hover:bg-[#AEBBA5] hover:text-[#292B27]"
  >
    @
  </a>

  <a
    href="https://wa.me/201032693166"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm text-white/75 transition hover:border-[#AEBBA5] hover:bg-[#AEBBA5] hover:text-[#292B27]"
  >
    WA
  </a>
</div>
        </div>

        {/* Mobile: two columns | Desktop: three columns */}
        <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-8 lg:mt-0 lg:grid-cols-3 lg:gap-12">
          {/* Quick Links */}
          <nav className="flex min-w-0 flex-col items-start gap-4 text-sm text-white/65">
            <h2 className="mb-1 text-base font-semibold text-white">
              روابط سريعة
            </h2>

            <Link
              href="/dresses"
              className="transition-colors hover:text-[#AEBBA5]"
            >
              جميع الفساتين
            </Link>

            <Link
              href="/categories"
              className="transition-colors hover:text-[#AEBBA5]"
            >
              الأقسام
            </Link>

            <Link
              href="/booking"
              className="transition-colors hover:text-[#AEBBA5]"
            >
              قائمة الحجز
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-[#AEBBA5]"
            >
              من نحن
            </Link>

            <Link
              href="/rental-policy"
              className="transition-colors hover:text-[#AEBBA5]"
            >
              سياسة التأجير
            </Link>
          </nav>

          {/* Contact */}
          <div className="flex min-w-0 flex-col items-start gap-4 text-sm text-white/65">
            <h2 className="mb-1 text-base font-semibold text-white">
              فروعنا
            </h2>

            <div className="w-full">
              <p className="font-medium text-[#AEBBA5]">الحي الخامس</p>
              <p className="mt-2 text-xs leading-6 text-white/55 sm:text-sm">
                ٦ أكتوبر، محور الكفراوي
              </p>
             
            </div>

            <div className="w-full border-t border-white/10 pt-4">
              <p className="font-medium text-[#AEBBA5]">الحي الرابع</p>
              <p className="mt-2 text-xs leading-6 text-white/55 sm:text-sm">
                ٦ أكتوبر، شارع مسجد الخلفاء
              </p>
              
            </div>

            
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-9 border-t border-white/10 pt-5 text-center sm:flex sm:items-center sm:justify-between sm:text-right">
          <p className="text-[11px] leading-6 text-white/40 sm:text-xs">
            © {new Date().getFullYear()} هاجر دريسز. جميع الحقوق محفوظة.
          </p>

          <Link
            href="/"
            className="mt-2 inline-block text-[11px] text-white/40 transition hover:text-[#AEBBA5] sm:mt-0 sm:text-xs"
          >
            صُمم بعناية لإطلالة تستحق
          </Link>
        </div>
      </div>
    </footer>
  );
}


/* =========================
   Page Intro
========================= */

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-[#F3F5F0] px-5 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {eyebrow && (
          <span className="text-xs tracking-[.2em] text-[#8D9B83]">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-3 font-serif text-4xl lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-xl leading-8 text-[#777A73]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
