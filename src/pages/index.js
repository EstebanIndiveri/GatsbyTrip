import React, { Fragment } from "react"
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import {Link} from 'gatsby';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

const IndexPage = () => (
  <Fragment>
    <Layout>
      <SimpleHero>
      <Banner title="Continue Exploring" info="es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500">
        <Link to="/tours" className="btn-white">Explore tours</Link>
      </Banner>
      </SimpleHero>
    <About/>
    <Services/>

    </Layout>
  </Fragment>
)

export default IndexPage;
