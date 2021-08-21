import { useState } from 'react'
import styles from '../styles/Form.module.css'
import Terrain from '../components/terrain'

export default function Form() {
  const [width, setWidth]   = useState(10)
  const [height, setHeight] = useState(10)

  function handlerWidth(){
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.section_image}>
        <div className="card">
          <div className="row g-2 p-4">
            <h4>Dimensões do terreno</h4>
            <div className="col-md-6 mb-3">
              <label className="form-label">Largura</label>
              <input type="number" className="form-control form-control-sm" value={width} onChange={e => setWidth(e.target.value)} />
              <label className="form-label">Altura</label>
              <input type="number" className="form-control form-control-sm" value={height} onChange={e => setHeight(e.target.value)} />
            </div>
            <div className={`col-md-6 mb-3`}>
              <Terrain width={width} height={height} />
            </div>
          </div>
          <div className="row g-2 p-4">
            <h4>Dimensões do terreno</h4>
            <div className="col-md-6 mb-3">
              <label className="form-label">Quantidade de nuvens</label>
              <input type="number" className="form-control form-control-sm" />
              <label className="form-label">Quantidade de aeroportos</label>
              <input type="number" className="form-control form-control-sm" />
            </div>
            <div className="col-md-6 mb-3">
              
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-2">VISUALIZAR SITUAÇÃO</button>
      </div>
    </div>
  )
}
