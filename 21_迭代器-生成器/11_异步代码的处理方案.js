function requestData(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params)
    }, 2000);
  })
}

function* getData() {
  const res1 = yield requestData('aaa')
  const res2 = yield requestData(res1 + 'bbb')
  const res3 = yield requestData(res2 + 'ccc')

  console.log(res3); // aaabbbccc

}

const generator = getData()

// 手动写
generator.next().value.then((res) => {
  generator.next(res).value.then((res) => {
    generator.next(res).value.then(res => {
      generator.next(res)
    })
  })
})

// 封装
function execGenerator(generatorFn) {
  const generator = generatorFn()

  function execG(res) {
    const result = generator.next(res)
    if (result.done) {
      return result.value
    }

    result.value.then(res => {
      execG(res)
    })
  }

  execG()
}

execGenerator(getData)

// async / await

// async function getData() {
//   const res1 = await requestData('aaa')
//   const res2 = await requestData(res1 + 'bbb')
//   const res3 = await requestData(res2 + 'ccc')
//   console.log(res3);

// }

// getData()