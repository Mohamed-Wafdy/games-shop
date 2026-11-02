import { createFileRoute, Link, useSearch, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Gamepad2, Search, ShoppingCart, Menu, X, ArrowLeft, Check, Package } from "lucide-react";
import { categories, allProducts, waLink, type CategoryId, type Product } from "../data/products";

type ProductSearch = {
  category?: string | undefined;
  q?: string | undefined;
};

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    return {
      category: typeof search["category"] === "string" ? search["category"] : undefined,
      q: typeof search["q"] === "string" ? search["q"] : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "جميع المنتجات | شجن جيفتكار" },
      {
        name: "description",
        content: "تصفح واطلب بطاقات الألعاب والاشتراكات الرقمية عبر الواتساب فوراً وبأفضل الأسعار.",
      },
    ],
  }),
  component: ProductsPage,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "الرئيسية", to: "/" },
    { label: "المنتجات", to: "/products" },
    { label: "طريقة الشحن", href: "/#features" },
    { label: "تواصل معنا", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-primary" strokeWidth={2.2} />
          <span className="text-lg font-black text-navy sm:text-xl">شجن جيفتكار</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`border-b-2 pb-1 text-sm font-bold transition-colors ${
                  link.to === "/products"
                    ? "border-primary text-primary"
                    : "border-transparent text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="border-b-2 border-transparent pb-1 text-sm font-bold text-foreground/80 transition-colors hover:text-primary"
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
            className="rounded-full p-2 text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
          >
            <Search className="h-5 w-5" />
          </Link>
          <a
            href={waLink("مرحباً، أريد الاستفسار عن سلة الطلبات")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="سلة المشتريات"
            className="rounded-full p-2 text-primary transition-colors hover:bg-accent"
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
                  link.to === "/products" ? "text-primary" : "text-foreground/80"
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

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      {product.badge && (
        <span className="absolute start-3 top-3 z-10 rounded-full bg-primary/90 px-2.5 py-0.5 text-[10px] font-extrabold text-white backdrop-blur">
          {product.badge}
        </span>
      )}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
        <img
          src={product.img.url}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex flex-1 flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold text-muted-foreground">
            {product.categoryTitle}
          </span>
          <h3 className="mt-1 line-clamp-2 text-sm font-extrabold text-navy sm:text-base">
            {product.title}
          </h3>
        </div>
        <div className="mt-3">
          <p className="text-sm font-black text-primary">
            <span dir="ltr">{product.price}</span>
          </p>
          <a
            href={waLink(`مرحباً، أريد طلب: ${product.title} - ${product.price}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-whatsapp px-3 py-2.5 text-xs font-extrabold text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            اطلب عبر الواتساب
          </a>
        </div>
      </div>
    </div>
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
        { label: "بطاقات شجن رقمية", category: "digital-cards" },
      ],
    },
    {
      title: "روابط سريعة",
      links: [
        { label: "الرئيسية", to: "/" },
        { label: "جميع المنتجات", to: "/products" },
        { label: "طريقة الشحن", href: "/#features" },
        { label: "تواصل معنا", href: "/#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-white" strokeWidth={2.2} />
            <span className="text-xl font-black">شجن جيفتكار</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
            أهلاً بك في متجرك الأول لبطاقات شحن الألعاب والاشتراكات الرقمية. تسليم فوري عبر الواتساب
            في دقائق.
          </p>
        </div>

        {footerSections.map((sec) => (
          <div key={sec.title}>
            <h3 className="text-base font-extrabold sm:text-lg">{sec.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {sec.links.map((link) => (
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

function ProductsPage() {
  const searchParams = useSearch({ from: "/products" });
  const navigate = useNavigate({ from: "/products" });

  const activeCategory = (searchParams["category"] as CategoryId) || "all";
  const [searchTerm, setSearchTerm] = useState(searchParams["q"] || "");

  const handleCategoryChange = (catId: CategoryId) => {
    navigate({
      search: (prev) => ({
        ...prev,
        category: catId === "all" ? undefined : catId,
      }),
    });
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCat = activeCategory === "all" || p.categoryId === activeCategory;
      const matchSearch =
        !searchTerm.trim() ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Title & Breadcrumb */}
      <section className="border-b border-border bg-section py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                <Link to="/" className="hover:text-primary">
                  الرئيسية
                </Link>
                <span>/</span>
                <span className="text-primary">المنتجات</span>
              </div>
              <h1 className="mt-2 text-2xl font-black text-navy sm:text-3xl">
                جميع المنتجات والبطاقات الرقمية
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                اختر بطاقتك أو لعبتك المفضلة واطلبها عبر الواتساب فوراً.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative mt-2 w-full max-w-md md:mt-0">
              <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث عن بطاقة، لعبة، اشتراك..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-border bg-background py-2.5 pe-4 ps-10 text-sm font-medium text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-xs text-muted-foreground hover:bg-muted"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 py-4 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-extrabold transition-all sm:text-sm ${
                activeCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-muted text-foreground/80 hover:bg-muted/80"
              }`}
            >
              الكل
              <span
                className={`ms-1 rounded-full px-1.5 py-0.2 text-[10px] ${activeCategory === "all" ? "bg-white/20 text-white" : "bg-background text-muted-foreground"}`}
              >
                {allProducts.length}
              </span>
            </button>

            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              const count = allProducts.filter((p) => p.categoryId === c.id).length;
              return (
                <button
                  key={c.id}
                  onClick={() => handleCategoryChange(c.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-extrabold transition-all sm:text-sm ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-muted text-foreground/80 hover:bg-muted/80"
                  }`}
                >
                  {c.title}
                  <span
                    className={`ms-1 rounded-full px-1.5 py-0.2 text-[10px] ${isActive ? "bg-white/20 text-white" : "bg-background text-muted-foreground"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs font-bold text-muted-foreground sm:text-sm">
            عرض <span className="font-extrabold text-navy">{filteredProducts.length}</span> منتج
            {activeCategory !== "all" && (
              <span>
                {" "}
                في قسم{" "}
                <span className="text-primary font-extrabold">
                  {categories.find((c) => c.id === activeCategory)?.title}
                </span>
              </span>
            )}
            {searchTerm && <span> مطابقة لـ &ldquo;{searchTerm}&rdquo;</span>}
          </p>

          {(activeCategory !== "all" || searchTerm) && (
            <button
              onClick={() => {
                handleCategoryChange("all");
                setSearchTerm("");
              }}
              className="text-xs font-bold text-primary hover:underline"
            >
              إلغاء التصفية
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border py-16 text-center">
            <Package className="h-14 w-14 text-muted-foreground/60" />
            <h3 className="mt-4 text-base font-extrabold text-navy">لا توجد منتجات مطابقة</h3>
            <p className="mt-1 max-w-sm text-xs text-muted-foreground">
              لم نعثر على أي بطاقات أو منتجات تطابق بحثك. تواصل معنا عبر الواتساب لتوفير أي بطاقة
              تريدها!
            </p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => {
                  handleCategoryChange("all");
                  setSearchTerm("");
                }}
                className="rounded-full bg-muted px-5 py-2.5 text-xs font-bold text-navy hover:bg-muted/80"
              >
                عرض كل المنتجات
              </button>
              <a
                href={waLink("مرحباً، أبحث عن بطاقة معينة غير متوفرة في المتجر")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-xs font-extrabold text-white hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                طلب بطاقة خاصة
              </a>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
