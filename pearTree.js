const {FruitTree,Fruit} = require ('./FruitTree')



class PearTree extends FruitTree {
  constructor (name,startAge,startHeight,matured,healthStatus) {
      super (name,startAge,startHeight,matured,healthStatus)

    }

}



module.exports = PearTree