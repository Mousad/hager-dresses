import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageIntro } from "@/components/site-chrome";
import { categories, getDressesByCategory } from "@/lib/dresses";
export default function CategoriesPage() {
  return (
    <>
      <Header />
     <section className="relative flex min-h-[90px] items-center justify-center overflow-hidden sm:min-h-[450px] lg:min-h-[520px]">

  {/* صورة الخلفية */}
  <Image
    src="/images/hager-hero.png"
    alt="مجموعة هاجر دريسز"
    fill
    priority
    sizes="60vw"
    className="object-cover"
  />

  {/* طبقة شفافة فوق الصورة */}
  <div className="absolute inset-0 bg-black/40" />

  {/* النص فوق الصورة */}
  <div
    dir="rtl"
    className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center text-white"
  >
    <p className="text-sm tracking-wide text-white/90">
      اختاري ما يشبهكِ
    </p>

    <div className="mx-auto my-5 h-px w-14 bg-white/80" />

    <h1 className="text-4xl font-light sm:text-5xl lg:text-6xl">
      الأقسام
    </h1>

    <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/90 sm:text-base">
      تصفحي اختياراتنا حسب أسلوب الإطلالة والمناسبة.
    </p>
  </div>
</section>
      <main className="mx-auto grid max-w-9xl gap-5 px-5 py-14 sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 lg:px-10">
        {categories.map((category) => (
          <Link
            href={`/categories/${category.slug}`}
            key={category.slug}
            className="group"
          >
            <div className="relative aspect-[.8] overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-4 font-serif text-2xl">{category.name}</h2>
            <p className="mt-2 text-sm text-[#777A73]">
              {getDressesByCategory(category.name).length} فساتين
            </p>
          </Link>
        ))}
      </main>
      <Footer />
    </>
  );
}
