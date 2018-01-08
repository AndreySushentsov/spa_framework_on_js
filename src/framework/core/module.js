import {RoutingModule} from './routing/routing.module'
import {wfm} from '../tools/util'
import {renderComponent} from './component/render.component'

export class Module {
  constructor(config) {
    this.components = config.components,
    this.bootstrapComponent = config.bootstrap,
    this.routes = config.routes
  }

  start(){
    initComponents(this.bootstrapComponent, this.components);
    initRouting(this.routes)
  }
}

function initComponents(bootstrap, components) {
  if(wfm.isUndefined(bootstrap)){
    throw new Error('bootstrap component is not defined')
  }
  [bootstrap, ...components].forEach(renderComponent)
}

function initRouting(routes) {
  if(wfm.isUndefined(routes)) return

  let routing = new RoutingModule(routes)
  routing.init()
}
