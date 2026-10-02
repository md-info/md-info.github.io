# Journal notes

The `/blog/` landing page keeps its existing cards and filters. Opening a published entry shows the journal note workspace: folders, text search, Markdown reading pane, properties, and heading outline.

## Organizing notes

Continue adding Markdown files under `src/content/blog/`. Existing metadata remains supported. Optional `folder` metadata defines a nested explorer path:

```yaml
folder: "Coursework/COMP 347/Unit 1"
```

Without `folder`, the explorer groups entries by `category` and then `courseCode` when supplied. Folder names are display labels; URLs continue to use the content slug. Use normal Markdown links between notes, for example `[Network overview](/blog/network-overview/)`. Nested Markdown files are supported by the existing catch-all article route.

Use `##` and `###` headings for the automatic outline. Standard Markdown lists, links, blockquotes, images, code fences, and tables render in the reading pane. Search matches title, description, tags, and note text, and requires every entered word to match. Related notes appear when published notes share tags.

Only entries with `draft: false` are included in the explorer, search, and generated article pages. This is a static published reading interface, not a browser editor or an Obsidian sync connection. VaultPack exports are references unless their content is explicitly selected for publication; no export content was imported in this change.
