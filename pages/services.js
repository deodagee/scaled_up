import { Inter } from 'next/font/google'
import Header from './components/header'
import Services from "./components/services"
import Footer from "./components/footer"
import styles from "../styles/components/services.module.css"

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
  <>
  <div className={styles.header_div}>
    <Header></Header>
    </div>
<div className={styles.services_div}>
    <Services></Services>
    </div>
    <div className={styles.footer_div}>
    <Footer></Footer>
    </div>
  </>
    )
}

export default Home;

