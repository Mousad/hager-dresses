
export type Dress = {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  details: string;
  price?: number;
  sizes: string[];
  colors: string[];
  availability: string;
  featured: boolean;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "فساتين-سهرة",
    name: "فساتين سهرة",
    description: "إطلالات لافتة للمناسبات المسائية والاحتفالات الخاصة.",
    image: "/images/dress-emerald.png",
  },
  {
    slug: "فساتين-ناعمة",
    name: "فساتين ناعمة",
    description: "قصات رقيقة وتفاصيل هادئة للحظات التي تستحق أناقة بسيطة.",
    image: "/images/dress-rose.png",
  },
  {
    slug: "فساتين-كلاسيكية",
    name: "فساتين كلاسيكية",
    description: "تصاميم خالدة تمنحك حضوراً أنيقاً في كل مناسبة.",
    image: "/images/dress-black.png",
  },
  {
    slug: "فساتين-للمناسبات",
    name: "فساتين للمناسبات",
    description: "مجموعة منتقاة لاختيار إطلالتكِ القادمة بثقة.",
    image: "/images/hager-hero.png",
  },
];

/* =================================================
   المنتجات
   أضف رابط الصورة مكان IMAGE_URL
================================================= */

const dressData = [
  // القسم الأول: فساتين سهرة (6 منتجات)
  {
    slug: "ليلة-الزمرد",
    name: "ليلة الزمرد",
    category: "فساتين سهرة",
    image: "https://i.pinimg.com/736x/c2/e1/02/c2e1022a9f89d2891b6e63e72e8308e8.jpg",
    description: "فستان سهرة بلون زمردي جذاب، لإطلالة راقية تلفت الأنظار.",
    price: 1800,
    featured: true,
  },
  {
    slug: "بريق-الليل",
    name: "بريق الليل",
    category: "فساتين سهرة",
    image: "https://i.pinimg.com/1200x/69/45/b1/6945b14ef12f595deb842c5513d2999c.jpg",
    description: "تصميم أنيق بتفاصيل لامعة يناسب الأمسيات والمناسبات الخاصة.",
    price: 1950,
    featured: true,
  },
  {
    slug: "سحر-السهرة",
    name: "سحر السهرة",
    category: "فساتين سهرة",
    image: "https://i.pinimg.com/1200x/05/a3/3f/05a33fdc2928ee74bd252fe8f0a8ac00.jpg",
    description: "فستان أنثوي بقصة مميزة تمنحك حضوراً استثنائياً.",
    price: 2100,
    featured: true,
  },
  {
    slug: "وهج-المساء",
    name: "وهج المساء",
    category: "فساتين سهرة",
    image: "https://i.pinimg.com/736x/dd/6b/44/dd6b44aee0b642f32b9c54d7a8828a94.jpg",
    description: "إطلالة مسائية فاخرة بتفاصيل تجمع بين البساطة والرقي.",
    price: 2250,
    featured: true,
  },
  {
    slug: "نجمة-المناسبة",
    name: "نجمة المناسبة",
    category: "فساتين سهرة",
    image: "https://i.pinimg.com/736x/cf/6a/a3/cf6aa3da07f8abfbf8cebd560ad41fb3.jpg",
    description: "فستان مميز للمناسبات التي تستحق إطلالة لا تُنسى.",
    price: 2400,
    featured: true,
  },
  {
    slug: "ملكية-الأسود",
    name: "ملكية الأسود",
    category: "فساتين سهرة",
    image: "https://i.pinimg.com/736x/db/19/fc/db19fc5d736ba9ef749083f73b4e51df.jpg",
    description: "فستان سهرة أسود بطابع كلاسيكي أنيق.",
    price: 2550,
    featured: true,
  },

  // القسم الثاني: فساتين ناعمة (6 منتجات)
  {
    slug: "سكون-الورد",
    name: "سكون الورد",
    category: "فساتين ناعمة",
    image: "https://i.pinimg.com/1200x/9e/83/df/9e83df3b6fe01b533bd812e691c0e436.jpg",
    description: "فستان ناعم بألوان هادئة وقصة انسيابية أنثوية.",
    price: 1800,
    featured: true,
  },
  {
    slug: "نسمة-عاجية",
    name: "نسمة عاجية",
    category: "فساتين ناعمة",
    image: "https://i.pinimg.com/736x/92/53/8b/92538b8016616f9429a523b9ff212e02.jpg",
    description: "تصميم رقيق بدرجات عاجية لإطلالة بسيطة وأنيقة.",
    price: 1950,
    featured: true,
  },
  {
    slug: "وردة-الصباح",
    name: "وردة الصباح",
    category: "فساتين ناعمة",
    image: "https://i.pinimg.com/736x/ff/90/da/ff90da51b8e50b39b7ad1ae0fb5e5cea.jpg",
    description: "فستان بتفاصيل ناعمة يناسب المناسبات النهارية والخاصة.",
    price: 2100,
    featured: true,
  },
  {
    slug: "لمسة-وردية",
    name: "لمسة وردية",
    category: "فساتين ناعمة",
    image: "https://i.pinimg.com/736x/03/da/46/03da463b4534eae1703da3064dd2599d.jpg",
    description: "درجة وردية رقيقة مع تصميم مريح وأنيق.",
    price: 2250,
    featured: true,
  },
  {
    slug: "هدوء-الحرير",
    name: "هدوء الحرير",
    category: "فساتين ناعمة",
    image: "https://i.pinimg.com/1200x/9e/83/df/9e83df3b6fe01b533bd812e691c0e436.jpg",
    description: "إطلالة هادئة بتفاصيل ناعمة ولمسات أنثوية.",
    price: 2400,
    featured: true,
  },
  {
    slug: "حلم-ناعم",
    name: "حلم ناعم",
    category: "فساتين ناعمة",
    image: "https://i.pinimg.com/1200x/78/9e/92/789e92834f4548c0a8928062a0644ba2.jpg",
    description: "قصة انسيابية أنيقة لمحبات الإطلالات الرقيقة.",
    price: 2550,
    featured: true,
  },

  // القسم الثالث: فساتين كلاسيكية (6 منتجات)
  {
    slug: "المساء-الأسود",
    name: "المساء الأسود",
    category: "فساتين كلاسيكية",
    image: "https://i.pinimg.com/736x/db/19/fc/db19fc5d736ba9ef749083f73b4e51df.jpg",
    description: "فستان أسود كلاسيكي يناسب مختلف المناسبات.",
    price: 1800,
    featured: true,
  },
  {
    slug: "رقي-عاجي",
    name: "رقي عاجي",
    category: "فساتين كلاسيكية",
    image: "https://i.pinimg.com/1200x/aa/c8/3a/aac83ad213e534d242aae50c44663636.jpg",
    description: "تصميم راقٍ بدرجة عاجية وقصة خالدة.",
    price: 1950,
    featured: true,
  },
  {
    slug: "أناقة-خالدة",
    name: "أناقة خالدة",
    category: "فساتين كلاسيكية",
    image: "https://www.marfoli.com/cdn/shop/files/12885cfff474b68e586420d58757743b.jpg?v=1751553401&width=832",
    description: "فستان يجمع بين التصميم الكلاسيكي والتفاصيل الراقية.",
    price: 2100,
    featured: true,
  },
  {
    slug: "ظل-أنيق",
    name: "ظل أنيق",
    category: "فساتين كلاسيكية",
    image: "https://i.pinimg.com/1200x/86/c0/b3/86c0b374ac0b89797f0592b77f3d5c01.jpg",
    description: "قصة متوازنة تمنحك إطلالة كلاسيكية مميزة.",
    price: 2250,
    featured: true,
  },
  {
    slug: "سحر-العاج",
    name: "سحر العاج",
    category: "فساتين كلاسيكية",
    image: "https://i.pinimg.com/736x/a6/bb/29/a6bb29b0e708e8d8d4e35bb601e293bd.jpg",
    description: "تصميم هادئ بتفاصيل أنيقة لا تتأثر بالموضة.",
    price: 2400,
    featured: true,
  },
  {
    slug: "توقيع-الأناقة",
    name: "توقيع الأناقة",
    category: "فساتين كلاسيكية",
    image: "https://i.pinimg.com/1200x/99/d2/3a/99d23a3a115198eb5a083faadd9f17f9.jpg",
    description: "فستان كلاسيكي يمنحك حضوراً راقياً في كل مناسبة.",
    price: 2550,
    featured: true,
  },

  // القسم الرابع: فساتين للمناسبات (6 منتجات)
  {
    slug: "وهج-السهرة",
    name: "وهج السهرة",
    category: "فساتين للمناسبات",
    image: "https://i.pinimg.com/1200x/2d/61/8a/2d618a0e4264d71592c611bc232578c9.jpg",
    description: "فستان مميز للاحتفالات والمناسبات العائلية.",
    price: 1800,
    featured: true,
  },
  {
    slug: "حكاية-المساء",
    name: "حكاية المساء",
    category: "فساتين للمناسبات",
    image: "https://i.pinimg.com/1200x/9e/83/df/9e83df3b6fe01b533bd812e691c0e436.jpg",
    description: "تصميم أنيق لإطلالة متكاملة في مناسبتك القادمة.",
    price: 1950,
    featured: true,
  },
  {
    slug: "لمعة-هادئة",
    name: "لمعة هادئة",
    category: "فساتين للمناسبات",
    image: "https://i.pinimg.com/1200x/b3/8b/64/b38b64f6e3cdb2769d411002775d912e.jpg",
    description: "تفاصيل رقيقة تضيف لمسة من التألق لإطلالتك.",
    price: 2100,
    featured: true,
  },
  {
    slug: "تفاصيل-مخملية",
    name: "تفاصيل مخملية",
    category: "فساتين للمناسبات",
    image: "https://i.pinimg.com/736x/8a/b3/9c/8ab39cce973e60b506386214598c1ae1.jpg",
    description: "فستان بتفاصيل فاخرة يناسب المناسبات المميزة.",
    price: 2250,
    featured: true,
  },
  {
    slug: "نغمة-وردية",
    name: "نغمة وردية",
    category: "فساتين للمناسبات",
    image: "https://i.pinimg.com/736x/27/44/d1/2744d145c4b9561b50d2c84b2266d1f2.jpg",
    description: "إطلالة وردية أنيقة تضيف لمسة ناعمة إلى مناسبتك.",
    price: 2400,
    featured: true,
  },
  {
    slug: "بريق-المناسبة",
    name: "بريق المناسبة",
    category: "فساتين للمناسبات",
    image: "https://i.pinimg.com/1200x/d1/4a/3b/d14a3b95ff01ecfa13e03a538beefc9e.jpg",
    description: "فستان مميز لإطلالة جذابة في احتفالاتك الخاصة.",
    price: 2550,
    featured: true,
  },
];

/* =================================================
   تجهيز بيانات المنتجات تلقائياً
================================================= */

export const dresses: Dress[] = dressData.map((dress, index) => ({
  ...dress,
  id: `dress-${String(index + 1).padStart(3, "0")}`,
  code: `HD-${String(index + 1).padStart(3, "0")}`,
  images: [dress.image],
  details:
    "قطعة قابلة للتأجير من مجموعة هاجر دريسز. يرجى التواصل مع الأتيليه لتأكيد المقاس والتوفر وتفاصيل الحجز قبل اعتماد الطلب.",
  sizes: ["36", "38", "40", "42"],
  colors: ["زمردي", "أسود", "وردي هادئ"],
  availability: "التوفر يحدد بعد مراجعة تاريخ المناسبة",
}));

export function getDress(slug: string) {
  return dresses.find((dress) => dress.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getDressesByCategory(category: string) {
  return dresses.filter((dress) => dress.category === category);
}
