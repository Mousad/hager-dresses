
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/site-chrome";
import {
  categories,
  getDressesByCategory,
} from "@/lib/dresses";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  // البحث عن القسم باستخدام الرابط أو اسم القسم
  const decodedSlug = decodeURIComponent(slug).trim();

  const category = categories.find(
    (item) =>
      item.slug === decodedSlug ||
      item.name === decodedSlug
  );

  // عرض رسالة توضح المشكلة بدل صفحة 404 مؤقتًا
  if (!category) {
    return (
      <>
        <Header />

        <main
          dir="rtl"
          className="flex min-h-[50vh] flex-col items-center justify-center px-5 text-center"
        >
          <h1 className="text-2xl text-[#292B27]">
            القسم غير موجود
          </h1>

          <p className="mt-4 text-sm text-[#777A73]">
            الرابط المطلوب: {decodedSlug}
          </p>

          <Link
            href="/categories"
            className="mt-6 bg-[#8D9B83] px-6 py-3 text-sm text-white transition hover:bg-[#78866E]"
          >
            العودة إلى الأقسام
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const dresses = getDressesByCategory(category.name);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[F3F5F0] text-[#292B27]"
    >
      {/* Header */}
      <Header />

      {/* صورة خلفية القسم */}
      <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden sm:min-h-[460px] lg:min-h-[540px]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center text-white">
          <p className="text-xs tracking-[0.3em] sm:text-sm">
            HAGER DRESSES
          </p>

          <div className="mx-auto my-5 h-px w-14 bg-white/80" />

          <h1 className="text-3xl font-light leading-relaxed sm:text-5xl lg:text-6xl">
            {category.name}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/90 sm:text-base">
            {category.description}
          </p>

        
        </div>
      </section>

      {/* مجموعة الفساتين */}
      <section
        id="dresses"
        className="mx-auto bg-[F3F5F0] max-w-7xl px-5 py-12 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.2em] text-[#8D9B83]">
            THE COLLECTION
          </p>

          <h2 className="mt-3 text-2xl font-light sm:text-3xl">
            اكتشفي المجموعة
          </h2>

          <p className="mt-3 text-sm text-[#777A73]">
            اختاري إطلالتكِ المفضلة لمناسبتكِ القادمة
          </p>

          <div className="mx-auto mt-5 h-px w-12 bg-[#8D9B83]" />
        </div>

        {dresses.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-[#777A73]">
              لا توجد فساتين في هذا القسم حاليًا.
            </p>

            <Link
              href="/categories"
              className="mt-5 inline-block text-sm text-[#8D9B83] underline underline-offset-4"
            >
              تصفحي باقي الأقسام
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 bg-[F3F5F0] gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12">
            {dresses.map((dress) => (
              <Link
                key={dress.id}
                href={`/dresses/${dress.slug}`}
                className="group block"
              >
             <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ffffff]">
  <Image
    src={dress.image}
    alt={dress.name}
    fill
    sizes="(max-width: 440px) 50vw, (max-width: 1024px) 33vw, 25vw"
    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
  />


                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent p-3 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs text-white">
                      اكتشفي الفستان
                    </span>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <h3 className="text-sm font-normal sm:text-base">
                    {dress.name}
                  </h3>

                  <p className="mt-2 text-xs tracking-wider text-[#8D9B83]">
                    {dress.code}
                  </p>

                  {dress.price !== undefined && (
                    <p className="mt-2 text-sm text-[#777A73]">
                      {dress.price.toLocaleString("en-US")} جنيه
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-14 text-center">
          <Link
            href="/categories"
            className="inline-block border border-[#8D9B83] px-7 py-3 text-sm transition-colors hover:bg-[#8D9B83] hover:text-white"
          >
            العودة إلى الأقسام
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
