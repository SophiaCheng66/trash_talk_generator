function trashTalkGenerator(job) {
  const task = {
    engineer: ['加個按鈕', '加薪功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單!', '很容易!', '很快!', '很正常!']
  const engineerIndex = Math.floor(Math.random() * task.engineer.length)
  const designerIndex = Math.floor(Math.random() * task.designer.length)
  const entrepreneurIndex = Math.floor(Math.random() * task.entrepreneur.length)
  const phraseIndex = Math.floor(Math.random() * phrase.length)


  if (job === 'engineer') {
    return (`身為工程師，${task.engineer[engineerIndex]}${phrase[phraseIndex]}`)

  }

  if (job === 'designer') {
    return (`身為設計師，${task.designer[designerIndex]}${phrase[phraseIndex]}`)
  }

  if (job === 'entrepreneur') {
    return (`身為創業家，${task.entrepreneur[entrepreneurIndex]}${phrase[phraseIndex]}`)
  }

  else {
    return ('You must select at least one person')
  }

}

// trashTalkGenerator()
//匯出函式
module.exports = trashTalkGenerator