  const initJson = [
    {
      imgUrl: 'AAA-Url',
      descrText: 'AAA',
    },
    {
      imgUrl: 'CCC-Url',
      descrText: 'CCC',
    },
    {
      imgUrl: 'DDD-Url',
      descrText: 'DDD',
    },
    {
      imgUrl: 'BBB-Url',
      descrText: 'BBB',
    },
  ]

  /**
   * 按照给定key数组排列json数据
   * @param {String} keyName 键名
   * @param {Array} keyArray 给定排列顺序的键值数组
   * @param {Array} jsonData 需排列的数组
   */
  function jsonSortFormKey(keyName, keyArray, jsonData) {
    const targetArray = []
    keyArray.forEach((item1, index1) => {
      jsonData.forEach(item2 => {
        if (item1 === item2[keyName]) {
          targetArray[index1] = item2
        }
      })
    })
    return targetArray
  }

  function handleBenefitsListType() {
    const initData = JSON.parse(JSON.stringify(initJson))
    const keyName = 'descrText'
    let keyArray = ['DDD', 'CCC', 'BBB', 'AAA']
    const targetJson = jsonSortFormKey(keyName, keyArray, initData)
    return targetJson
  }

  console.log(handleBenefitsListType(), '排列后的json')