export type Album = {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
};

export const albums: Album[] = [
  {
    id: "raise-the-black-flag",
    image: "/reaper-codex/albums/01.png",
    title: "Raise The Black Flag",
  },
  {
    id: "american-dreams",
    image: "/reaper-codex/albums/02.png",
    title: "American Dreams",
  },
  {
    id: "echoes-between-the-pages",
    image: "/reaper-codex/albums/03.png",
    title: "Echoes Between the Pages",
    subtitle: "Oxford · MDCCCLXXXVII",
  },
  {
    id: "sangre-y-gloria",
    image: "/reaper-codex/albums/04.png",
    title: "Sangre y Gloria",
    subtitle: "Tercios de Hierro",
  },
  {
    id: "blood-and-runes",
    image: "/reaper-codex/albums/05.png",
    title: "Blood & Runes",
  },
  {
    id: "ankh",
    image: "/reaper-codex/albums/06.png",
    title: "Reaper Codex",
  },
];
