import React from 'react'
import Link from 'next/link'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer} > 
    <div>
    <span className={styles.copyrights} >All copy right reserved 2020</span>
    <br/>

    </div>
      <div className={styles.footerLinks}>
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>About</Link>
      <Link href={'/'}>Contact</Link>
      <Link href={'/'}>Blog</Link>
      </div>
    </div>
  )
}

export default Footer

