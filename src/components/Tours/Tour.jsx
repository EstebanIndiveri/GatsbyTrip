import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css';
import {FaMap} from 'react-icons/fa'

import {useStaticQuery,graphql} from 'gatsby';

const getImage=graphql`
query{
    file(relativePath:{eq:"defaultBcg.jpeg"}){
      childImageSharp{
       fluid{
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      } 
      }
    }
  }
`

const Tour = ({tour}) => {
    const data=useStaticQuery(getImage);
    const{name,price,country,days,slug,images}=tour;
    const img = data.file.childImageSharp.fluid;

    let mainImage;
    if(images){
        mainImage=images[0].fluid
    }else{
        mainImage=img
    }


    return ( 
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} className={styles.img} alt="single tour"/>
                <AniLink fade className={styles.link} to={`/tours/${slug}`}>
                    details
                </AniLink>
            </div>
            <div className={styles.footer}>
                <h3>{name}</h3>
                <div className={styles.info}>
                    <h4 className={styles.country}>
                        <FaMap className={styles.icon}/>
                        {country || 'default country'}
                    </h4>
                    <div className={styles.details}>
                        <h6>{days} days</h6>
                        <h6>
                            from ${price}
                        </h6>

                    </div>
                </div>
            </div>
        </article>
     );
}
 
export default Tour;
