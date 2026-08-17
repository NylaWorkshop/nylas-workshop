import type { Lang } from "../i18n/ui";
import type { Character } from "./characters";

export const bandMembers: Character[] = [
  {
    id: "tsuki",
    name: "Tsuki",
    image: "/reaper-codex/tsuki.jpg",
    accent: "#c9a0e8",
    es: {
      role: "Guitarra principal · Fundadora",
      paragraphs: [
        "Virtuosa de la guitarra principal y la fuerza creativa del proyecto. Tsuki fundó Reaper Codex para fundir riffs afilados, atmósferas épicas y una identidad visual sacada de mundos de fantasía oscura.",
        "Si el códice tiene una autora, es ella: la que decide qué leyenda se convierte en canción y a qué volumen debe sonar.",
      ],
    },
    en: {
      role: "Lead guitar · Founder",
      paragraphs: [
        "Lead-guitar virtuoso and the project's main creative force. Tsuki founded Reaper Codex to fuse razor-sharp riffs, epic atmospheres and a visual identity drawn from dark fantasy worlds.",
        "If the codex has an author, it is her: the one who decides which legend becomes a song, and how loud it ought to be.",
      ],
    },
  },
  {
    id: "ibara",
    name: "Ibara",
    image: "/reaper-codex/ibara.jpg",
    accent: "#d94a3d",
    es: {
      role: "Voz",
      paragraphs: [
        "Una imponente oni roja cuya voz es capaz de alternar entre la furia devastadora y la emoción más profunda.",
        "Cuando Ibara toma el micrófono, el escenario deja de ser un escenario: se convierte en el umbral del ritual.",
      ],
    },
    en: {
      role: "Vocals",
      paragraphs: [
        "An imposing red oni whose voice can shift from devastating fury to the deepest feeling.",
        "When Ibara takes the microphone, the stage stops being a stage: it becomes the threshold of the ritual.",
      ],
    },
  },
  {
    id: "nyla",
    name: "Nyla",
    image: "/reaper-codex/nyla.jpg",
    accent: "#e8c97a",
    es: {
      role: "Batería",
      paragraphs: [
        "Marca el pulso de cada composición con una energía arrolladora y una precisión implacable.",
        "Fuera del escenario es dueña de una librería. Detrás de la batería no hay tregua: Nyla es el corazón que no se detiene.",
      ],
    },
    en: {
      role: "Drums",
      paragraphs: [
        "She sets the pulse of every piece with overwhelming energy and implacable precision.",
        "Offstage she owns a bookshop. Behind the kit there is no quarter: Nyla is the heart that does not stop.",
      ],
    },
  },
  {
    id: "elowen",
    name: "Elowen",
    image: "/reaper-codex/elowen.jpg",
    accent: "#7d9a72",
    es: {
      role: "Guitarra rítmica",
      paragraphs: [
        "Sus armonías y texturas aportan profundidad y carácter al sonido de la banda.",
        "Si Tsuki escribe la hoja del códice, Elowen es la tinta que se queda entre las líneas: menos visible, imposible de quitar.",
      ],
    },
    en: {
      role: "Rhythm guitar",
      paragraphs: [
        "Her harmonies and textures give the band's sound its depth and character.",
        "If Tsuki writes the page of the codex, Elowen is the ink that stays between the lines: less visible, impossible to take away.",
      ],
    },
  },
];
