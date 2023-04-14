import { Application, ParameterType } from 'typedoc';
import { MarkdownThemeOptionsReader } from './options-reader';
import { MarkdownTheme } from './theme';

export function load(app: Application) {
  app.renderer.defineTheme('markdown', MarkdownTheme);
  app.options.addReader(new MarkdownThemeOptionsReader());

  app.options.addDeclaration({
    help: '[Markdown Plugin] Do not render page title.',
    name: 'hidePageTitle',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Do not render breadcrumbs in template.',
    name: 'hideBreadcrumbs',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Specifies the base path that all links to be served from. If omitted all urls will be relative.',
    name: 'publicPath',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Use HTML named anchors as fragment identifiers for engines that do not automatically assign header ids. Should be set for Bitbucket Server docs.',
    name: 'namedAnchors',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Output all reflections into seperate output files.',
    name: 'allReflectionsHaveOwnDocument',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Separator used to format filenames.',
    name: 'filenameSeparator',
    type: ParameterType.String,
    defaultValue: '.',
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] The file name of the entry document.',
    name: 'entryDocument',
    type: ParameterType.String,
    defaultValue: 'README.md',
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Do not render in-page table of contents items.',
    name: 'hideInPageTOC',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Customise the index page title.',
    name: 'indexTitle',
    type: ParameterType.String,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Do not add special symbols for class members.',
    name: 'hideMembersSymbol',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Preserve anchor casing when generating links.',
    name: 'preserveAnchorCasing',
    type: ParameterType.Boolean,
    defaultValue: false,
  });

  app.options.addDeclaration({
    help: '[Markdown Plugin] Specify the Type Declaration Render Style',
    name: 'objectLiteralTypeDeclarationStyle',
    type: ParameterType.String,
    defaultValue: 'table',
    validate: (x) => {
      const availableValues = ['table', 'list'];
      if (!availableValues.includes(x)) {
        throw new Error(
          `Wrong value for objectLiteralTypeDeclarationStyle, the expected value is one of ${availableValues}`,
        );
      }
    },
  });
}
export { MarkdownTheme };
