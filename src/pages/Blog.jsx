import React from 'react'
import BlogView from '../components/blog/BlogView'
import Footer from '../components/footer/Footer'
import Navbar from '../components/nav/Navbar'
import Addons from './Addons'
import Blogimage from './Blogimage'

const Blog = () => {
    return (
        <div>
            <Navbar />
            <BlogView />
            <Blogimage />

            <Footer />

        </div>
    )
}

export default Blog
