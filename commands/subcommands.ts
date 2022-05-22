const { SlashCommand, CommandOptionType } = require('slash-create');
module.exports = class SubcommandsCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: 'subcommands',
      description: 'Make a command with subcommands',
      options: [
        {
          type: CommandOptionType.SUB_COMMAND,
          name: 'one',
          description: 'Here is the first sub command',
          options: [
            {
              name: 'option_one',
              description: 'This is the first option',
              type: CommandOptionType.STRING,
              required: true
            }
          ]
        },
        {
          type: CommandOptionType.SUB_COMMAND,
          name: 'two',
          description: 'Here is the second sub command',
          options: [
            {
              name: 'option_two',
              description: 'This is the second option',
              type: CommandOptionType.STRING,
              required: true,
              choices: [
                {
                  name: 'option_two_one',
                  value: 'This is the first value for sub-command two option one'
                },
                {
                  name: 'option_two_two',
                  value: 'This is the second value for sub-command two option two'
                }
              ]
            }
          ]
        }
      ]
    });
    this.filePath = __filename;
  }
  async run(ctx) {
    // returns the subcommand, option, and option value
    const returnStringValues = [ctx.subcommands[0]];
    switch (
      ctx.subcommands[0] // Which subcommand was used?
    ) {
      case 'one':
        switch (
          Object.keys(ctx.options[ctx.subcommands[0]])[0] // Which options was used?
        ) {
          case 'option_one':
            returnStringValues.push('option_one');
            returnStringValues.push(ctx.options[ctx.subcommands[0]]['option_one']); // value of option
            break;
          // ...
        }
        break;
      case 'two':
        switch (Object.keys(ctx.options[ctx.subcommands[0]])[0]) {
          case 'option_two':
            returnStringValues.push('option_two');
            returnStringValues.push(ctx.options[ctx.subcommands[0]]['option_two']);
            break;
          // ...
        }
        break;
    }
    return `Subcommand: \`${returnStringValues[0]}\`\nOption: \`${returnStringValues[1]}\`\nValue of option: \`${returnStringValues[2]}\``;
  }
};
