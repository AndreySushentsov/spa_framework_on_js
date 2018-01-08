import {bootstrap, wfm} from 'framework'
import {appModule} from './app/app.module'
// import {wfm} from './framework/index'

wfm.delay(2000).then(()=>{
  bootstrap(appModule)
})
