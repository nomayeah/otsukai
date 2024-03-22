// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Atomic Designの区分を選択してください',
        choices: ['atoms', 'molecules', 'organisms', 'templates','pages']
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'コンポーネント名を入力してください'
      },
      {
        type: 'input',
        name: 'dir',
        message: '配置先ディレクトリ名を入力してください。（未指定の場合ディレクトリ直下に配置されます）',
      },
      {
        type: 'confirm',
        name: 'have_style',
        message: 'scssファイルを作成しますか？',
        initial: true
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { category, component_name, dir } = answers
        const path = `${category}/${ dir ? `${dir}/` : `` }${component_name}`
        const abs_path = category === "pages" ? `src/${path}` : `src/components/${path}`
        const tag = args.tag ? args.tag : 'div'
        const upperSingleCategory = category.charAt(0).toUpperCase() + category.slice(1, -1)
        return { ...answers, path, abs_path, tag,
          upperTag: tag.charAt(0).toUpperCase() + tag.slice(1),
          upperSingleCategory
        }
      })
  }
}