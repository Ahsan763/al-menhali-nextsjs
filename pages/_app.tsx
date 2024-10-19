import '../styles/css/ahsan.css'
import '../styles/globals.css'
import '../styles/css/header.css'
import '../styles/css/home.css'
import '../styles/css/about.css'
import '../styles/css/services.css'
import '../styles/css/lawyers.css'
import '../styles/css/contact.css'
import '../styles/css/blog.css'
import '../styles/css/footer.css'
import '../styles/css/mediaQueries.css'
import '../styles/css/ltr.css'
import '../styles/css/dark.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout'
import { useEffect } from 'react'
import Image from 'next/image'
export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    const mode = localStorage.getItem("mode");
      if(mode){
        document.documentElement.classList.add("dark");
      }
  },[])
  return(
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  ) 
}
