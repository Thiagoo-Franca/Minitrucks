// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const handleOnClickHome = () => {
        navigate('/')
    }

    const handleOnClickSobre = () => {
        navigate('/sobre')
    }

    const handleOnClickContato = () => {
        navigate('/contato')
    }
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.logo} onClick={() => handleOnClickHome()}>Antoniel MiniTrucks</h1>
            </header>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <h2 onClick={() => handleOnClickHome()}>Início</h2>
                    </li>
                    <li>
                        <h2 onClick={() => handleOnClickSobre()}>Sobre</h2>
                    </li>
                    <li>
                        <h2 onClick={() => handleOnClickContato()}>Contato</h2>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header