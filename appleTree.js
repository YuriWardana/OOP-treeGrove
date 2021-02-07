const {FruitTree,Fruit} = require ('./FruitTree')



class AppleTree extends FruitTree {
  constructor (name,startAge,startHeight,matured,healthStatus) {
      super (name,startAge,startHeight,matured,healthStatus)

    }

}



module.exports = AppleTree
