import styles from './Terrain.module.css'
export default function Terrain(props) {
    return (
        <div className={styles.container}>
            <div className={styles.width}>Largura: <strong>{props.width}</strong></div>
            <div className={props.alert ? `${styles.map} ${styles.alert}` : `${styles.map}`}></div>
            <div className={styles.height}>Altura: <strong>{props.height}</strong></div>
        </div>
    )
}