
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import styles from './Series.module.css'
import GridAllContent from '../../components/GridAllContent/GridAllContent'

export default function Series() {
  return (
    <>
      <Header page="series"/>
      <div className={styles.peliculas}>
        <GridAllContent page="series"/>
      </div>
      <Footer />
    </>
  )
}
