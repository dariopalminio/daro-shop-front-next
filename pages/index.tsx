import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'




export default function Home() {
  return (
    <Layout>
      <Seo title="My title for My SEO" description="My description for My SEO" />
      <h1>Hello World!</h1>
      <p>The value of customKey is: {process.env.customKey}</p>
      
    </Layout >
  )
}
