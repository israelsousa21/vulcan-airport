import { useState, useEffect } from 'react'
import Form from '../components/form'
import changeMap from '../services/changemap'
import Statusday from '../components/statusday'
import styles from '../styles/Index.module.css'
import Content from '../components/content'

export default function Home() {
  const [situations, setSituations]       = useState(null)
  const [balloonstatus, setBalloonstatus] = useState({
    mensage: 'Uma vulcão acaba de entrar em erupção, provocando uma nuvem de cinzas que se alastra impedindo a circulação aérea. O governo está muito preocupado e deseja saber quando uma nuvem de cinzas irá atingir todos os aeroportos do país.',
    alert: false
  })

  useEffect(() => {
    setBalloonstatus(balloonstatus)
  }, [balloonstatus])

  function fecthSituation(data) {
    setSituations(data)
  }

  function nextDay() {
    const { day, airportshited, situation } = situations
    const newSituation = changeMap(day, airportshited, situation)
    setSituations(newSituation)
  }

  function Teste(situations) {
    return situations.map((line, l) => {
      return (
        <div className={`row`}>
          <div key={l.toString()} className={`col-sm-12`}>
            {line.map((col, c) => (
              <>
                <span key={l + c.toString()}>{col}</span><br />
              </>
            ))
            }
          </div>
        </div>
      )
    })
  }

  function showTerrain(situations) {
    return (
      <div className={`col-sm-10`}>
        <div className={`row ${styles.terrain}`}>
          <div className={`col-sm-12`}>
            <div className={`${styles.topbar_section}`}>
              <div className={`${styles.topbar}`}>
                <h1>Situação da área</h1>
              </div>
            </div>
            <div className={`row`}>
              <div className={`col-sm-12 ${styles.map}`}>
                {/*Teste(situations.situation)*/}
                {<Content
                  situations={situations.situation}
                />}

              </div>
              <div className={`row ${styles.days_buttons_container}`}>
                <div className={`col-sm-12 ${styles.days_buttons_section}`}>
                  <button onClick={nextDay} className={`${styles.btn_iouu}`}>Próximo dia</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function showBalloon() {
    return (<div className={`${styles.balloon}`}>
      <p>{balloonstatus.mensage}</p>
    </div>
    )
  }

  function showBalloonAlert() {
    return (<div className={`${styles.balloon_alert}`}>
      <p>{balloonstatus.mensage}</p>
    </div>
    )
  }

  function showInstrucions() {
    return (
      <div className={`col-sm-10`}>
        <div className={`col-sm-12`}>
          <div className={`row ${styles.instructions_section}`}>
            <div className={`col-sm-12 ${styles.instructions}`}>
              <div className={`${styles.instructions_top}`}>
                <h1>Instruções para simulação</h1>
              </div>
              <div className={`${styles.box_instructions}`}>
                {!balloonstatus.alert ? showBalloon() : showBalloonAlert()}
                <div className={`${styles.agent}`}>
                  <img src="./agent.png" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function showForm() {
    return (
      <div className={`col-sm-2 ${styles.form}`}>
        <Form
          respData={fecthSituation}
          errorMensage={setBalloonstatus}
        />
      </div>
    )
  }

  function showStatusDay() {
    return (
      <div className={`col-sm-2 ${styles.form}`}>
        <Statusday
          situations={situations}
        />
      </div>
    )
  }

  return (
    <div className={`container-xxl ${styles.section}`}>
      <div className={styles.container}></div>
      <div className={`row ${styles.content}`}>
        {situations ? showStatusDay() : showForm()}
        {situations ? showTerrain(situations) : showInstrucions()}
      </div>
    </div>
  )
}
