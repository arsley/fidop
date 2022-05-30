import { SlashCommand, CommandOptionType, SlashCreator, CommandContext } from 'slash-create';

export default class ChoiceCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'choice',
      description: 'Fidopが優柔不断なあなたを導きます。',
      options: [
        {
          type: CommandOptionType.STRING,
          name: 'choices',
          description: '選択肢を 半角スペース または カンマ 区切りで入力',
          required: true
        }
      ]
    });
  }

  async run(ctx: CommandContext) {
    const choices: Array<string> = ctx.options.choices.split(/[\s,]+/);
    const getRandomInt = (max: number) => Math.floor(Math.random() * max);

    const mantenProb = getRandomInt(100);
    if (mantenProb < 3) {
      return '**漫天兄弟** に決定！';
    }

    const choiceIndex = getRandomInt(choices.length);
    return `**${choices[choiceIndex]}** に決定！`;
  }
}
