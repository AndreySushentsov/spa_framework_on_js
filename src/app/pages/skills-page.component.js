import {WFMComoponent} from 'framework'

class SkillsPageComponent  extends WFMComoponent{
  constructor(config) {
    super(config)
  }

  events(){
    return {
      'click .collapsible' : 'onTabClick'
    }
  }

  onTabClick ({target}){
    if(!target.classList.contains('collapsible-header')) return

    this.el.querySelectorAll('.js-tab').forEach(e => e.classList.remove('active'))
    target.parentNode.classList.add('active')
  }
}

export const skillsPageComponent = new SkillsPageComponent ({
  selector:'app-skills-page',
  template:`
      <div class="row">
        <div class="col s12 m6 offset-m3">
          <ul class="collapsible popout collapsible-accordion">
            <li class="js-tab">
              <div class="collapsible-header"><i class="material-icons">subtitles</i>First</div>
              <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
            </li>
            <li class="js-tab">
              <div class="collapsible-header"><i class="material-icons">games</i>Second</div>
              <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
            </li>
            <li class="js-tab">
              <div class="collapsible-header"><i class="material-icons">library_books</i>Third</div>
              <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
            </li>
        </ul>
        </div>
      </div>
  `
})
