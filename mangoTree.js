const {FruitTree,Fruit} = require ('./FruitTree')

class MangoTree extends FruitTree {
  constructor (name,startAge,startHeight,matured,healthStatus) {
      super (name,startAge,startHeight,matured,healthStatus)

    }
    
}

module.exports = MangoTree