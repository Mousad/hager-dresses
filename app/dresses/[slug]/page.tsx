import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Tag } from "lucide-react";

import { Header, Footer } from "@/components/site-chrome";
import { dresses } from "@/lib/dresses";

type DressPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// توحيد صيغة الاسم والرابط للمقارنة
function normalizeSlug(value: string) {
  return decodeURIComponent(value)
    .normalize("NFKC")
    .trim()
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

export default async function DressPage({ params }: DressPageProps) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  const dress = dresses.find((item) => {
    return (
      normalizeSlug(item.slug) === normalizedSlug ||
      normalizeSlug(item.name) === normalizedSlug
    );
  });

  if (!dress) {
    notFound();
  }

  return (
    <>
      <Header />

      <main dir="rtl" className="min-h-screen bg-[#F3F5F0]">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-5 pt-6 lg:px-10">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-[#777A73]">
            <Link href="/" className="transition-colors hover:text-[#8D9B83]">
              الرئيسية
            </Link>

            <span>/</span>

            <Link
              href="/dresses"
              className="transition-colors hover:text-[#8D9B83]"
            >
              جميع الفساتين
            </Link>

            <span>/</span>

            <span className="text-[#292B27]">{dress.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <section className="mx-auto max-w-7xl px-5 py-8 sm:py-12 lg:px-10 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Dress Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                <Image
                  src={dress.image}
                  alt={dress.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-3 sm:p-6"
                />

                <span className="absolute right-4 top-4 bg-[#F3F5F0]/95 px-4 py-2 text-xs text-[#777A73]">
                  {dress.code}
                </span>
              </div>
            </div>

            {/* Dress Information */}
            <div className="flex flex-col justify-center py-2 lg:py-8">
              <p className="text-xs tracking-[.2em] text-[#8D9B83]">
                مجموعة هاجر دريسز
              </p>

              <h1 className="mt-4 font-serif text-3xl leading-relaxed text-[#292B27] sm:text-4xl lg:text-5xl">
                {dress.name}
              </h1>

              <div className="mt-6 h-px w-full bg-[#DDE1D8]" />

              <div className="mt-6 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center bg-white text-[#8D9B83]">
                    <Tag className="size-5" />
                  </span>

                  <div>
                    <p className="text-xs text-[#777A73]">التصنيف</p>
                    <p className="mt-1 text-sm text-[#292B27]">
                      {dress.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center bg-white text-[#8D9B83]">
                    <CalendarDays className="size-5" />
                  </span>

                  <div>
                    <p className="text-xs text-[#777A73]">كود الفستان</p>
                    <p className="mt-1 text-sm text-[#292B27]">
                      {dress.code}
                    </p>
                  </div>
                </div>
              </div>

              {dress.price != null && (
                <div className="mt-8 border-y border-[#DDE1D8] py-6">
                  <p className="text-xs text-[#777A73]">
                    سعر التأجير
                  </p>

                  <p className="mt-2 text-2xl font-medium text-[#8D9B83]">
                    {dress.price.toLocaleString("ar-EG")} جنيه مصري
                  </p>
                </div>
              )}

              <p className="mt-6 text-sm leading-8 text-[#777A73]">
                اختاري إطلالتكِ المميزة من مجموعة هاجر دريسز، واستعدّي
                للتألق في مناسبتكِ القادمة.
              </p>
<div className="mt-8 flex flex-row gap-3">
  <Link
    href="/booking"
    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-[#8D9B83] px-4 py-3 text-sm text-white transition-colors hover:bg-[#75846B]"
  >
    انتقلي إلى الحجز
    <ArrowLeft className="size-4 shrink-0" />
  </Link>

  <Link
    href="/dresses"
    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-[#DDE1D8] px-4 py-3 text-sm text-[#292B27] transition-colors hover:bg-white"
  >
    جميع الفساتين
    <ArrowRight className="size-4 shrink-0" />
  </Link>
</div>

              <p className="mt-5 text-center text-xs leading-6 text-[#777A73] sm:text-right">
                للاستفسار عن الفستان وتفاصيل الحجز، تواصلي معنا.
              </p>
            </div>
          </div>
        </section>

        {/* More Dresses */}
        <section className="border-t border-[#f3f5f0] bg-[#f3f5f0] px-5 py-12 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs text-[#8D9B83]">
                  اكتشفي المزيد
                </p>

                <h2 className="mt-3 font-serif text-2xl text-[#292B27] sm:text-3xl">
                  فساتين قد تعجبكِ
                </h2>
              </div>

              <Link
                href="/dresses"
                className="shrink-0 text-sm underline underline-offset-4 hover:text-[#8D9B83]"
              >
                عرض الكل
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {dresses
                .filter((item) => item.slug !== dress.slug)
                .slice(0, 4)
                .map((item) => (
                  <Link
                    href={`/dresses/${item.slug}`}
                    key={item.id}
                    className="group min-w-0"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-[#F3F5F0]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <h3 className="mt-3 text-sm text-[#292B27] transition-colors group-hover:text-[#8D9B83]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#777A73]">
                      {item.category}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}