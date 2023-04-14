import * as Handlebars from 'handlebars';

import { MarkdownTheme } from '../../theme';

const storybookUrlReplacements: [RegExp, string][] = [
  [/\.mdx/, '--docs'],
  [/\.md/, '--docs'],
  [/[_\/\.]/g, '-'],
];

export default function (theme: MarkdownTheme) {
  Handlebars.registerHelper('relativeURL', function (url: string) {
    if (theme.useStorybook) {
      const transformedUrl = storybookUrlReplacements.reduce(
        (acc, [regex, replacement]) => {
          return acc.replace(regex, replacement);
        },
        url,
      );

      return '/docs/' + theme.publicPath + transformedUrl;
    }

    return url
      ? theme.publicPath
        ? theme.publicPath + url
        : theme.getRelativeUrl(url)
      : url;
  });
}
