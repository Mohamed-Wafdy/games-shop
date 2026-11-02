export const WHATSAPP_NUMBER = "201025532830";

export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type CategoryId = "all" | "pc" | "playstation" | "xbox" | "subscriptions" | "digital-cards";

export interface Category {
  id: CategoryId;
  title: string;
  img: { url: string };
  itemCount?: number;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  categoryId: Exclude<CategoryId, "all">;
  categoryTitle: string;
  img: { url: string };
  badge?: string;
  featured?: boolean;
}

export const categories: Category[] = [
  { id: "pc", title: "ألعاب PC", img: { url: "/images/cat-pc.jpg" }, itemCount: 5 },
  { id: "playstation", title: "ألعاب PlayStation", img: { url: "/images/cat-playstation.jpg" }, itemCount: 3 },
  { id: "xbox", title: "ألعاب Xbox", img: { url: "/images/cat-xbox.jpg" }, itemCount: 3 },
  { id: "subscriptions", title: "اشتراكات وخدمات", img: { url: "/images/cat-subscriptions.jpg" }, itemCount: 2 },
  { id: "digital-cards", title: "بطاقات شحن رقمية", img: { url: "/images/cat-digital-cards.jpg" }, itemCount: 4 },
];

export const allProducts: Product[] = [
  {
    id: "steam-50",
    title: "بطاقة Steam Wallet",
    price: "50 USD",
    categoryId: "pc",
    categoryTitle: "ألعاب PC",
    img: { url: "/images/prod-steam.jpg" },
    featured: true,
  },
  {
    id: "valorant-1050",
    title: "شحن نقاط Valorant",
    price: "1050 VP",
    categoryId: "pc",
    categoryTitle: "ألعاب PC",
    img: { url: "/images/prod-valorant.jpg" },
    featured: true,
  },
  {
    id: "pubg-660",
    title: "شحن شدات PUBG",
    price: "660 UC",
    categoryId: "pc",
    categoryTitle: "ألعاب PC",
    img: { url: "/images/prod-pubg.jpg" },
    featured: true,
  },
  {
    id: "xbox-50",
    title: "بطاقة Xbox Gift Card",
    price: "50 USD",
    categoryId: "xbox",
    categoryTitle: "ألعاب Xbox",
    img: { url: "/images/prod-xbox.jpg" },
    featured: true,
  },
  {
    id: "psn-50",
    title: "بطاقة PlayStation Store",
    price: "50 USD",
    categoryId: "playstation",
    categoryTitle: "ألعاب PlayStation",
    img: { url: "/images/prod-psn.jpg" },
    featured: true,
  },
  {
    id: "ps-plus",
    title: "اشتراك PlayStation Plus",
    price: "12 شهر",
    categoryId: "subscriptions",
    categoryTitle: "اشتراكات وخدمات",
    img: { url: "/images/prod-psn.jpg" },
    badge: "الأكثر طلباً",
    featured: false,
  },
  {
    id: "gamepass-ult",
    title: "اشتراك Xbox Game Pass Ultimate",
    price: "3 أشهر",
    categoryId: "subscriptions",
    categoryTitle: "اشتراكات وخدمات",
    img: { url: "/images/prod-xbox.jpg" },
    badge: "توفير",
    featured: false,
  },
  {
    id: "steam-100",
    title: "بطاقة Steam Wallet",
    price: "100 USD",
    categoryId: "digital-cards",
    categoryTitle: "بطاقات شجن رقمية",
    img: { url: "/images/prod-steam.jpg" },
    featured: false,
  },
  {
    id: "pubg-1800",
    title: "شحن شدات PUBG",
    price: "1800 UC",
    categoryId: "pc",
    categoryTitle: "ألعاب PC",
    img: { url: "/images/prod-pubg.jpg" },
    badge: "شائع",
    featured: false,
  },
  {
    id: "valorant-2175",
    title: "شحن نقاط Valorant",
    price: "2175 VP",
    categoryId: "pc",
    categoryTitle: "ألعاب PC",
    img: { url: "/images/prod-valorant.jpg" },
    featured: false,
  },
  {
    id: "psn-100",
    title: "بطاقة PlayStation Store",
    price: "100 USD",
    categoryId: "playstation",
    categoryTitle: "ألعاب PlayStation",
    img: { url: "/images/prod-psn.jpg" },
    featured: false,
  },
  {
    id: "xbox-100",
    title: "بطاقة Xbox Gift Card",
    price: "100 USD",
    categoryId: "xbox",
    categoryTitle: "ألعاب Xbox",
    img: { url: "/images/prod-xbox.jpg" },
    featured: false,
  },
  {
    id: "digital-itunes",
    title: "بطاقة أبل iTunes Store",
    price: "25 USD",
    categoryId: "digital-cards",
    categoryTitle: "بطاقات شجن رقمية",
    img: { url: "/images/cat-digital-cards.jpg" },
    featured: false,
  },
  {
    id: "digital-google",
    title: "بطاقة Google Play Store",
    price: "50 USD",
    categoryId: "digital-cards",
    categoryTitle: "بطاقات شجن رقمية",
    img: { url: "/images/cat-digital-cards.jpg" },
    featured: false,
  },
];

