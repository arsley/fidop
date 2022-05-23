<div align="center">

<img src="/fidop.png" height="350">

Fidop (Fukai Iyashi Doubutsu Ohirune Package, /fài-dop/)

身内向け /command (スラッシュコマンド) 特化Discord Bot。
</div>

## Contribute

- Powered by [slash-create](https://github.com/Snazzah/slash-create)
  - TypeScript
- Deployed to Vercel
- Node.js (v16:arrow_up:)
- yarn

1. `commands` 配下に `commandName.ts` を作る。
2. [commands/](commands/) 配下の例を見るか [Documentation の Example Commands](https://slash-create.js.org/#/docs/main/latest/examples/command)を参考に実装する。
  - Docの方は `require` かつ型指定がないのでコピペには注意。

```ts
import { SlashCommand, CommandOptionType, SlashCreator, CommandContext } from 'slash-create';

// SlashCommand を継承して任意のコマンド用クラスを作る。
export default class HelloCommand extends SlashCommand {

  // コンストラクタでは creator: SlashCreator を引数に取り、super(creator, options) を呼ぶ。
  // ここでは主に 1)コマンドの名前 2)コマンドの詳細 3)引数... などを設定できる。
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'hello',
      description: 'Says hello to you.',
      options: [
        {
          type: CommandOptionType.STRING,
          name: 'food',
          description: 'What food do you like?'
        }
      ]
    });
  }

  // run関数内では ctx: CommandContext を引数に取り、実行するコマンドの実装を書く。
  async run(ctx: CommandContext) {
    return ctx.options.food
      ? `You like ${ctx.options.food}? Nice!`
      : `Hello, ${ctx.member?.displayName ?? ctx.user.username}!`;
  }
}
```
引用元 : https://github.com/Snazzah/slash-create-vercel/blob/master/commands/hello.ts

3. 実装できたら適当にブランチを切って push する。
  - `yarn build` でちゃんとコンパイル通るか確認できるよ。
  - `yarn lint:fix` で linter が勝手にフォーマットしてくれるよ。
4. PR出して master にマージすれば Vercel 側が勝手にDeployしてくれます(revisionもある)。

![sample.png](sample.png)

### Tips

`slash-up` が slash-create 周りのことをやってくれるコマンドです。

```
$ npx slash-up
slash-up <command>

Commands
  slash-up list                    View the list of commands on Discord
  slash-up view [command]          View a command on Discord
  slash-up local                   View the list of local commands
  slash-up sync                    Sync local commands to Discord
  slash-up init [template] [dest]  Clone a slash-create template into a new directory
  slash-up config [dir]            Create a config file in the specified directory
```

TokenとかAppIDとかは都度管理者に聞いてください。

## Check on local

:construction: WIP :construction:

(`npx slash-up sync` とかがそれっぽいけど実行ができないので模索中。)

## References

- Base Template Repo: https://github.com/Snazzah/slash-create-vercel
- slash-create Documentation: https://slash-create.js.org/#/docs/main/latest/general/welcome
