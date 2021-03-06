import {wfm} from '../../tools/util'

export class Component {
  constructor(config) {
    this.template = config.template
    this.selector = config.selector
    this.el = null
  }

  render() {
    this.el = document.querySelector(this.selector)
    if(!this.el) throw new Error(`Component with selector ${this.selector} wasnt found`)
    this.el.innerHTML = compileTemplate(this.template, this.data)

    initEvents.call(this)
  }

};

function initEvents() {
  if(wfm.isUndefined(this.events)) return

  let events = this.events()

  Object.keys(events).forEach(key => {
    let listener = key.split(' ');

    this.el
      .querySelector(listener[1])
      .addEventListener(listener[0], this[events[key]].bind(this))
  })
}

function compileTemplate(template, data) {
    if(wfm.isUndefined(data)) return template

    let regex = /\{{(.*?)}}/g
    template = template.replace(regex, (str, d) =>{
      let key = d.trim()
      return data[key]
    })
  return template
}
