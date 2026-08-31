import { kofiUrl } from "./support";

export type CryptoWallet = {
  id: string;
  name: string;
  address: string;
};

export type FundingGoal = {
  id: string;
  amount: number;
};

/** Página del juego en itch.io: a donde lleva el botón de JUGAR. */
export const wireghostPlayUrl = "https://nylaworkshop.itch.io/wireghost";

export const wireghostFunding = {
  /** Lo recaudado hasta ahora. Actualízalo cuando entren donaciones. */
  raised: 0,
  currency: "EUR",
  kofiUrl,
  crypto: [
    { id: "doge", name: "Dogecoin", address: "D6khsAYe7yf53eMDNPo586LP2X7HA9VfDp" },
  ] satisfies CryptoWallet[],
  goals: [
    { id: "hosting", amount: 25 },
    { id: "merch", amount: 50 },
    { id: "cases", amount: 100 },
    { id: "prints", amount: 150 },
  ] satisfies FundingGoal[],
};

export function formatMoney(amount: number, lang: string) {
  return new Intl.NumberFormat(lang === "en" ? "en-GB" : "es-ES", {
    style: "currency",
    currency: wireghostFunding.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
