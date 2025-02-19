import React from "react";
import caminhoes from '../assets/dataBase/caminhoes.js'
import styles from './Post.module.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { useRef } from "react";
import miniatura from "../pages/Miniatura.jsx";
import { useNavigate } from "react-router-dom";

const Post = () => {

    const navegador = useNavigate();

    const handleOnClick = (caminhao) => {
        console.log(caminhao);
        navegador(`/Miniaturas/${caminhao.id}`);
    }    

    return (
        <>
            
                <div className={styles.container}>
                    {caminhoes.map((caminhao) => (
                        <div key={caminhao.id} className={styles.post} onClick={() => handleOnClick(caminhao)}>
                            <h1>{caminhao.nome}</h1>
                            <img src={caminhao.img} alt={caminhao.nome} />
                            <p>{caminhao.descricao}</p>

                        </div>
                    ))}

                </div>

        </>
    )
}

export default Post;