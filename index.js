const MangoTree = require('./mangoTree');
const AppleTree = require('./appleTree.js');
const PearTree = require('./pearTree.js');

class TreeGrove {
    constructor(){
        this.result = []
    }
    // get result(){
    //     return this.result
    // }
    
    inputTree(name,startAge,startHeight,matured,healthStatus){
        if (name === "MangoTree") {
            this.result.push(new MangoTree(name,startAge,startHeight,matured,healthStatus))
          } else if (name === "AppleTree") {
            this.result.push(new AppleTree(name,startAge,startHeight,matured,healthStatus))
          } else if (name === "PearTree") {
            this.result.push(new PearTree(name,startAge,startHeight,matured,healthStatus))
          }
        }

    nextYear(){
        let year = []
        for (let i = 0; i < this.result.length; i++) {
            this.result[i].grow()
            // console.log(this.result);
            // year.push();
        }
    }
    showAges(){
        let result = []
        for (let i = 0; i < this.result.length; i++) {
            if(this.result[i]._healthStatus === true){
                result.push(`name: ${this.result[i].name} ; age: ${this.result[i]._age}`)
            }
        }
         console.log(result);
       
     }
    showTrees(){
        let result = []
        for (let i = 0; i < this.result.length; i++) {
            if(this.result[i].healthStatus === true){
                result.push(`name: ${this.result[i].name } ; age: ${this.result[i]._age}`)
            }
        } 
        console.log(result);
        // return result
        
    }       

    showMatureTrees(){
        let result = []
        for (let i = 0; i < this.result.length; i++) {
            if(this.result[i].age >= this.result[i].matured && this.result[i].healthStatus === true){
                result.push(`name: ${this.result[i].name},age: ${this.result[i].age}`)
            }
        }
        console.log(result);
        
    }
    
    showDeadTrees(){
        let result = []
        for (let i = 0; i < this.result.length; i++) {
            if(this.result[i].healthStatus === false){
                result.push(`name: ${this.result[i].name},age: ${this.result[i].age}`)
            }
        } 
        console.log(result);
        
    }

  
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,false)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)


 


grove.nextYear()

// show trees ages
console.log(`>>> Tree Ages <<<` + "\n")
grove.showAges()

// show trees
console.log(`>>> List Tree ALive <<<` + "\n")
    grove.showTrees()

// show trees
console.log(`>>> List Mature Trees <<<` + "\n")
grove.showMatureTrees()

// show trees
console.log(`>>> List Dead Trees <<<` + "\n")
grove.showDeadTrees()
    


