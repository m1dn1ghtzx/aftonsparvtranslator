function translateText() {
  const input = document.getElementById('input').value
  const subs = ['arp', 'orp', 'eep']
  const output = input.replace(/[aeiou]/gi, () => {
    return subs[Math.floor(Math.random() * subs.length)]
  })
  document.getElementById('output').innerText = output
}
