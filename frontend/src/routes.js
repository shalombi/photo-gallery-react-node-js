import { HomePage } from './pages/home-page.jsx'
import { GalleryApp } from './pages/gallery-app.jsx'

const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: 'element',
        component: <GalleryApp />,
        label: 'Elements'
    },
  

]

export default routes