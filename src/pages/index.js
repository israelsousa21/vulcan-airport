import { useState, useEffect } from 'react'
import Form from '../components/form'
import styles from '../styles/Index.module.css'
import Sliceterrain from '../components/sliceterrain'

export default function Home() {
  const [situations, setSituations] = useState([])
  
  useEffect(()=>{
    setSituations(createSituation(19,19, 4, 3))
  })
  
  function createSituation(width, height, clouds, airports){
    var x = []

    for (var wi = 1; wi <=width; wi++) {
      x.push('cloud')
      var p = []
      for(var hi = 1; hi <= height; hi++){
        p.push(x)
      }
   }
    return p
  }

  return (
    <div className={`container-xxl ${styles.section}`}>
      <div className={styles.container}></div>
      <div className={`row ${styles.content}`}>
        <div className={`col-sm-2 ${styles.form}`}>
          <Form />
        </div>
        <div className={`col-sm-10`}>
          <div className={`row ${styles.terrain}`}>
            <div className={`col-sm-12`}>
              <h1>Situação da área</h1>
              <div className={`row`}>
                <div className={`col-sm-12 ${styles.map}`}>
                  {situations.map(line => (
                    <div className={`row`}>
                      <div className={`col-sm-12`}>
                        {line.map(col => (
                          <Sliceterrain status={col} />
                        ))}
                      </div>
                    </div>
                  ))
                  }
                </div>
              </div>
            </div>
          </div>

          {/*<div className={`row ${styles.status}`}>
              [Status]
              </div>*/
          }
        </div>
      </div>
    </div>
  )
}
