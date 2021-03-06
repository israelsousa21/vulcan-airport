export default function handler(req, res) {
    if(req.method === 'POST'){
        creatingSituation(req, res)
    }else{
        res.status(405).send()
    }
  }

  function creatingSituation(req, res){
    var {width, height, clouds, airports} = JSON.parse(JSON.stringify(req.body));
    var status = ['sky','cloud','airport']
    let terrain = []

    for (let i = 0; i < width; i++) {
        terrain[i] = []
        for(let j = 0; j < height; j++){
            if((setRandonStatus(status, j, i) == 'cloud') && (clouds > 0) && (terrain[i][j] != 'airport')){
                terrain[i][j] = 'cloud'
                clouds--
            }else if((setRandonStatus(status, i, j) == 'airport') && (airports > 0) && (terrain[i][j] != 'cloud')){
                    terrain[i][j] = 'airport'
                    airports--
            }else{
                terrain[i][j] = 'sky'
            }
          }
       }
    
    res.status(200).json({day:1, airportshited: 0, mensage: 'o vulcão acabou de entrar em erupção! A fumaça está começando a se espalhar!', situation: terrain})
}
  
  function setRandonStatus(status, n, m){
    var x = 0
    if(m % 2 == 0){
        x = (Math.floor(Math.random()+1 / n * m))
    }else{
        x = Math.floor(Math.random() * (m - n + 1) / n) + m
    }
    return status[x]
  } 