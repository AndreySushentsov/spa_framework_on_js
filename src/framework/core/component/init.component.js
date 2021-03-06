import {wfm} from '../../tools/util'
import {renderComponent} from './render.component'

export function initComponents(bootstrap, components) {
  if(wfm.isUndefined(bootstrap)){
    throw new Error('bootstrap component is not defined')
  }
  [bootstrap, ...components].forEach(renderComponent)
}
