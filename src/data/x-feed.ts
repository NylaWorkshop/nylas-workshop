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
    id: "2101363492850696483",
    text: "Happy #Caturday, y'all! 🐱☕️\nI should have posted much sooner, but I’ve had to deal with a very high fever. I’m feeling much better now, so it’s back to business as usual. 🖤",
    createdAt: "2026-09-19T17:31:12Z",
    image: "/x/2101363492850696483.jpg",
  },
  {
    id: "2100842424440344860",
    text: "Good morning, darlings! 🦊🤍\nHappy Foxy Friday everyone. Make sure to take good care of yourselves today, okay?☕️",
    createdAt: "2026-09-18T07:00:40Z",
    image: "/x/2100842424440344860.jpg",
  },
  {
    id: "2100481483282481246",
    text: "Good morning, y'all! 🐱☕️\nI got up a bit earlier than usual today. For some reason, I love heading out early in the morning while it’s still dark, having a quiet coffee, and watching the sun rise over the city buildings before starting work. Have a great day!🖤",
    createdAt: "2026-09-17T07:06:25Z",
    image: "/x/2100481483282481246.jpg",
  },
  {
    id: "2100211289305788513",
    text: "Good afternoon, y'all! 🐱☕️\nI was experimenting with a few things, and I love how this turned out. How is your day going? 🖤",
    createdAt: "2026-09-16T13:12:46Z",
    image: "/x/2100211289305788513.jpg",
  },
  {
    id: "2100113539675345231",
    text: "Good morning, little mortals~ 🦊☕\nThe sun is shining, birds are singing...\nHow unbearably cheerful.\n\nCome now, smile for me.\nI promise I’ll only judge you a little. 🖤",
    createdAt: "2026-09-16T06:44:20Z",
    image: "/x/2100113539675345231.jpg",
  },
  {
    id: "2099754806407491945",
    text: "Good morning, y'all! 🐱☕️\nA new person is starting at the office today, and I’ve been tasked with showing them the ropes. They’ll be in my department, too, and I’ll be their supervisor... wish me luck—patience isn't exactly my greatest virtue.💀",
    createdAt: "2026-09-15T06:58:52Z",
    image: "/x/2099754806407491945.jpg",
  },
];
