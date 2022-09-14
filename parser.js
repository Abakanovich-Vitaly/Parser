window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  let contentNodes = []
  function recursyNodes(elem) {
    elem.childNodes.forEach((node) => {
      if (elem.nodeName.match(/^H\d/)) {
        const contentObject = {
          header: node.nodeName,
          content: node.textContent,
        }
        contentNodes.push(contentObject)
      } else recursyNodes(body)
    })
  }

  recursyNodes(body)
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contentNodes),
  })
  .then(response => response.json())
  .then(json => console.log(json))

})

