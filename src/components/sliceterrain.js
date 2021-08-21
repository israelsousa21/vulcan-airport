import { useState, useEffect } from 'react'
import styles from './Sliceterrain.module.css'

export default function Sliceterrain(props){
    const [block, setBlock] = useState({'icon':'','bgcolor':'#41D3BD'})
    
    useEffect(() => {
        changeBlock(block)
    })
    
    function changeBlock(block){
        setBlock({'icon':'','bgcolor':'#41D3BD'})
        if(props.status == 'cloud'){
            setBlock({'icon':'☁️','bgcolor':'#41D3BD'})
        }else if(props.status == 'airport'){
            setBlock({'icon':'✈️','bgcolor':'#41D3BD'})
        }
    }
    return(
        <div style={{'backgroundColor':`${block.bgcolor}`}} className={`${styles.block} ${styles.bg_green}`}>{block.icon}</div>
    )
}