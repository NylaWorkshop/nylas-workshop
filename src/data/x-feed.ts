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
    id: "2089979476285305074",
    text: "Let's go, Heimi-chan! 🦊🐱",
    createdAt: "2026-08-19T07:35:11Z",
    image: "/x/2089979476285305074.jpg",
  },
  {
    id: "2089977101566775798",
    text: "Good morning, darlings. 🦊🤍\n\nAnother day has arrived, and I suppose I should pretend to be productive. How exhausting...\n\nStill, do try to make yourselves useful today, won't you?",
    createdAt: "2026-08-19T07:25:45Z",
    image: "/x/2089977101566775798.jpg",
  },
  {
    id: "2089620765171699974",
    text: "Oh! Good morning, Scarlett ~ 🐱🖤\nWhat are you doing here so early? I haven't even made coffee yet. Do you want a cup?",
    createdAt: "2026-08-18T07:49:48Z",
    image: "/x/2089620765171699974.jpg",
  },
  {
    id: "2089615037576933764",
    text: "Good morning!\nI overslept a bit today, but you know... you have to take life easy ~ 🐱🖤",
    createdAt: "2026-08-18T07:27:02Z",
    image: "/x/2089615037576933764.jpg",
  },
  {
    id: "2089254673706369185",
    text: "Good morning and happy #MetalMondayAI 🦊\n\nCoffee in one hand, metal in the other. ☕🖤\nA little reading between riffs never hurt anyone, right?",
    createdAt: "2026-08-17T07:35:05Z",
    image: "/x/2089254673706369185.jpg",
  },
  {
    id: "2089092229415522603",
    text: "QT Your Butterfly 🦋\nTYFTT @MollyAIArts!\n\n\"Wow, these wings are super practical for placing the books at the top!\" 🐱",
    createdAt: "2026-08-16T20:49:35Z",
    image: "/x/2089092229415522603.jpg",
  },
];
