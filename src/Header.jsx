import styles from './Header.module.css' 
import webinar from './src/webinar.svg'

export const Header = () => {

return(
        <>
        <div className={styles.header}>

            <div className={styles.headerText}>
                <h1>Tus Webinars y cursos  en un sólo lugar</h1>
                <h2>Ventos Webinars pensado para empresas, consultores
                Asesores, emprendedores o maestros.
                </h2>
                <p>Escribe el código de tu Webinar</p>
                <input className={styles.inputCode} placeholder="Escribe tu código" type="text" name="" id="" />
                <button type='submit' className={styles.button}>Unirme</button>

                <hr />

                <a href="https://ventos.mx">Más información sobre Ventos MX</a>
            </div>

            <div className={styles.headerImg}>
                <img src={webinar} alt="" />
            </div>

        </div>
        </>
    );
}