;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-check" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M960 896c0 35.2-28.8 64-64 64l-768 0c-35.2 0-64-28.8-64-64l0-768c0-35.2 28.8-64 64-64l768 0c35.2 0 64 28.8 64 64L960 896 960 896zM896 0l-768 0c-70.4 0-128 57.6-128 128l0 768c0 70.4 57.6 128 128 128l768 0c70.4 0 128-57.6 128-128l0-768C1024 57.6 966.4 0 896 0L896 0zM704 291.2c-16-9.6-35.2-3.2-44.8 12.8l-204.8 355.2-115.2-105.6c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l147.2 134.4c12.8 12.8 32 12.8 44.8 0 3.2-3.2 230.4-396.8 230.4-396.8C726.4 320 720 297.6 704 291.2L704 291.2z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-check1" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M853.3 76.1c52.1 0 94.6 42.4 94.6 94.6l0 682.7c0 52.1-42.4 94.6-94.6 94.6L170.7 948c-52.1 0-94.6-42.4-94.6-94.6L76.1 170.7c0-52.2 42.4-94.6 94.6-94.6L853.3 76.1M853.3 0 170.7 0C76.4 0 0 76.4 0 170.7l0 682.7C0 947.6 76.4 1024 170.7 1024l682.7 0c94.3 0 170.7-76.4 170.7-170.7L1024.1 170.7C1024 76.4 947.6 0 853.3 0L853.3 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
