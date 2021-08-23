export default function changeMap(actualDay, airportsHited, situation) {
    //console.log('#CHANGE MAP#')
    var newStatusSituation = situation
    let hasAirport = false
    let clouds = []
    let totalAirportsHited = 0
    let totalsmoke = 0
    let happen = true
    if(parseInt(airportsHited) > 0){
      totalAirportsHited = parseInt(airportsHited)
    }
    let totalAirports = 0

    situation.forEach((row, x) => {
      row.forEach((col, y) => {

        if (col == 'cloud' || col == 'cloud-airport') {
          clouds.push([x, y])
        }
        if (col == 'airport') {
          hasAirport = true
        }

        if(col == 'airport' || col == 'cloud-airport'){
          totalAirports++
        }

        if(col == 'cloud-airport'){
          totalAirportsHited++
        }

      })
    })

    if (!hasAirport) {
      return false
    }

    clouds.forEach((cloud, i) => {
      let [row, col] = cloud
      let adjacentSquare = [
        getBottomCell(row, col, situation),
        getTopCell(row, col, situation),
        getRightCell(row, col, situation),
        getLeftCell(row, col, situation)
      ]
      
      adjacentSquare.forEach(cell => {
        if (cell) {
          let [row, col, value] = cell
          switch (value) {
            case 'sky':
              newStatusSituation[row][col] = 'cloud'
              break
            case 'airport':
              newStatusSituation[row][col] = 'cloud-airport'
              totalAirportsHited++
              break
            case 'cloud-airport':
              break
          }
        }
      })
    })

    newStatusSituation.forEach((row, x) => {
      row.forEach((col, y) => {
        if (col == 'cloud' || col == 'cloud-airport') {
          totalsmoke++
        }
      })
    })

    let day = actualDay + 1
    let mensage = ' a fumaça do vulcão está avançando!'
    if(totalAirportsHited == 1){
      mensage = totalAirportsHited+' aeroporto foi atigido pela fumaça!'
    }
    if(totalAirportsHited > 1){ 
      if(totalAirports != totalAirportsHited){
        mensage = totalAirportsHited+' aeroportos foram atigidos pela fumaça!'
      }else{
        mensage = 'Todos os aeroportos foram atingidos pela fumaça!'
        happen = false
      }
    }
    
    return [{ day, airportsHited: totalAirportsHited, mensage, situation: newStatusSituation },
            {happen, elapseddays: day, totalsmoke, affectedairports: totalAirportsHited}
           ]

    function getTopCell(row, column, grid) {
      let row_copy = grid[row - 1]
      if (row_copy) {
        return [row - 1, column, row_copy[column]]
      }
      return grid
    }
    function getBottomCell(row, column, grid) {
      let row_copy = grid[row + 1]
      if (row_copy) {
        return [row + 1, column, row_copy[column]]
      }
      return grid
    }
    function getLeftCell(row, column, grid) {
      let cell = grid[row][column - 1]
      if (cell) {
        return [row, column - 1, cell]
      }
      return grid
    }
    function getRightCell(row, column, grid) {
      let cell = grid[row][column + 1]
      if (cell) {
        return [row, column + 1, cell]
      }
      return grid
    }
  }