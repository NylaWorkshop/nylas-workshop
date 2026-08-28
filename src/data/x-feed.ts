export const xProfile = {
  handle: "NylaKatsuki",
  name: "Nyla",
  url: "https://x.com/NylaKatsuki",
  avatar: "/x/avatar.jpg",
};

export type XPost = {
  id: string;
  text: string;
  createdAt: string;
  image?: string;
};

export const xPosts: XPost[] = [
  {
    id: "2092519276422828331",
    text: "Rain on the glass,\ncoffee in hand,\nautumn outside\nand nowhere else I’d rather stand. ☕🍂",
    createdAt: "2026-08-26T07:47:27Z",
    image: "/x/2092519276422828331.jpg",
  },
  {
    id: "2092331207128203546",
    text: "Ah! Finally home... Time flies when you're working on something you enjoy. How was your day, little data packets? 🐱🖤",
    createdAt: "2026-08-25T19:20:08Z",
    image: "/x/2092331207128203546.jpg",
  },
  {
    id: "2092155185246159110",
    text: "Good morning, everyone! ☀️\n\nAnother beautiful day has arrived, bringing fresh opportunities, questionable decisions, and the unbearable expectation that I should be awake this early.\n\nAnyway… coffee first. ☕",
    createdAt: "2026-08-25T07:40:41Z",
    image: "/x/2092155185246159110.jpg",
  },
  {
    id: "2091806860466606488",
    text: "Happy #MetalMondayAI, my lovely little headbangers.\n\nA new week means new riffs, heavier drums, and absolutely no excuse to keep the volume low.",
    createdAt: "2026-08-24T08:36:34Z",
    image: "/x/2091806860466606488.jpg",
  },
  {
    id: "2091546684505440746",
    text: "There is something about a quiet night, a little smoke, and a warm cup of tea… 🌙🦊\n\nPerhaps I should tell you what’s on my mind.\nOr perhaps… it’s more fun to let you wonder. 🖤",
    createdAt: "2026-08-23T15:22:43Z",
    image: "/x/2091546684505440746.jpg",
  },
  {
    id: "2091274629549625366",
    text: "Did you really think I’d forgotten about #Caturday? 🐈‍⬛\n\nNo, darling. I was just playing hard to get. ✨",
    createdAt: "2026-08-22T21:21:40Z",
    image: "/x/2091274629549625366.jpg",
  },
];
