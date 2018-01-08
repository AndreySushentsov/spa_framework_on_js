import {WFMComoponent} from 'framework'

class AboutPageComponent  extends WFMComoponent{
  constructor(config) {
    super(config)
  }
}

export const aboutPageComponent = new AboutPageComponent ({
  selector:'app-about-page',
  template:`
    <span>This is about page</span>
  `
})
