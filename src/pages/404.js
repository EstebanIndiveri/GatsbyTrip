import React from "react"
import Layout from "../components/Layout"
import styles from '../css/error.module.css';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Banner from '../components/Banner';

const NotFoundPage = () => (
    <Layout>
    <header className={styles.error}>
        <Banner title="Oops it's a dead end">
            <AniLink to='/' className="btn-white">back to home page</AniLink>
        </Banner>
    </header>
    </Layout> 
)

export default NotFoundPage
