import React, { Fragment } from "react"
import Layout from '../components/Layout'
import Banner from '../components/Banner';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';
import {graphql} from 'gatsby';
import FeaturedTours from '../components/Home/FeaturedTours';
import SEO from '../components/seo';
const IndexPage = ({data}) => (

  <Fragment>
    <Layout>
        <SEO title="Home" />
      <StyledHero home="true" >
        <Banner title="Continue Exploring" info="es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500">
        <AniLink fade to="/tours" className="btn-white">Explore tours</AniLink>
      </Banner>
      </StyledHero>
          <About/>
          <Services/>
          <FeaturedTours/>

    </Layout>
  </Fragment>
)

export default IndexPage;

export const query=graphql`
query{
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90 maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`