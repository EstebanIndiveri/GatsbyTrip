import React from 'react'
import{StaticQuery,graphql} from 'gatsby';

const getSitedata=graphql`
{
    site{
    siteMetadata{
      title
      description
      author
    }
  }
}
`;

const RegularHeader = () => {
    return ( 
        <StaticQuery query={getSitedata} render={(data)=>(

            <div>
                <h2>title: {data.site.siteMetadata.title}</h2>
                <h2>author: {data.site.siteMetadata.author}</h2>

            </div>
        )}/>
     );
}
 
export default RegularHeader;