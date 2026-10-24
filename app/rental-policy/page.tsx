
import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/components/site-chrome";

const policies = [
  {
    number: "01",
    title: "الحجز وتأكيد الطلب",
    description:
      "يمكنكِ اختيار الفستان المناسب وإرسال طلب الحجز من خلال الموقع. يُعد الطلب مبدئيًا حتى يتواصل معكِ الأتيليه لتأكيد توفر الفستان في تاريخ مناسبتكِ والاتفاق على التفاصيل النهائية.",
  },
  {
    number: "02",
    title: "مدة التأجير",
    description:
      "تُحدد مدة التأجير وفقًا للفستان وتاريخ المناسبة والاتفاق مع الأتيليه. يُرجى التأكد من موعد الاستلام وموعد الإرجاع عند اعتماد الحجز.",
  },
  {
    number: "03",
    title: "الاستلام والإرجاع",
    description:
      "يتم الاتفاق مسبقًا على مواعيد ومكان استلام الفستان وإرجاعه. نرجو الالتزام بالمواعيد المتفق عليها، والتواصل مع الأتيليه إذا طرأ أي تغيير على موعد الإرجاع.",
  },
  {
    number: "04",
    title: "البروفة والمقاسات",
    description:
      "ننصحكِ بالتعرف على المقاس وتفاصيل الفستان قبل تأكيد الحجز. يمكنكِ التواصل مع الأتيليه للاستفسار عن إمكانية البروفة وأي تعديلات مناسبة قبل اعتماد الطلب.",
  },
  {
    number: "05",
    title: "الإلغاء وتغيير الموعد",
    description:
      "إذا رغبتِ في إلغاء الحجز أو تغيير تاريخ المناسبة، يُرجى التواصل مع الأتيليه في أقرب وقت. يتم توضيح إمكانية التغيير وأي شروط مرتبطة به عند تأكيد الحجز.",
  },
  {
    number: "06",
    title: "العناية بالفستان",
    description:
      "يرجى المحافظة على الفستان والتعامل معه بعناية خلال فترة التأجير. قبل تنظيفه أو إجراء أي تعديل عليه، تواصلي مع الأتيليه لمعرفة التعليمات المناسبة.",
  },
  {
    number: "07",
    title: "التلف أو التأخير في الإرجاع",
    description:
      "في حال حدوث تلف أو تعذر إرجاع الفستان في الموعد المتفق عليه، يُرجى إبلاغ الأتيليه مباشرةً. يتم توضيح أي مسؤوليات أو رسوم محتملة والاتفاق عليها قبل تأكيد الحجز.",
  },
  {
    number: "08",
    title: "الأسعار والتوفر",
    description:
      "قد يختلف السعر والتوفر بحسب الفستان وتاريخ المناسبة. الأسعار والمعلومات المعروضة على الموقع قابلة للتأكيد، ويعتمد الحجز النهائي بعد مراجعة التفاصيل مع الأتيليه.",
  },
];

export default function PolicyPage() {
  return (
    <>
      <Header />

      <main dir="rtl" className="overflow-hidden bg-white text-[#292B27]">
        {/* Hero */}
        <section className="relative flex min-h-[340px] items-center justify-center overflow-hidden px-5 py-20 text-center md:min-h-[420px]">
          <Image
            src="/images/hager-hero.png"
            alt="فساتين السهرة في هاجر دريسز"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 mx-auto max-w-3xl text-white">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#D5DFC9]">
              RENTAL INFORMATION
            </span>

            <h1 className="mt-5 text-4xl font-bold md:text-6xl">
              سياسة التأجير
            </h1>

            <div className="mx-auto mt-5 h-0.5 w-16 bg-[#A7B69B]" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/90 md:text-base">
              كل ما تحتاجين إلى معرفته قبل استئجار فستانكِ،
              من الحجز والبروفة إلى الاستلام والإرجاع.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-4xl border border-[#E5E9E0] bg-[#F7F8F5] p-6 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#E8EDE4] text-[#74866A]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 11v5m0-8h.01" />
                </svg>
              </div>

              <div>
                <h2 className="text-lg font-semibold md:text-xl">
                  قبل تأكيد حجزكِ
                </h2>

                <p className="mt-3 text-sm leading-8 text-[#777A73] md:text-base">
                  توضح هذه الصفحة المعلومات العامة المتعلقة بتجربة التأجير
                  في هاجر دريسز. تُراجع تفاصيل السعر والتوفر والمواعيد
                  وأي شروط إضافية مع الأتيليه قبل تأكيد الحجز. لا تُعد
                  البنود التي لم يعتمدها الأتيليه شروطًا نهائية.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="px-5 pb-16 md:px-10 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
                RENTAL GUIDELINES
              </span>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                تفاصيل تجربة التأجير
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#777A73]">
                اطلعي على النقاط التالية، وتواصلي معنا إذا احتجتِ إلى
                توضيح أي تفصيل قبل الحجز.
              </p>
            </div>

            <div className="border-t border-[#E8EAE5]">
              {policies.map((policy) => (
                <article
                  key={policy.number}
                  className="group grid gap-4 border-b border-[#E8EAE5] py-7 transition md:grid-cols-[64px_1fr] md:gap-6 md:py-9"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-[#DDE2D8] text-sm text-[#8D9B83] transition group-hover:border-[#8D9B83] group-hover:bg-[#F3F5F0]">
                    {policy.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold transition group-hover:text-[#74866A]">
                      {policy.title}
                    </h3>

                    <p className="mt-3 text-sm leading-8 text-[#777A73] md:text-base">
                      {policy.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#F5F6F2] px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
              NEED MORE INFORMATION?
            </span>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              عندكِ استفسار قبل الحجز؟
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#777A73] md:text-base">
              فريق هاجر دريسز يسعده مساعدتكِ في معرفة التفاصيل،
              والتأكد من توفر الفستان ومواعيد البروفة والاستلام.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#8D9B83] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#74866A]"
              >
                تواصلي معنا
                <span aria-hidden="true">←</span>
              </Link>

              <Link
                href="/dresses"
                className="inline-flex items-center justify-center border border-[#DDE2D8] bg-white px-7 py-4 text-sm font-semibold transition hover:border-[#8D9B83] hover:text-[#74866A]"
              >
                اكتشفي الفساتين
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
