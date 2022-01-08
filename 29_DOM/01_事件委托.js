// 事件就是没有在子节点上设置监听器，而是在父节点上设置监听器，然后通过事件冒泡原理
// 一层一层的往上冒
const divEl = document.querySelector('.div')
const spanEl = document.querySelector('.span')

divEl.addEventListener('click', () => {
  console.log('被惦记了');
})