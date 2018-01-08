import {WFMComoponent} from 'framework'

class HomePageComponent  extends WFMComoponent{
  constructor(config) {
    super(config)
  }

}

export const homePageComponent = new HomePageComponent ({
  selector:'app-home-page',
  template:`
      <div class="row">
        <div class="col s12 m6 offset-m3">
          <div class="card">
            <div class="card-image">
              <img src="http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
  `
})
