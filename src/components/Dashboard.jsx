import React from 'react'
import Post from './Post'
import styles from './Dashboard.module.css'

const Dashboard = () => {

    return (
        <>
            <h1 className={styles.titulo}>Conheça nossas miniaturas</h1>
            <Post />
        </>
    )
}

export default Dashboard