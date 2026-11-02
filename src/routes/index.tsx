import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Gamepad2,
  Search,
  ShoppingCart,
  Menu,
  X,
  ArrowLeft,
  Headphones,
  ShieldCheck,
  Zap,
  BadgeCheck,
} from "lucide-react";

import { categories, allProducts, waLink, type Category, type Product } from "../data/products";

const heroBanner = { url: "/images/hero-banner.jpg" };
const contactBanner = { url: "/images/contact-banner.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "شجن جيفتكار | بطاقات الألعاب والاشتراكات الرقمية" },
      {
        name: "description",
        content:
          "شجن جيفتكار: أهلاً بك في أصل منتجاتك من بطاقات شحن الألعاب والاشتراكات الرقمية وبطاقات الشحن الرقمية ووسيلة توصلك به خلال دقائق.",
      },
      { property: "og:title", content: "شجن جيفتكار | بطاقات الألعاب والاشتراكات الرقمية" },
      {
        property: "og:description",
        content: "اطلب بطاقات شحن الألعاب والاشتراكات الرقمية عبر الواتساب وتوصل في دقائق.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "المنتجات", to: "/products" },
  { label: "طريقة الشحن", href: "#features" },
  { label: "تواصل معنا", href: "#contact" },
];

const features = [
  { icon: BadgeCheck, title: "منتجات أصلية", desc: "بطاقات وخدمات رسمية ومضمونة" },
  { icon: Zap, title: "تسليم سريع", desc: "احصل على منتجك خلال دقائق" },
  { icon: ShieldCheck, title: "شحن آمن", desc: "نضمن لك شحن أمن 100%" },
  { icon: Headphones, title: "دعم مستمر", desc: "فريق دعم جاهز لمساعدتك في أي وقت" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function SectionHeader({ title, to = "/products" }: { title: string; to?: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-8 rounded-full bg-[#0070f3]" />
        <h2 className="text-xl font-black text-[#0f172a] sm:text-2xl">{title}</h2>
      </div>
      <Link
        to={to}
        className="flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#0070f3] transition-colors hover:text-[#005fd1]"
      >
        <span>عرض الكل</span>
        <ArrowLeft className="h-4 w-4" />
      </Link>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-[#0070f3]" strokeWidth={2.2} />
          <span className="text-lg font-black text-[#0f172a] sm:text-xl">شجن جيفتكار</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`border-b-2 pb-1 text-sm font-bold transition-colors ${
                  link.to === "/"
                    ? "border-[#0070f3] text-[#0070f3]"
                    : "border-transparent text-foreground/80 hover:text-[#0070f3]"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="border-b-2 border-transparent pb-1 text-sm font-bold text-foreground/80 transition-colors hover:text-[#0070f3]"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/products"
            aria-label="بحث"
            className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-accent hover:text-[#0070f3]"
          >
            <Search className="h-5 w-5" />
          </Link>
          <a
            href={waLink("مرحباً، أريد الاستفسار عن سلة الطلبات")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="سلة المشتريات"
            className="rounded-full p-2 text-[#0070f3] transition-colors hover:bg-accent"
          >
            <ShoppingCart className="h-6 w-6" />
          </a>
          <button
            aria-label="القائمة"
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-accent md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-bold ${
                  link.to === "/" ? "text-[#0070f3]" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-bold text-foreground/80"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      )}
    </header>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/products"
      search={{ category: category.id }}
      className="group flex flex-col rounded-2xl border border-[#eef2f6] bg-white p-3.5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="aspect-[146/117] w-full overflow-hidden rounded-xl bg-muted">
        <img
          src={category.img.url}
          alt={category.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 text-center text-sm font-extrabold text-[#0f172a] sm:text-base">
        {category.title}
      </h3>

      <div className="mt-3 flex justify-end">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#edf4ff] text-[#0070f3] transition-colors group-hover:bg-[#0070f3] group-hover:text-white">
          <ArrowLeft className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-[#eef2f6] bg-white p-3.5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden rounded-xl bg-muted">
        <img
          src={product.img.url}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-3 text-center text-sm font-extrabold text-[#0f172a] sm:text-base">
        {product.title}
      </h3>

      <p className="mt-1 text-center text-sm font-extrabold text-[#0070f3]">
        <span dir="ltr">{product.price}</span>
      </p>

      <a
        href={waLink(`مرحباً، أريد طلب: ${product.title} - ${product.price}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0070f3] px-3 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#005fd1] hover:shadow sm:text-sm"
      >
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#25D366] text-white">
          <WhatsAppIcon className="h-3 w-3" />
        </span>
        <span>اطلب عبر الواتساب</span>
      </a>
    </div>
  );
}

function ContactBanner() {
  return (
    <section id="contact" className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-lg transition-transform duration-200 hover:scale-[1.005]">
        <a
          href={waLink("مرحباً، أريد الاستفسار عن المنتجات المتاحة")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل معنا عبر الواتساب"
          className="block w-full cursor-pointer"
        >
          <img
            src={contactBanner.url}
            alt="اطلب منتجك عبر الواتساب - تواصل معنا الآن عبر الواتساب لطلب أي منتج أو اشتراك"
            loading="lazy"
            className="h-auto w-full rounded-3xl object-cover"
          />
        </a>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="bg-section">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center gap-2 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#edf4ff]">
              <f.icon className="h-8 w-8 text-[#0070f3]" strokeWidth={1.8} />
            </span>
            <h3 className="mt-2 text-base font-extrabold text-[#0f172a] sm:text-lg">{f.title}</h3>
            <p className="max-w-[220px] text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocialIcon({
  children,
  label,
  href = "#contact",
}: {
  children: React.ReactNode;
  label: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="text-white/80 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

function Footer() {
  const footerSections = [
    {
      title: "أقسام المتجر",
      links: [
        { label: "ألعاب PC", category: "pc" },
        { label: "ألعاب PlayStation", category: "playstation" },
        { label: "ألعاب Xbox", category: "xbox" },
        { label: "اشتراكات وخدمات", category: "subscriptions" },
        { label: "بطاقات شحن رقمية", category: "digital-cards" },
      ],
    },
    {
      title: "روابط سريعة",
      links: [
        { label: "الرئيسية", to: "/" },
        { label: "جميع المنتجات", to: "/products" },
        { label: "طريقة الشحن", href: "#features" },
        { label: "تواصل معنا", href: "#contact" },
      ],
    },
    {
      title: "معلومات مهمة",
      links: [
        { label: "الأسئلة الشائعة", href: "#features" },
        { label: "سياسة الخصوصية", href: "#" },
        { label: "شروط الاستخدام", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-white" strokeWidth={2.2} />
            <span className="text-xl font-black">شجن جيفتكار</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            أهلاً بك في أصل منتجاتك من بطاقات شحن الألعاب والاشتراكات الرقمية وبطاقات شحن رقمية
            ووسيلة توصلك به خلال دقائق.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <SocialIcon label="واتساب" href={waLink("مرحباً")}>
              <WhatsAppIcon className="h-5 w-5" />
            </SocialIcon>
          </div>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-base font-extrabold sm:text-lg">{section.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  {"category" in link ? (
                    <Link
                      to="/products"
                      search={{ category: link.category }}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 sm:text-sm">
          جميع الحقوق محفوظة ، شجن جيفتكار
        </div>
      </div>
    </footer>
  );
}

function Index() {
  // Top 5 featured products exactly matching screenshot order
  const featuredProducts = allProducts.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <img
        src={heroBanner.url}
        alt="بطاقات شحن الألعاب والاشتراكات الرقمية"
        className="w-full object-cover"
      />

      {/* Row 1: تصفح الأقسام */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <SectionHeader title="تصفح الأقسام" to="/products" />

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>

      {/* Row 2: منتجات مميزة */}
      <section id="products" className="mx-auto max-w-7xl px-4 pb-12 sm:pb-16">
        <SectionHeader title="منتجات مميزة" to="/products" />

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <ContactBanner />
      <Features />
      <Footer />
    </div>
  );
}
