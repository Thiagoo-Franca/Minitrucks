// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import caminhoes from "../assets/dataBase/caminhoes";
import styles from '../pages/Miniatura.module.css'

//objetivo: colocar mais fotos dos caminhoes agora
const Miniatura = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let { id } = useParams();
    const caminhao = caminhoes.find(c => c.id === Number(id));

    if (!caminhao) {
        return <h1>Caminhão não encontrado</h1>;
    }

    return (
        <div className={styles.container}>
            <h1>{caminhao.nome}</h1>
            
            <div className={styles.fotos}>
                <img src={caminhao.img} alt={caminhao.nome} />
                {(caminhao.img2) ? <img src={caminhao.img2} alt={caminhao.nome} /> : null}
                {(caminhao.img3) ? <img src={caminhao.img3} alt={caminhao.nome} /> : null}
            </div>


            <p className={styles.texto}>{caminhao.texto}</p>

            <div className={styles.comparacao}> 
                {(caminhao.img4) ? <h2>Original x Miniatura</h2> : null}
                {(caminhao.img4) ? <img src={caminhao.img4} alt={caminhao.nome} /> : null}
                {(caminhao.img5) ? <img src={caminhao.img5} alt={caminhao.nome} /> : null}
            </div>

            <div className={styles.fazerOrcamento}>
                <h1>
                    Faça seu orçamento
                </h1>
                <a href="https://api.whatsapp.com/send/?phone=5573988485292&text&type=phone_number&app_absent=0"><button type="button">Clique aqui!</button></a>
            </div>
        </div>
    );
};

export default Miniatura;
