
import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/components/site-chrome";

const branches = [
  {
    number: "01",
    title: "الفرع ",
    area: "الحي الخامس",
    address: "٦ أكتوبر، الحي الخامس، محور الكفراوي",
    phone: "01032693166",
    phoneLink: "tel:01032693166",
    whatsapp: "https://wa.me/201032693166",
  },

];

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6914.279976524641!2d30.931293703615673!3d29.94665177069492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585500086f2765%3A0xec2af2532a012a25!2sHager%20dresses!5e0!3m2!1sar!2seg!4v1792841242410!5m2!1sar!2seg";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main dir="rtl" className="overflow-hidden bg-[#f3f5f0] text-[#292B27]">
        {/* Hero */}
        <section className="relative flex min-h-[340px] items-center justify-center overflow-hidden px-5 py-20 text-center md:min-h-[440px]">
          <Image
            src="/images/hager-hero.png"
            alt="أجواء فساتين السهرة في هاجر دريسز"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 mx-auto max-w-3xl text-white">
            <span className="text-sm font-medium tracking-widest text-[#D5DFC9]">
              WE ARE HERE FOR YOU
            </span>

            <h1 className="mt-5 text-4xl font-bold md:text-6xl">
              تواصلي معنا
            </h1>

            <div className="mx-auto mt-5 h-0.5 w-16 bg-[#A7B69B]" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/90 md:text-base">
              عندكِ سؤال عن فستان أو المقاسات أو مواعيد التجربة؟
              يسعدنا تواصلكِ معنا لمساعدتكِ في اختيار إطلالتكِ المناسبة.
            </p>

            <a
              href="#branches"
              className="mt-7 inline-flex items-center gap-3 bg-white px-7 py-3.5 text-sm font-semibold text-[#56634F] transition hover:bg-[#F3F5F0]"
            >
              تعرّفي على فروعنا
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
              GET IN TOUCH
            </span>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              يسعدنا أن نكون جزءًا من مناسبتكِ
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#777A73] md:text-base">
              اختاري وسيلة التواصل المناسبة لكِ، واستفسري عن الفساتين
              المتاحة ومواعيد المعاينة وتفاصيل التأجير. يتم تأكيد التوفر
              والحجز مع فريق الأتيليه مباشرةً.
            </p>
          </div>
        </section>

        {/* Branches */}
        <section
          id="branches"
          className="bg-[#F5F6F2] px-5 py-16 md:px-10 md:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
                VISIT OUR ATELIER
              </span>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                فروعنا في ٦ أكتوبر
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#777A73]">
                اختاري الفرع الأقرب إليكِ وتواصلي معنا قبل الزيارة.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {branches.map((branch) => (
                <article
                  key={branch.number}
                  className="group border border-[#E3E7DE] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8D9B83]/10 md:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs tracking-widest text-[#8D9B83]">
                        BRANCH {branch.number}
                      </span>

                      <h3 className="mt-3 text-2xl font-semibold">
                        {branch.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#8D9B83]">
                        {branch.area}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F3F5F0] text-[#8D9B83]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </div>
                  </div>

                  <div className="my-6 h-px bg-[#E9EBE5]" />

                  <p className="text-sm leading-8 text-[#777A73]">
                    {branch.address}
                  </p>

                  <a
                    href={branch.phoneLink}
                    className="mt-4 flex items-center gap-3 text-sm font-semibold text-[#292B27] transition hover:text-[#8D9B83]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3F5F0] text-[#8D9B83]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
                      </svg>
                    </span>

                    <span dir="ltr">{branch.phone}</span>
                  </a>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={branch.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 bg-[#8D9B83] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#74866A]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 1 1 8.5 4.7Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.5.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5H7.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4a12.7 12.7 0 0 0 4.9 4.3c.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4s.3-1.3.2-1.4-.2-.2-.5-.4Z" />
                      </svg>
                      واتساب
                    </a>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 border border-[#DDE2D8] px-4 py-3 text-sm font-semibold text-[#56634F] transition hover:border-[#8D9B83] hover:bg-[#F5F6F2]"
                    >
                      الاتجاهات
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="px-5 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
                FIND US
              </span>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                موقعنا على الخريطة
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#777A73]">
                يمكنكِ مشاهدة موقع هاجر دريسز وفتح الاتجاهات عبر خرائط جوجل.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#E8EAE5] bg-white shadow-sm">
              <iframe
                title="موقع هاجر دريسز على خرائط جوجل"
                src={mapUrl}
                className="h-[320px] w-full border-0 md:h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              <div className="flex flex-col items-center justify-between gap-4 p-5 sm:flex-row md:px-8">
                <div className="text-center sm:text-right">
                  <h3 className="font-semibold">هاجر دريسز</h3>
                  <p className="mt-1 text-sm text-[#777A73]">
                    ٦ أكتوبر، الجيزة، مصر
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Hager%20dresses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#8D9B83] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#74866A]"
                >
                  افتحي Google Maps
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-[#F5F6F2] px-5 py-16 text-center md:py-20">
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-[#8D9B83]">
              LET'S CONNECT
            </span>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              تابعي جديدنا
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-[#777A73]">
              اكتشفي أحدث الفساتين وتابعي جديد هاجر دريسز على منصات التواصل.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/hager_elhennawy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#DDE2D8] bg-white px-6 py-4 text-sm font-semibold transition hover:border-[#8D9B83] hover:text-[#74866A]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>

              <a
                href="https://www.threads.com/@hager_dresses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#DDE2D8] bg-white px-6 py-4 text-sm font-semibold transition hover:border-[#8D9B83] hover:text-[#74866A]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M12.1 2C6.5 2 3 5.9 3 12c0 6.2 3.4 10 9.1 10 4.8 0 8-2.8 8-7 0-2.6-1.4-4.4-3.8-5.2-.5-3.2-2.4-5-5.5-5-2.6 0-4.4 1.3-5.1 3.7l2.2.7c.4-1.4 1.3-2.1 2.8-2.1 1.7 0 2.7.9 3.1 2.5-.6-.1-1.2-.1-1.8-.1-4.1 0-6.5 1.9-6.5 5 0 2.7 1.9 4.5 4.8 4.5 2.7 0 4.6-1.5 5.4-4.1 1.1.6 1.7 1.6 1.7 3 0 2.8-2 4.5-5.4 4.5-4.3 0-6.8-2.9-6.8-8.1 0-5 2.5-7.8 7-7.8 2.5 0 4.1 1 4.9 3.1l2.1-.8C17.9 3.9 15.6 2 12.1 2Zm-.5 14.7c-1.6 0-2.5-.7-2.5-2 0-1.6 1.3-2.5 3.9-2.5.7 0 1.3.1 1.9.2-.4 2.8-1.5 4.3-3.3 4.3Z" />
                </svg>
                Threads
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
