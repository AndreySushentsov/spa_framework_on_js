import {wfm} from '../../tools/util'
import {router} from './routes'
import {renderComponent} from '../component/render.component'
export class RoutingModule {
  constructor(routes) {
    this.routes = routes
  }

  init(){
    window.addEventListener('hashchange', renderRoute.bind(this));
    renderRoute.call(this);
  }

}

function renderRoute() {
  let url = router.getUrl()
  let route = this.routes.find(r => r.path === url)

  if(wfm.isUndefined(route)){

    route = this.routes.find(r => r.path === '**')
  }

  document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
  renderComponent(route.component)
}
