document.addEventListener('click', event => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
})

document.addEventListener('click', event => {
  if (event.target.dataset.type === 'changes') {
    const id = event.target.dataset.id
    const text = event.target.closest('li').querySelector("p").innerText
    const newText = prompt(text)
    update(id, newText)
  }
})

async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function update(id, title) {
  await fetch(`/${id}`, {
    method: 'PUT',
    headers: {
          "Content-type": "application/json"
    },
    body: JSON.stringify({
      title
  })
  })
}