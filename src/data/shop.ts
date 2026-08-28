export const shopUrl = "https://nyla-kfq-shop.fourthwall.com";

export type ShopProduct = {
  id: string;
  title: string;
  price: number;
  compareAt?: number;
  href: string;
  image: string;
  noteKey: "merch.mugNote" | "merch.teeNote" | "merch.stickerNote";
};

export const shopProducts: ShopProduct[] = [
  {
    id: "mug",
    title: "Nyla's Iconic Cat Mug",
    price: 8.95,
    href: `${shopUrl}/products/nylas-iconic-cat-mug`,
    image: "/merch/mug.jpg",
    noteKey: "merch.mugNote",
  },
  {
    id: "tee",
    title: "Reaper Codex Black Metal T-Shirt",
    price: 20,
    href: `${shopUrl}/products/reaper-codex-black-metal-t-shirt`,
    image: "/merch/tee.jpg",
    noteKey: "merch.teeNote",
  },
  {
    id: "sticker",
    title: "Nyla's Workshop — Logo Sticker",
    price: 2.29,
    compareAt: 3.29,
    href: `${shopUrl}/products/nylas-workshop-logo-sticker`,
    image: "/merch/sticker.jpg",
    noteKey: "merch.stickerNote",
  },
];

export function formatPrice(amount: number, lang: string) {
  return new Intl.NumberFormat(lang === "en" ? "en-GB" : "es-ES", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
