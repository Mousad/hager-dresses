"use client";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Footer, Header, PageIntro } from "@/components/site-chrome";
import { useBooking } from "@/components/booking-provider";
import { dresses } from "@/lib/dresses";
export default function BookingPage() {
  const { items, remove } = useBooking();
  const selected = items
    .map((item) => ({
      ...item,
      dress: dresses.find((dress) => dress.slug === item.slug)!,
    }))
    .filter((item) => item.dress);
  return (
    <>
      <Header />
      <PageIntro
        eyebrow="اختياراتكِ"
        title="قائمة الحجز"
        description="راجعي الفساتين التي اخترتها قبل إرسال طلب الحجز."
      />
      <main className="mx-auto max-w-4xl px-5 py-12 lg:px-10">
        {selected.length === 0 ? (
          <div className="border border-[#E8EAE5] px-6 py-16 text-center">
            <h2 className="font-serif text-3xl">لم تختاري أي فستان بعد</h2>
            <Link
              href="/dresses"
              className="mt-6 inline-block bg-[#8D9B83] px-6 py-3 text-sm text-white"
            >
              اكتشفي الفساتين
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              {selected.map(({ dress, eventDate }) => (
                <div
                  key={dress.slug}
                  className="flex gap-4 border-b border-[#E8EAE5] pb-5"
                >
                  <div className="relative size-28 shrink-0 overflow-hidden bg-[#F3F5F0]">
                    <Image
                      src={dress.image}
                      alt={dress.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between">
                    <div>
                      <Link
                        href={`/dresses/${dress.slug}`}
                        className="font-serif text-2xl"
                      >
                        {dress.name}
                      </Link>
                      <p className="mt-2 text-sm text-[#777A73]">
                        {dress.code}
                      </p>
                      {eventDate && (
                        <p className="mt-2 text-sm text-[#8D9B83]">
                          تاريخ المناسبة: {eventDate}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => remove(dress.slug)}
                      aria-label={`إزالة ${dress.name}`}
                    >
                      <Trash2 className="size-4 text-[#777A73]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dresses"
                className="border border-[#E8EAE5] px-6 py-3 text-sm"
              >
                متابعة التصفح
              </Link>
              <Link
                href="/booking/checkout"
                className="bg-[#8D9B83] px-6 py-3 text-sm text-white"
              >
                متابعة إلى طلب الحجز
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
