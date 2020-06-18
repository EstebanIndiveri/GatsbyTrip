import React from 'react';
import {useStaticQuery,graphql}from 'gatsby';

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

const Header = () => {
    const {
        site:{siteMetadata}
    }=useStaticQuery(getSitedata)
    
    console.log(siteMetadata);
    
    return ( 
        <div>
            <h1>Title:{siteMetadata.title}</h1>
            <h4>author:{siteMetadata.author}</h4>

        </div>
     );
}
 
export default Header;