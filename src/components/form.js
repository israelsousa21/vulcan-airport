import { useState, useEffect } from 'react'
import Terrain from '../components/terrain'
import styles from './Form.module.css'

export default function Form(props) {
    var [width, setWidth]               = useState(10)
    var [height, setHeight]             = useState(10)
    var [clouds, setQuantityClouds]     = useState(4)
    var [airports, setQuantityAirports] = useState(3)
    const [validArea, setValidArea]     = useState(false)
    var [textalert, setTextAlert]       = useState('')
    const [showclouds, setClouds]       = useState('')
    const [showairports, setAirports]   = useState('')

    useEffect(() => {
        //const validatearea = validateArea(width, height)
        const getStatus = validateForm(width, height, clouds, airports)
        if(getStatus == false){
            props.errorMensage({mensage:textalert, alert:true})
        }else{
            props.errorMensage({mensage:'Você está indo muito bem, as configurações estão Ok!', alert:false})
        }
    }, [width, height, clouds, airports, textalert])

    // function validateArea(width, height) {
    //     setTextAlert('')
    //     if (width < 10 || height < 10) {
    //         setValidArea(true)
    //         if (width < 10) {
    //             setTextAlert('A largura não pode ser menor do que 10 unidades')
    //         } else {
    //             setTextAlert('A altura não pode ser menor do que 10 unidades')
    //         }
    //         return false
    //     } else {
    //         setValidArea(false)
    //         if (width % height != 0) {
    //             setValidArea(true)
    //             setTextAlert('A largura e altura não formam uma área retangular')
    //             return false
    //         }
    //         return true
    //     }
    // }

    function validateForm(width, height, clouds, airports) {
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
        }

        let showClouds = ''
        let showAirports = ''
        setTextAlert('')
        if(clouds >= 4){
            for (var c = 1; c <= clouds; c++) {
                showClouds = showClouds + '☁️'
            }
        }else{
            setTextAlert('A quantida de nuvens deve ser de no mínimo 4')
            return false
        }
        
        if(airports >= 3){
            for (var a = 1; a <= airports; a++) {
                showAirports = showAirports + '✈️'
            }
        }else{
            setTextAlert('A quantida de aeorportos deve ser de no mínimo 3')
            return false
        }
        setClouds(showClouds)
        setAirports(showAirports)
        return true
    }

    async function sendForm() {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        var raw = JSON.stringify({width,height,clouds,airports})

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }

        fetch("http://localhost:3000/api/situations", requestOptions)
            .then(response => response.json())
            .then(function(data){
                //console.log(data.situation)
                props.respData(data, {happen:true, elapseddays: 1, totalsmoke: clouds, affectedairports: 0})
            })
            .catch(error => console.log('error', error))
    }

    return (
        <div className={styles.container}>
            <div className={`card ${styles.card}`}>
                <div className={`row g-2 p-3`}>
                    <h1 className={`${styles.title}`}>Dimensões do terreno</h1>
                    <div className="col-md-6">
                        <label className={`form-label ${styles.label}`}>Largura</label>
                        <input type="number" className="form-control form-control-sm" value={width} onChange={e => setWidth(+e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label className={`form-label ${styles.label}`}>Altura</label>
                        <input type="number" className="form-control form-control-sm" value={height} onChange={e => setHeight(+e.target.value)} />
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-sm-12">
                        <Terrain alert={validArea} 
                                 width={width} 
                                 height={height} 
                        />
                    </div>
                </div>

                <div className="row g-2 p-3">
                    <h1 className={`${styles.title}`}>Situação atual</h1>

                    <div className="col-md-6">
                        <label className={`form-label ${styles.label}`}>Nuvens</label>
                        <input type="number" className="form-control form-control-sm" value={clouds} onChange={e => setQuantityClouds(+e.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label className={`form-label ${styles.label}`}>Aeroportos</label>
                        <input type="number" className="form-control form-control-sm" value={airports} onChange={e => setQuantityAirports(+e.target.value)} />
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className={styles.show_icons}>{showclouds}</div>
                            <div className={styles.show_icons}>{showairports}</div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button className={`btn btn-info ${styles.btn_iouu}`} onClick={sendForm}>SIMULAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}