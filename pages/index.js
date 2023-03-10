import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Descubro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <img src="/logo.png" width="500"></img>
        <p className="description">
          Muy pronto a través de DESCUBRO podrás encontrar el mejor servicio de tasación de tu propiedad con profesionales calificados y certificados en todo Chile.
        </p>
      </main>

    </div>
  )
}
