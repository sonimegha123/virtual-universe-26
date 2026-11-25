import { readFile } from "node:fs/promises";

const file = new URL("../notes/keynote-highlights.json", import.meta.url);
const { highlights } = JSON.parse(await readFile(file, "utf8"));

const byTopic = new Map();
for (const { topic, title } of highlights) {
  if (!byTopic.has(topic)) byTopic.set(topic, []);
  byTopic.get(topic).push(title);
}

for (const [topic, titles] of byTopic) {
  console.log(topic);
  for (const title of titles) console.log(`  - ${title}`);
  console.log();
}
