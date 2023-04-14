# typedoc-plugin-markdown

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that renders TypeScript API documentation as MDX 2 files. (By default, TypeDoc will render API documentation as a webpage, e.g. HTML files.)
The code is an adoption from the original [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown) extended to produce MDX 2 files for Storybook.

## What does it do?

The plugin replaces the default HTML theme with a built-in Markdown theme and exposes some additional options.

Useful if documentation is required to be included in project README files, Wikis and static site generators.

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-markdown
```

## Usage

Usage is the same as documented at [TypeDoc](https://typedoc.org/guides/installation/#command-line-interface).

```bash
typedoc --plugin typedoc-plugin-markdown --out docs src/index.ts
```

Note that the plugin switches the default HTML theme to the built-in Markdown theme by default. If you want to use the default HTML theme instead, use `--plugin none` to turn the plugin off.

## Options

This plugin provides additional options beyond the normal options that are [provided by TypeDoc](https://typedoc.org/guides/options/), which are listed below. Note that any vanilla TypeDoc options that customize the HTML theme will be ignored.

- `--entryDocument<string>`<br>
  The file name of the entry document. Defaults to `README.md`.
- `--hideBreadcrumbs<boolean>`<br>
  Do not render breadcrumbs in template header. Defaults to `false`.
- `--hideInPageTOC<boolean>`<br>
  Do not render in-page table of contents items. Defaults to `false`.
- `--hideMembersSymbol<boolean>`<br>
  Do not add special symbols for class members. Defaults to `false`.
- `--publicPath<string>`<br>
  Specify the base path for all urls. If undefined urls will be relative. Defaults to `.`.
- `--namedAnchors<boolean>`<br>
  Use HTML named anchors tags for implementations that do not assign header ids. Defaults to `false`.
- `--preserveAnchorCasing<boolean>`<br>
  Preserve anchor id casing for implementations where original case is desirable. Defaults to `false`.

## License

[MIT](https://github.com/ElektraInitiative/typedoc-plugin-markdown/blob/master/LICENSE)
