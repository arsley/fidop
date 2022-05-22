const { SlashCommand, CommandOptionType } = require('slash-create');

module.exports = class HelloCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: 'hello-localized',
      nameLocalizations: {
        de: 'hallo',
        ja: 'こんにちは'
      },

      description: 'Says hello to you.',
      descriptionLocalizations: {
        de: 'Sagt hallo zu dir.',
        ja: 'あいさつをしてくれるよ。'
      },

      // It's important to note that since option localization is passed straight to Discord, the prop names are snake cased.
      options: [{
        type: CommandOptionType.STRING,

        name: 'food',
        name_localizations: {
          de: 'lebensmittel',
          ja: '食べ物'
        },

        description: 'What food do you like?',
        description_localizations: {
          de: 'Welches Essen magst du?',
          ja: '好きな食べ物は何?'
        }
      }]
    });

    this.filePath = __filename;
  }

  // If you use any package like i18next and need to asyncronously set localization, this function is ran right before syncing the command.
  async onLocaleUpdate() {
    // this.nameLocalizations['da'] = i18next.getFixedT('da')('command.hello.name');
    // this.ddescriptionLocalizationse['da'] = i18next.getFixedT('da')('command.hello.description');
  }

  async run(ctx) {
    // ctx.locale
    // ctx.guildLocale

    return ctx.options.food ? `You like ${ctx.options.food}? Nice!` : `Hello, ${ctx.user.username}!`;
  }
}
