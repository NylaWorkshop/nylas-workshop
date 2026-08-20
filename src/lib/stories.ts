export type StoryLang = "es" | "en";

export type StoryLeaf = {
  kind: "text" | "plate";
  html: string;
};

export type StoryRecord = {
  slug: string;
  lang: StoryLang;
  title: string;
  kicker: string;
  blurb: string;
  cover?: string;
  order: number;
  pages: StoryLeaf[];
};

const files = import.meta.glob<string>("../stories/*.{es,en}.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw.trim() };

  const meta: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const sep = trimmed.indexOf(":");
    if (sep === -1) continue;
    const key = trimmed.slice(0, sep).trim();
    let value = trimmed.slice(sep + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }

  return { meta, body: match[2].trim() };
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInline(text: string) {
  const placeholders: string[] = [];
  const withImages = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_all, alt, src) => {
    const img = `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />`;
    placeholders.push(img);
    return `\u0000${placeholders.length - 1}\u0000`;
  });

  let html = escapeHtml(withImages);
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
  html = html.replace(/\u0000(\d+)\u0000/g, (_all, index) => placeholders[Number(index)] ?? "");
  return html;
}

function renderPage(markdown: string): StoryLeaf | null {
  const source = markdown.trim();
  if (!source) return null;

  const blocks = source.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  const htmlParts: string[] = [];

  for (const block of blocks) {
    const heading = block.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      htmlParts.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      continue;
    }

    const imageOnly = block.match(/^!\[([^\]]*)\]\(([^)]+)\)(?:\n+(.+))?$/s);
    if (imageOnly) {
      const caption = imageOnly[3]?.trim();
      htmlParts.push(
        `<figure>${renderInline(`![${imageOnly[1]}](${imageOnly[2]})`)}${
          caption ? `<figcaption>${renderInline(caption)}</figcaption>` : ""
        }</figure>`,
      );
      continue;
    }

    const lines = block.split(/\n/).map((line) => renderInline(line)).join("<br />");
    htmlParts.push(`<p>${lines}</p>`);
  }

  const html = htmlParts.join("");
  if (!html) return null;

  const withoutCaptions = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/g, "");
  const isPlate = /^<figure>[\s\S]*<\/figure>$/.test(html) && !/<p>|<h\d/.test(withoutCaptions);

  return { kind: isPlate ? "plate" : "text", html };
}

function parseFilename(path: string): { slug: string; lang: StoryLang } | null {
  const file = path.split("/").pop() ?? "";
  if (file.startsWith("_")) return null;
  const match = file.match(/^([a-z0-9-]+)\.(es|en)\.md$/i);
  if (!match) return null;
  return { slug: match[1], lang: match[2].toLowerCase() as StoryLang };
}

function loadStories(): StoryRecord[] {
  const stories: StoryRecord[] = [];

  for (const [path, raw] of Object.entries(files)) {
    const id = parseFilename(path);
    if (!id) continue;

    const { meta, body } = parseFrontmatter(raw);
    const pages = body
      .split(/<!--\s*(?:page|folio)\s*-->/i)
      .map((part) => renderPage(part))
      .filter((page): page is StoryLeaf => page !== null);

    stories.push({
      slug: id.slug,
      lang: id.lang,
      title: meta.title ?? id.slug,
      kicker: meta.kicker ?? "",
      blurb: meta.blurb ?? "",
      cover: meta.cover || undefined,
      order: Number(meta.order ?? 0) || 0,
      pages,
    });
  }

  return stories.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, a.lang));
}

const allStories = loadStories();

export function getStories(lang: string | undefined): StoryRecord[] {
  const resolved: StoryLang = lang === "en" ? "en" : "es";
  const localized = allStories.filter((story) => story.lang === resolved);
  if (localized.length) return localized;
  return allStories.filter((story) => story.lang === "es");
}
