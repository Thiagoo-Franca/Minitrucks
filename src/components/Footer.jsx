// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../components/Footer.module.css'
import logoYoutube from '../assets/images/logos/Youtube_logo.png'
import logoInstagram from '../assets/images/logos/logoInstagram.png'
import logoWhatsapp from '../assets/images/logos/logo-Whatsapp.png'

function Footer() {
  return (
    <>
        <footer className={styles.footer}>
            <nav>
                <h2>Nossos contatos</h2>
                <ul>
                    <li>
                        <a href="https://api.whatsapp.com/send/?phone=5573988485292&text&type=phone_number&app_absent=0" target='_blank'> <img className={styles.logoWhatsapp} src={logoWhatsapp} alt="" /> WhatsApp </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/minitrucksfranca/" target='_blank'> <img className={styles.logoInstagram} src={logoInstagram} alt="" /> Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@MiniaturasFran%C3%A7a" target='_blank'> <img className={styles.logoYoutube} src={logoYoutube} alt="" /> YouTube</a>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
  )
}

export default Footer