import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import styled from 'styled-components'
import {Button, CenteringContainer} from '../lib'



const Title = styled.h1`
  font-size: 50px;
  color: blue;
`

export default function Home() {
  return (
    <Layout>
      <Seo title="My title for My SEO" description="Ejemplo Seo" />
      <Title>Hello World!</Title>
      <h1>The value of customKey is: {process.env.customKey}</h1>

      <CenteringContainer>
        <Button type="button" onClick={()=>{}} style={{ marginTop: "15px" }} styleType={"primary"}>
          primary
        </Button>
      </CenteringContainer>
    </Layout >
  )
}
