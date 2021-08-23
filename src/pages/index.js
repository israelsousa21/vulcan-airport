import { useState, useEffect } from 'react'
import Form from '../components/form'
import changeMap from '../services/changemap'
import Statusday from '../components/statusday'
import styles from '../styles/Index.module.css'
import Content from '../components/content'

export default function Home() {
  const [situations, setSituations]       = useState(null)
  const [status, setStatus]               = useState({})
  const [balloonstatus, setBalloonstatus] = useState({
  mensage: `Olá, eu sou Iouuvaldo, sou um autoridade de segurança em 
              aeroportos, e esta é uma simulação de catastrófe de erupção vulcanica.
              Uma vulcão acaba de entrar em erupção, provocando uma nuvem de cinzas que se 
              alastra impedindo a circulação aérea. O governo está muito preocupado e deseja 
              saber quando uma nuvem de cinzas irá atingir todos os aeroportos do país.
              Entre com os dados ao lado para gerar uma simulação.`,
    alert: false
  })

  useEffect(() => {
    setBalloonstatus(balloonstatus)
    //console.log('>>> '+balloonstatus.mensage)
  }, [balloonstatus])

  function fecthSituation(data, status) {
    setSituations(data)
    setStatus(status)
  }

  function nextDay() {
    const { day, airportshited, situation } = situations
    const statusSituations = changeMap(day, airportshited, situation)
    const newSituation = statusSituations[0]
    const newStatus    = statusSituations[1]
    setSituations(newSituation)
    console.log('Happen: '+newStatus.happen)
    setStatus(newStatus)
  }

  function nextButton(){
    return <button onClick={nextDay} className={`${styles.btn_iouu}`}>DIA SEGUINTE</button>
  }
  function finishButton(){
    return (
            <>
              <button onClick={restartSimulation} className={`${styles.btn_iouu}`}>FINALIZAR SIMULAÇÃO</button>
            </>
            )
  }
  function restartSimulation(){
    setSituations(null)
    setStatus({happen:true})
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
                {<Content
                  situations={situations.situation}
                />}

              </div>
              <div className={`row ${styles.days_buttons_container}`}>
                <div className={`col-sm-12 ${styles.days_buttons_section}`}>
                  {status.happen ? nextButton() : finishButton()}
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

  function showStatusDay(status) {
    return (
      <div className={`col-sm-2 ${styles.form}`}>
        <Statusday
          status={status}
          situations={situations}
        />
      </div>
    )
  }

  return (
    <div className={`container-xxl ${styles.section}`}>
      <div className={styles.container}></div>
      <div className={`row ${styles.content}`}>
        {situations ? showStatusDay(status) : showForm()}
        {situations ? showTerrain(situations) : showInstrucions()}
      </div>
    </div>
  )
}
