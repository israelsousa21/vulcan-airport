import Sliceterrain from './sliceterrain'

export default function Content(props) {
    function renderTerrain(situations) {
        return situations.map((line, l) => {
            return (
                <div className={`row`}>
                    <div key={l.toString()} className={`col-sm-12`}>
                        {line.map((col, c) => (
                            <Sliceterrain
                                key={l + c.toString()}
                                status={col}
                            />
                        ))
                        }
                    </div>
                </div>
            )
        })
    }

    return renderTerrain(props.situations)
    
}