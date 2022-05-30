import { SlashCommand, CommandOptionType, SlashCreator, CommandContext } from 'slash-create';

export default class ChoiceCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'choice',
      description: 'Fidopが優柔不断なあなたを導きます。',
      options: [
        {
          type: CommandOptionType.STRING,
          name: '1',
          description: '1st option',
          required: true
        },
        {
          type: CommandOptionType.STRING,
          name: '2',
          description: '2nd option'
        },
        {
          type: CommandOptionType.STRING,
          name: '3',
          description: '3rd option'
        },
        {
          type: CommandOptionType.STRING,
          name: '4',
          description: '4th option'
        },
        {
          type: CommandOptionType.STRING,
          name: '5',
          description: '5th option'
        },
        {
          type: CommandOptionType.STRING,
          name: '6',
          description: '6th option'
        },
        {
          type: CommandOptionType.STRING,
          name: '7',
          description: '7th option'
        },
        {
          type: CommandOptionType.STRING,
          name: '8',
          description: '8th option'
        },
        {
          type: CommandOptionType.STRING,
          name: '9',
          description: '9th option'
        },
        {
          type: CommandOptionType.STRING,
          name: '10',
          description: '10th option'
        }
      ]
    });
  }

  async run(ctx: CommandContext) {
    const choices: Array<string> = Object.values(ctx.options);
    const getRandomInt = (max: number) => Math.floor(Math.random() * max);

    const mantenProb = getRandomInt(100);
    if (mantenProb < 3) {
      return '**漫天兄弟** に決定！';
    }

    const choiceIndex = getRandomInt(choices.length);
    return `**${choices[choiceIndex]}** に決定！`;
  }
}
