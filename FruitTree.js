class FruitTree {
    constructor (name,startAge,startHeight,matured,healthStatus) {
      this._name = name 
      this._age = startAge
      this._height = startHeight
      this._matured = matured
      this._healthStatus = healthStatus
      this._year = 0
      this._witherAge = this.witherAge()
    }
    
    get name(){
      return this._name
    }
    get age () {
      return this._age
    }

    get height () {
      return this._height
    }
  
    get matured(){
      return this._matured
    }

    get healthStatus(){
      return this._healthStatus
    }
  
    get wither (){
      return this._wither
    }

    get year(){
      return this._year
    }
  
    witherAge(){
      return this._age + Math.floor(Math.random()*10)
    }
    grow() {
      this._age += 1
      this._year +=1

      if (this._age < this._witherAge) {
        this._height += Math.random()*5
      }

      if (this._age === this._witherAge) {
        this._healthStatus === false
      }
      
    }
  
}
     module.exports = { FruitTree }
    
     