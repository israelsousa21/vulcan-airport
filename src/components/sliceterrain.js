//import { useState, useEffect } from 'react'
import styles from './Sliceterrain.module.css'

export default function Sliceterrain(props){

    if(props.status == 'cloud'){
        return (<div style={{'backgroundColor':`#41D3BD`}} className={`${styles.block} ${styles.bg_green}`}>☁️</div>)
    }else if(props.status == 'airport'){
        return (<div style={{'backgroundColor':`#41D3BD`}} className={`${styles.block} ${styles.bg_green}`}>✈️</div>)
    }else if(props.status == 'cloud-airport'){
        return (<div style={{'backgroundColor':`#21247F`}} className={`${styles.block} ${styles.bg_green}`}>🛬</div>)
    }else{
        return (<div style={{'backgroundColor':`#41D3BD`}} className={`${styles.block} ${styles.bg_green}`}></div>)
    }
    
}

// export default function Sliceterrain(props){
//     const [block, setBlock] = useState({'icon':'','bgcolor':'#41D3BD'})
    
//     useEffect(() => {
//         changeBlock(block)
//     }, [block])
    
//     function changeBlock(block){
//         setBlock({'icon':'','bgcolor':'#41D3BD'})
//         if(props.status == 'cloud'){
//             setBlock({'icon':'☁️','bgcolor':'#41D3BD'})
//         }else if(props.status == 'airport'){
//             setBlock({'icon':'✈️','bgcolor':'#41D3BD'})
//         }
//     }
//     return(
//         <div style={{'backgroundColor':`${block.bgcolor}`}} className={`${styles.block} ${styles.bg_green}`}>{block.icon}</div>
//     )
// }