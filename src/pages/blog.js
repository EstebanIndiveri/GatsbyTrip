import React from 'react'
import {Link} from 'gatsby';
import Layout from '../components/Layout'

const Blog = () => {
    return (
        <Layout>
            hello pfrom blog page
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Blog;