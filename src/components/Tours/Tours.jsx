import React from 'react'
import TourList from './TourList';
import {graphql,useStaticQuery} from 'gatsby';

const getTours=graphql`
query{
  tours:allContentfulTour{
  	edges{
      node{
        name
        price
        slug
        country
        days
        contentful_id
        images{
          fluid{
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

const Tours = () => {
    const {tours}=useStaticQuery(getTours);
    return ( 
       
            <TourList tours={tours}/>
       
     );
}
 
export default Tours;