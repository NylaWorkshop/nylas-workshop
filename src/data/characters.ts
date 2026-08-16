import type { Lang } from "../i18n/ui";

export type Character = {
  id: string;
  name: string;
  image: string;
  accent: string;
  es: {
    role: string;
    paragraphs: string[];
  };
  en: {
    role: string;
    paragraphs: string[];
  };
};

export const characters: Character[] = [
  {
    id: "nyla",
    name: "Nyla",
    image: "/characters/nyla.jpg",
    accent: "#e8c97a",
    es: {
      role: "La dueña",
      paragraphs: [
        "Nyla es el corazón y el alma de la librería. Propietaria del pequeño refugio entre las luces de neón, ha conseguido convertir un antiguo local perdido entre los gigantescos edificios de la ciudad en un lugar donde los libros, la magia y la tecnología conviven en perfecta armonía.",
        "Es una apasionada de las historias, especialmente de aquellas capaces de transportar al lector a lugares que no aparecen en ningún mapa. Le encanta recomendar lecturas, descubrir nuevos autores y perderse durante horas entre sus propias estanterías, aunque probablemente nunca admita que tiene algunos libros pendientes de colocar desde hace meses.",
        "Detrás de sus gafas y de esa expresión que parece decir que siempre sabe algo que tú no sabes, Nyla es una persona tranquila y acogedora. Para ella, la librería es mucho más que un negocio: es un refugio. Un lugar donde cualquiera puede sentarse con un café, abrir un libro y olvidarse por un momento del ruido de la ciudad.",
        "Y si tienes suerte, quizá sea ella quien encuentre el libro que estabas buscando sin saber siquiera que lo necesitabas.",
      ],
    },
    en: {
      role: "The owner",
      paragraphs: [
        "Nyla is the heart and soul of the bookshop. Owner of this little refuge among the neon lights, she has turned a forgotten unit lost between the city's giant buildings into a place where books, magic and technology live in easy company.",
        "She is passionate about stories, especially the kind that can carry a reader to places that appear on no map. She loves recommending books, finding new authors, and losing hours among her own shelves — though she will probably never admit that some of those books have been waiting to be put away for months.",
        "Behind her glasses, and that look that seems to say she always knows something you do not, Nyla is quiet and welcoming. To her the bookshop is more than a business: it is a refuge. A place where anyone can sit down with a coffee, open a book, and forget the noise of the city for a while.",
        "And if you are lucky, she may be the one who finds the book you were looking for, before you even knew you needed it.",
      ],
    },
  },
  {
    id: "tsuki",
    name: "Tsuki",
    image: "/characters/tsuki.jpg",
    accent: "#c9a0e8",
    es: {
      role: "La encargada",
      paragraphs: [
        "Tsuki es la encargada de la librería y, según ella misma se encargará de recordarte, **la persona realmente responsable de que todo funcione como debe**. Elegante, segura de sí misma y con una personalidad imposible de ignorar, aporta a la tranquila librería una energía completamente diferente.",
        "Le encanta la música, especialmente el metal, y no sería extraño encontrarla trabajando detrás del mostrador mientras suena alguna banda a un volumen que Nyla considera “ligeramente excesivo”. Aun así, conoce perfectamente cada rincón del establecimiento y tiene un talento especial para encontrar exactamente el libro que necesita cada cliente.",
        "Tsuki disfruta jugando con la gente y rara vez deja pasar una oportunidad para hacer un comentario ingenioso, una pequeña broma o una de esas sonrisas que hacen sospechar que está tramando algo. Sin embargo, detrás de su actitud de diva hay alguien profundamente comprometido con la librería y con quienes la visitan.",
        "Porque aunque jamás lo reconocerá en voz alta, Tsuki considera este lugar su hogar.",
        "Y sí, probablemente sea ella quien decida qué canción suena hoy.",
      ],
    },
    en: {
      role: "The manager",
      paragraphs: [
        "Tsuki is the bookshop's manager and, as she will be sure to remind you, **the person actually responsible for everything running as it should**. Elegant, sure of herself and impossible to ignore, she brings a completely different energy to the quiet shop.",
        "She loves music, metal especially, and it would not be strange to find her working behind the counter with a band playing at a volume Nyla considers “slightly excessive”. Even so, she knows every corner of the place and has a particular talent for finding exactly the book each customer needs.",
        "Tsuki enjoys playing with people, and rarely lets a chance go by for a clever remark, a small joke, or one of those smiles that make you suspect she is up to something. Behind the diva act, though, is someone deeply committed to the bookshop and to the people who visit it.",
        "Because although she will never admit it out loud, Tsuki thinks of this place as home.",
        "And yes: she is probably the one who decides what song plays today.",
      ],
    },
  },
  {
    id: "elowen",
    name: "Elowen",
    image: "/characters/elowen.jpg",
    accent: "#7d9a72",
    es: {
      role: "La bibliotecaria",
      paragraphs: [
        "Elowen es la bibliotecaria y probablemente la persona que más tiempo pasa entre las estanterías. Tímida, amable y algo despistada, conoce cada rincón de la librería como si hubiera crecido entre sus libros. Si necesitas encontrar un ejemplar concreto, es muy probable que sepa exactamente dónde está… incluso aunque nadie recuerde haberlo colocado allí.",
        "Tiene una especial predilección por los libros antiguos, los cuentos de fantasía y aquellas historias que parecen esconder algo entre sus páginas. Puede pasar una tarde entera organizando una sección y, de repente, detenerse porque ha encontrado un libro que no recordaba haber visto antes.",
        "Elowen no suele hablar demasiado, especialmente con desconocidos, pero cuando consigue sentirse cómoda deja aparecer su lado más dulce y peculiar. Sus palabras tienen a menudo un cierto aire poético, como si incluso las conversaciones cotidianas pudieran convertirse en pequeñas historias.",
        "Para ella, cuidar de los libros es casi una forma de magia. Y aunque nunca lo admitiría, sospecha que algunos de los ejemplares más antiguos de la librería quizá tengan sus propios secretos.",
        "Si algún día encuentras a Elowen leyendo en un rincón, procura no molestarla demasiado. Probablemente acaba de llegar a la mejor parte.",
      ],
    },
    en: {
      role: "The librarian",
      paragraphs: [
        "Elowen is the librarian, and probably the person who spends the most time among the shelves. Shy, kind and a little absent-minded, she knows every corner of the bookshop as if she had grown up among its books. If you need a particular volume, she is very likely to know exactly where it is… even if nobody remembers putting it there.",
        "She has a special fondness for old books, fairy tales, and those stories that seem to hide something between their pages. She can spend a whole afternoon tidying a section and then stop dead, because she has found a book she does not remember seeing before.",
        "Elowen does not usually talk much, especially to strangers, but once she feels at ease her sweeter, more peculiar side comes out. Her words often have a poetic air, as if even everyday conversation might turn into a little story.",
        "To her, looking after the books is almost a kind of magic. And though she would never admit it, she suspects some of the oldest volumes in the shop may have secrets of their own.",
        "If you ever find Elowen reading in a corner, try not to disturb her too much. She has probably just reached the best part.",
      ],
    },
  },
];

export function localizeCharacter(character: Character, lang: Lang) {
  const copy = character[lang];
  return {
    id: character.id,
    name: character.name,
    image: character.image,
    accent: character.accent,
    ...copy,
  };
}
