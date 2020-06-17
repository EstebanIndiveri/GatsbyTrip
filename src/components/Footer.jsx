import React from "react"
import styles from '../css/footer.module.css';
import links from '../constants/links';
import socialIcons from '../constants/socialIcons';
import {Link} from 'gatsby';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.links}>
            {links.map((item,index)=>(
                <Link key={index} to={item.path}>
                    {item.text}
                </Link>
            ))}
        </div>
        
            <div className={styles.icons}>
                {socialIcons.map((item,index)=>(
                    <a key={index} href={item.url} target="_black" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                ))}
            </div>
        <div className={styles.copyright}>
            copyright &copy; Developed by Esteban Indiveri {new Date().getFullYear()} all rights reserved
        </div>
    </footer>
  )
}

export default Footer
