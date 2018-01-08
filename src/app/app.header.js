import {WFMComoponent} from 'framework'

class AppHeader  extends WFMComoponent{
  constructor(config) {
    super(config)
  }
}

export const appHeader = new AppHeader ({
  selector:'app-header',
  template:`
    <nav>
      <div class="nav-wrapper teal darken-4">
        <a href="#" class="brand-logo">Junior Full-Stack Developer</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
    </nav>
  `
})
