// import '../styles/globals.css'
import MainLayout from '../layouts/main-layout'
import "slick-carousel/slick/slick.css"; 

import '../styles/globals.scss'
function MyApp({ Component, pageProps }) {
  return <MainLayout><Component {...pageProps} /></MainLayout>
}

export default MyApp
