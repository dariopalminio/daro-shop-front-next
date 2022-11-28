import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import Image from 'next/image'




export default function Home() {
  return (
    <Layout>
      <Seo title="My title for My SEO" description="Ejemplo Seo" />
      <h1>Hello World!</h1>
      <h1>The value of customKey is: {process.env.customKey}</h1>



    </Layout >
  )
}
