import {WFMCDirective} from 'framework'

class AppHoverDirective extends WFMCDirective {
  constructor(config) {
    super(config)
  }
}

export const appHoverDirective = new AppHoverDirective({
  selector:'[appHover]',
  onInit(e){
    console.log(e);
  }
})
