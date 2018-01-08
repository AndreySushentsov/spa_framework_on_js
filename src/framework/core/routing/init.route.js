import {wfm} from '../../tools/util'
import {RoutingModule} from './routing.module'

export function initRouting(routes) {
  if(wfm.isUndefined(routes)) return

  let routing = new RoutingModule(routes)
  routing.init()
}
