import {WFMComoponent} from 'framework'

class NotFountPage  extends WFMComoponent{
  constructor(config) {
    super(config)
  }
}

export const notFoundPage = new NotFountPage ({
  selector:'app-not-found',
  template:`
  <div class="row">
    <div class="col s12 m6 offset-m3">
      <h1 style="color:#d32f2f; font-size:3rem"> 404 Sorry Page Not Found </h1>
    </div>
  </div>
  `
})
