import styles from './Statusday.module.css'
export default function StatusDay(props) {
    return (
        <div className={styles.container}>
            <div className={`card ${styles.card}`}>
                <div className={`row g-2 p-3 ${styles.toptitle}`}>
                    <h1 className={`${styles.title}`}>Status da simulação</h1>
                </div>
                <div className={`row ${styles.box_agent_container}`}>
                    <div className={`col-sm-12 ${styles.box_agent_content}`}>
                        <div className={`${styles.balloon}`}>
                            <p>Hoje é o dia <strong>{props.situations.day}</strong>, {props.situations.mensage}</p>
                        </div>
                        <div className={`${styles.agent}`}>
                            <img src="./agent.png" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}