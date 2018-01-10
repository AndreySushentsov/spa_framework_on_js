import {wfm} from '../../tools/util'

export class Directive {
  constructor(config) {
    this.selector = config.selector
    this.onInit = config.onInit
  }

  init(){
    let els = document.querySelector(this.selector)

    if (wfm.isUndefined(this.onInit) && wfm.isEmpty(els)) {
      els.forEach(e => {
        this.onInit(e)
      })
    }
  }
}
