const addHtml = document.querySelector('#addHtml')
const addCss = document.querySelector('#addCss')
const addJs = document.querySelector('#addJs')

addHtml.addEventListener('click', () => {
  const html = `
    <form action="">
        <input type="text" placeholder="改變標題">
        <input type="button" value="送出">
    </form>
    `
  document.querySelector('main').innerHTML = html
})

addCss.addEventListener('click', () => {
  const link = document.createElement('link')
  link.href = 'css/style.css'
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.media = 'screen,print'
  document.getElementsByTagName('head')[0].appendChild(link)
})

addJs.addEventListener('click', () => {
    addScript('js/newJs.js')
})

function addScript(src) {
  var s = document.createElement('script')
  s.setAttribute('src', src)
  document.body.appendChild(s)
}
