"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import type { Dress } from "@/lib/dresses";
import { useBooking } from "./booking-provider";

export function DressCard({ dress }: { dress: Dress }) {
  const { items, add, remove } = useBooking();

  // منع اختلاف حالة الحجز بين السيرفر والمتصفح عند أول عرض
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selected =
    mounted && items.some((item) => item.slug === dress.slug);

  return (
    <article className="group min-w-0">
      {/* صورة الفستان */}
      <Link
        href={`/dresses/${dress.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-[#F3F5F0] p-2 sm:p-4"
      >
        <Image
          src={dress.image}
          alt={dress.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3"
        />

        {/* كود الفستان */}
        <span className="absolute right-2 top-2 z-10 bg-white/90 px-2 py-1 text-[9px] text-[#777A73] sm:right-4 sm:top-4 sm:px-3 sm:text-[10px]">
          {dress.code}
        </span>
      </Link>

      {/* معلومات الفستان */}
      <div className="flex items-start justify-between gap-2 pt-3 sm:gap-3 sm:pt-4">
        <div className="min-w-0 flex-1">
          <Link
            href={`/dresses/${dress.slug}`}
            className="break-words font-serif text-base transition-colors hover:text-[#8D9B83] sm:text-xl"
          >
            {dress.name}
          </Link>

          <p className="mt-1 text-[10px] text-[#777A73] sm:text-xs">
            {dress.category}
          </p>

          {dress.price != null && (
            <p className="mt-2 text-xs font-medium text-[#8D9B83] sm:text-sm">
              يبدأ من {dress.price.toLocaleString("ar-EG")} ج.م
            </p>
          )}
        </div>

        {/* زر إضافة أو إزالة من قائمة الحجز */}
        <button
          type="button"
          onClick={() =>
            selected ? remove(dress.slug) : add(dress.slug)
          }
          aria-label={
            selected
              ? "إزالة من قائمة الحجز"
              : "إضافة إلى قائمة الحجز"
          }
          aria-pressed={selected}
          className={`flex size-8 shrink-0 items-center justify-center border transition-colors sm:size-9 ${
            selected
              ? "border-[#8D9B83] bg-[#8D9B83] text-white"
              : "border-[#DDE1D8] text-[#8D9B83] hover:bg-[#8D9B83] hover:text-white"
          }`}
        >
          {selected ? (
            <Minus className="size-4" />
          ) : (
            <Plus className="size-4" />
          )}
        </button>
      </div>
    </article>
  );
}