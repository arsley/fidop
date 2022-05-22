const { SlashCommand, ApplicationCommandPermissionType } = require('slash-create');

module.exports = class ExclusivityCommand extends SlashCommand {
  constructor(creator) {
    super(creator, {
      name: 'exclusivity',
      description: 'Only people who manage the guild can use this command.',
      // Whether to enable this command for everyone by default
      defaultPermission: false,
      // This will be an array of permission flag names from here: https://discord.dev/topics/permissions#permissions-bitwise-permission-flags
      requiredPermissions: ['MANAGE_GUILD']
    });

    this.filePath = __filename;
  }

  async run(ctx) {
    return 'You can manage this guild!';
  }
};
