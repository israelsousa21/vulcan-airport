import { useState, useEffect } from 'react'
import Terrain from '../components/terrain'
import styles from './Form.module.css'

export default function Form() {
    const [width, setWidth] = useState(10)
    const [height, setHeight] = useState(10)
    const [quantityClouds, setQuantityClouds] = useState(4)
    const [quantityAirports, setQuantityAirports] = useState(3)
    const [validArea, setValidArea] = useState(false)
    const [textalert, setTextAlert] = useState('')
    const [clouds, setClouds] = useState('')
    const [airports, setAirports] = useState('')

    function validateArea(width, height) {
        setTextAlert('')
        if (width < 10 || height < 10) {
            setValidArea(true)
            if (width < 10) {
                setTextAlert('A largura não pode ser menor do que 10 unidades')
            } else {
                setTextAlert('A altura não pode ser menor do que 10 unidades')
            }
            return false
        } else {
            setValidArea(false)
            if (width % height != 0) {
                setValidArea(true)
                setTextAlert('A largura e altura não formam uma área retangular')
                return false
            }
            return true
        }
    }

    function validateForm(validatearea, quantityClouds, quantityAirports) {
        let showClouds = ''
        let showAirports = ''
        for (var c = 1; c <= quantityClouds; c++) {
            showClouds = showClouds + '☁️'
        }
        for (var a = 1; a <= quantityAirports; a++) {
            showAirports = showAirports + '✈️'
        }
        setClouds(showClouds)
        setAirports(showAirports)
    }

    useEffect(() => {
        //const validatearea = 
        validateForm(validateArea(width, height), quantityClouds, quantityAirports)
    })

    return (
        <div className={styles.container}>
            <div className={`card ${styles.card}`}>
                {textalert != '' ? (<div class="alert alert-warning" role="alert">{textalert}</div>) : ('')}
                <div className="row g-2 p-3">
                    <h1 className={`${styles.title}`}>Dimensões do terreno</h1>
                    <div className="col-md-6">
                        <label className={`form-label ${styles.label}`}>Largura</label>
                        <input type="number" className="form-control form-control-sm" value={width} onChange={e => setWidth(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label className={`form-label ${styles.label}`}>Altura</label>
                        <input type="number" className="form-control form-control-sm" value={height} onChange={e => setHeight(e.target.value)} />
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-sm-12">
                        <Terrain alert={validArea} width={width} height={height} />
                    </div>
                </div>

                <div className="row g-2 p-3">
                    <h1 className={`${styles.title}`}>Situação atual</h1>

                    <div className="col-md-6">
                        <label className={`form-label ${styles.label}`}>Nuvens</label>
                        <input type="number" className="form-control form-control-sm" value={quantityClouds} onChange={e => setQuantityClouds(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label className={`form-label ${styles.label}`}>Aeroportos</label>
                        <input type="number" className="form-control form-control-sm" value={quantityAirports} onChange={e => setQuantityAirports(e.target.value)} />
                    </div>


                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className={styles.show_icons}>{clouds}</div>
                            <div className={styles.show_icons}>{airports}</div>
                            <button className="btn btn-primary btn-sm mt-2" disabled>VISUALIZAR SITUAÇÃO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}