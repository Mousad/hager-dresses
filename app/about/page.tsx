
import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PageIntro } from "@/components/site-chrome";

const values = [
  {
    number: "01",
    title: "اختيار يناسبكِ",
    description:
      "نساعدكِ في اكتشاف فستان ينسجم مع ذوقكِ وطبيعة مناسبتكِ، لتشعري بالراحة والثقة في إطلالتكِ.",
  },
  {
    number: "02",
    title: "الاهتمام بالتفاصيل",
    description:
      "نهتم بتفاصيل التصميم والمقاس، ونمنحكِ فرصة للتعرّف على الفستان وتجربته قبل تأكيد الحجز.",
  },
  {
    number: "03",
    title: "تجربة أكثر سهولة",
    description:
      "من استكشاف المجموعة إلى تحديد موعد المناسبة، نحرص على أن تكون خطوات اختياركِ واضحة وبسيطة.",
  },
];

const steps = [
  {
    number: "01",
    title: "اكتشفي المجموعة",
    description:
      "تصفّحي الفساتين المتاحة واختاري التصاميم الأقرب إلى ذوقكِ ومناسبتكِ.",
  },
  {
    number: "02",
    title: "اختاري موعد التجربة",
    description:
      "حددي الفستان وموعد مناسبتكِ، ثم أرسلي طلب الحجز لمراجعة التفاصيل.",
  },
  {
    number: "03",
    title: "تعرّفي على التفاصيل",
    description:
      "يتواصل معكِ فريق الأتيليه لتأكيد التوفر والمقاس والتفاصيل النهائية.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

     
<section
  dir="rtl"
  className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#292B27] px-5 py-20 text-center md:min-h-[420px] md:py-28"
>
  <Image
    src="/images/hager-hero.png"
    alt="فساتين السهرة في هاجر دريسز"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />

  {/* طبقة لتحسين وضوح النص */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/40 to-black/25" />

  <div className="relative z-10 mx-auto max-w-3xl text-white">
    <span className="inline-block text-sm font-medium tracking-wide text-[#D5DFC9]">
      قصتنا في الاختيار
    </span>

    <h1 className="mt-5 text-4xl font-bold md:text-6xl">
      من نحن
    </h1>

    <div className="mx-auto mt-5 h-[2px] w-16 bg-[#A7B69B]" />

    <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/90 md:text-lg">
      في هاجر دريسز، نؤمن أن لكل مناسبة إطلالة تستحق أن تُختار بعناية.
    </p>
  </div>
</section>


      <main dir="rtl" className="overflow-hidden bg-white text-[#292B27]">
        {/* Hero */}
        <section className="px-5 pb-16 pt-5 md:px-10 md:pb-24 md:pt-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold tracking-[0.16em] text-[#8D9B83]">
                HAGER DRESSES
              </span>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.5] md:text-5xl lg:text-6xl">
                لكل مناسبة
                <br />
                <span className="font-normal text-[#8D9B83]">
                  حكاية خاصة بكِ
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[#777A73] md:text-base md:leading-9">
                نعرف أن اختيار فستان المناسبة ليس مجرد اختيار قطعة ملابس،
                بل هو جزء من لحظة جميلة تستحق أن تتذكريها. لذلك نمنحكِ
                مساحة لاكتشاف فساتين السهرة وتجربتها واختيار ما يشبهكِ،
                بكل هدوء واهتمام.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/dresses"
                  className="inline-flex items-center justify-center gap-3 bg-[#8D9B83] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#74866A]"
                >
                  اكتشفي الفساتين
                  <span aria-hidden="true">←</span>
                </Link>

                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center border border-[#DDE2D8] px-7 py-4 text-sm transition hover:border-[#8D9B83] hover:text-[#74866A]"
                >
                  ابدئي الحجز
                </Link>
              </div>

              <div className="mt-10 h-px w-full bg-[#E9EBE5]" />

              <p className="mt-5 text-xs leading-7 text-[#92958D]">
                فساتين سهرة للتأجير · تجربة في الأتيليه · تفاصيل تؤكد معكِ
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-[540px]">
                <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 border border-[#DDE2D8] md:-bottom-6 md:-left-6" />

                <div className="relative aspect-[4/5] overflow-hidden bg-[#F3F5F0]">
                  <Image
                    src="https://koeei.com/cdn/shop/files/15_e8bf908f-585a-47c2-9c1f-f02019b15d1b.jpg?v=1748236022&width=800"
                    alt="أجواء فساتين السهرة في هاجر دريسز"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-6 pb-7 pt-20 text-white md:px-8">
                    <p className="text-xs tracking-widest text-white/80">
                      YOUR MOMENT, YOUR STYLE
                    </p>
                    <p className="mt-2 text-xl font-medium md:text-2xl">
                      إطلالة تعبّر عنكِ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#ffffff] px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
                OUR STORY
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-relaxed md:text-4xl">
                قصتنا تبدأ من
                <br />
                <span className="font-normal text-[#8D9B83]">
                  حب التفاصيل الجميلة
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-[#777A73] md:text-base md:leading-9">
              <p>
                جاءت فكرة هاجر دريسز من رغبتنا في جعل اختيار فستان السهرة
                تجربة مريحة وشخصية؛ تجربة تجدين فيها ما يناسب مناسبتكِ
                وذوقكِ دون الحاجة إلى شراء فستان جديد لكل مناسبة.
              </p>

              <p>
                نؤمن أن الأناقة ليست في كثرة الخيارات، بل في العثور على
                الاختيار المناسب لكِ. ولهذا نهتم بأن تتعرفي على الفستان
                وتفاصيله ومقاسه قبل اتخاذ قراركِ.
              </p>

              <p>
                هدفنا أن نكون جزءًا لطيفًا من استعدادكِ لمناسبتكِ، وأن
                تجدي لدينا تجربة واضحة تبدأ باختيار الفستان وتنتهي بتأكيد
                تفاصيل التأجير مع فريقنا.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
                WHAT MATTERS TO US
              </span>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                ما الذي يميز تجربتكِ معنا؟
              </h2>

              <p className="mt-4 text-sm leading-8 text-[#777A73] md:text-base">
                تفاصيل بسيطة، لكنها تصنع فرقًا في رحلة اختيار فستانكِ.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="group border border-[#E9EBE5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B8C4AF] hover:shadow-lg hover:shadow-[#8D9B83]/10 md:p-9"
                >
                  <span className="flex h-12 w-12 items-center justify-center border border-[#DDE2D8] text-sm text-[#8D9B83] transition group-hover:bg-[#8D9B83] group-hover:text-white">
                    {value.number}
                  </span>

                  <h3 className="mt-7 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#777A73]">
                    {value.description}
                  </p>

                  <div className="mt-7 h-px w-12 bg-[#8D9B83] transition-all group-hover:w-20" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-[#ffffff] px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
                  YOUR EXPERIENCE
                </span>

                <h2 className="mt-4 text-3xl font-semibold leading-relaxed md:text-4xl">
                  من أول اختيار
                  <br />
                  إلى تأكيد الحجز
                </h2>

                <p className="mt-5 text-sm leading-8 text-[#777A73] md:text-base">
                  رتّبنا الخطوات لتكون واضحة، حتى تتمكني من التركيز على
                  اختيار الإطلالة التي تحبينها.
                </p>

                <Link
                  href="/booking"
                  className="mt-7 inline-flex items-center gap-3 border-b border-[#8D9B83] pb-2 text-sm font-semibold text-[#74866A] transition hover:gap-5"
                >
                  اعرفي تفاصيل الحجز
                  <span aria-hidden="true">←</span>
                </Link>
              </div>

              <div className="space-y-0">
                {steps.map((step, index) => (
                  <article
                    key={step.number}
                    className="flex gap-5 border-b border-[#DDE2D8] py-7 first:pt-0 last:border-b-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-sm text-[#8D9B83]">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#777A73]">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl bg-[#8D9B83] px-6 py-12 text-center text-white md:px-12 md:py-16">
            <span className="text-xs tracking-widest text-white/80">
              YOUR NEXT SPECIAL MOMENT
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-relaxed md:text-4xl">
              مناسبتكِ القادمة تبدأ باختياركِ
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-white/90 md:text-base">
              اكتشفي مجموعة الفساتين، واختاري التصميم الأقرب إليكِ،
              وتواصلي معنا لتأكيد التوفر والتفاصيل.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/dresses"
                className="bg-white px-7 py-3.5 text-sm font-semibold text-[#56634F] transition hover:bg-[#F3F5F0]"
              >
                تصفحي الفساتين
              </Link>

              <Link
                href="/contact"
                className="border border-white/60 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                تواصلي معنا
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
