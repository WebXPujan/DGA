// import '../styles/globals.css'
import MainLayout from '../layouts/main-layout'
import AuthLayout from '../layouts/auth-layout'


import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import '../styles/globals.scss'

const layouts = {
  Layout1: MainLayout,
  Layout2: AuthLayout,
};

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());  

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts.Layout1;
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
