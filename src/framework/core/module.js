// import {RoutingModule} from './routing/routing.module'
// import {wfm} from '../tools/util'
// import {renderComponent} from './component/render.component'
import {initComponents} from './component/init.component'
import {initRouting} from './routing/init.route'

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
