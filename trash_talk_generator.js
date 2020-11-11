function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


function generatorTrashTalk(job) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let options = {
    engineer: '',
    designer: '',
    entrepreneur: '',
    expression: '',
  }

  if (!job) {
    options.expression = '請選擇一個職業'
    return options
  }

  switch (job) {
    case 'engineer':
      options.expression = '工程師' + sample(task.engineer)
      options.engineer = 'true'
      break
    case 'designer':
      options.expression = '設計師' + sample(task.designer)
      options.designer = 'true'
      break
    case 'entrepreneur':
      options.expression = '創業家' + sample(task.entrepreneur)
      options.entrepreneur = 'true'
      break
  }
  options.expression += sample(phrase)

  return options
}
module.exports = generatorTrashTalk