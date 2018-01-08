import {homePageComponent} from './pages/home-page.component'
import {aboutPageComponent} from './pages/about-page.component'
import {notFoundPage} from './app.404.component'
import {blogPageComponent} from './pages/blog-page.component'
import {skillsPageComponent} from './pages/skills-page.component'

export const appRoutes = [
  {
    path:'',
    component: homePageComponent
  },
  {
    path:'about',
    component: aboutPageComponent
  },
  {
    path:'blog',
    component: blogPageComponent
  },
  {
    path:'skills',
    component: skillsPageComponent
  },
  {
    path:'**',
    component: notFoundPage
  }
]
