import React, { useEffect } from 'react'
import styles from '../pages/Sobre.module.css'
const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  
    return (
    <>
        <div className={styles.container}>
            <h1>Sobre Nós</h1>
            <p>Somos apaixonados por caminhões e miniaturas! Iniciamos no ramo das miniaturas de caminhão em 2021, primeiro como um hobby, e hoje trabalhamos sob encomenda. Buscamos aprimorar nosso trabalho a cada dia, sempre focados em oferecer miniaturas de alta qualidade e proporcionar uma experiência incrível para nossos clientes.</p>
        </div>
    </>
  )
}

export default Sobre