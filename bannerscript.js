var banner = document.createElement('div')
var body = document.getElementsByTagName('body')[0]

if (body) {
  body.insertBefore(banner, document.body.firstChild);
  banner.innerHTML = '<img src="https://cdn.tutsplus.com/net/uploads/2013/07/chrome-extensions-retina-preview.jpg"></img>'
}
