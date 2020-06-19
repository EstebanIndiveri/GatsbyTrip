/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
exports.createPages= async ({graphql,actions})=>{
    const {createPage}=actions;
    const{data} = await graphql(`
    query{
        tours:allContentfulTour{
          edges{
            node{
              slug
            }
          }
        }
        posts:allContentfulPost{
          edges{
            node{
              slug
            }
          }
        }
      }
    `)
    data.tours.edges.forEach(({node})=>{
        createPage({
            path:`tours/${node.slug}`,
            component:path.resolve('./src/templates/tour-template.js'),
            context:{
                slug:node.slug
            }
        })
    })
    data.posts.edges.forEach(({node})=>{
      createPage({
        path:`blog/${node.slug}`,
        component:path.resolve('./src/templates/blog-template.js'),
        context:{
          slug:node.slug
        }
      })
    })
    //amount of posty
    const posts=data.posts.edges;
    //post per pages
    const postPerPage=5;
    //how many pages
    const numPages=Math.ceil(posts.length/postPerPage);

    const pages=Array.from({length:numPages}).forEach((_,i)=>{
      createPage({
        path:i===0?'/blogs':`/blogs/${i+1}`,
        component:path.resolve('./src/templates/blog-list-template.js'),
        context:{
          limit:postPerPage,
          skip:i*postPerPage,
          numPages,
          currentPage:i+1,
        }
      })
    })


}

// You can delete this file if you're not using it
