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
    id: "2104341425999708217",
    text: "Good evening, everyone!\nIt’s been a long and productive day. Let’s start the week strong , aye? I hope you impress me with an epic creation for #MetalMondayAI. 🦊🔥",
    createdAt: "2026-09-27T22:44:27Z",
    image: "/x/2104341425999708217.jpg",
  },
  {
    id: "2103891240131391997",
    text: "Hello everyone ~ 🐱🖤\nHappy #Caturday, everyone! I hope you're having a wonderful day! I just woke up from a nap... last night was... a long one. ✌️🏼",
    createdAt: "2026-09-26T16:55:34Z",
    image: "/x/2103891240131391997.jpg",
  },
  {
    id: "2103527989397041267",
    text: "WEEKEND. IS. HEREEEEEEEEEEEEEEEEE ~🦊🩶",
    createdAt: "2026-09-25T16:52:08Z",
    image: "/x/2103527989397041267.jpg",
  },
  {
    id: "2103420802628550822",
    text: "Good morning, y'all!🐱🖤\nIt's finally Friday! Do you have any plans for the weekend? I had to dress more formally today because we're having a company photo taken this afternoon.",
    createdAt: "2026-09-25T09:46:13Z",
    image: "/x/2103420802628550822.jpg",
  },
  {
    id: "2103112622522392604",
    text: "I was looking through old images and came across the first image I generated of Tsuki. She has evolved quite a bit since then... Which one do you like better? The first Tsuki or the current one?🦊🤍",
    createdAt: "2026-09-24T13:21:37Z",
    image: "/x/2103112622522392604.jpg",
  },
  {
    id: "2103014105732800804",
    text: "Good morning, friends ~ 🍂\nAre you ready for the arrival of autumn?",
    createdAt: "2026-09-24T06:50:09Z",
    image: "/x/2103014105732800804.jpg",
  },
];
