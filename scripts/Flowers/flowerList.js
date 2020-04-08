import { useFlowers } from "./flowerDataProvider.js";
import eachFlower from "./flowerHTML.js";

const contentTarget = document.querySelector(".flowerContainer")

const render = flowersToRender => {

    contentTarget.innerHTML = `
    
    <h1> CURRENT FLOWER TYPES </h1>
    <div class="flowerInfo">
        <ul class="listOfFlowers">
        </ul>
    </div>       
`
      
const flowerListTarget = document.querySelector(".listOfFlowers")
       
flowerListTarget.innerHTML = flowersToRender.map((
        flowerObject) => {
            return eachFlower(flowerObject)
            
        }
    ).join("")
}

export const FlowerList = () => {
    const flowers = useFlowers()
    
    render(flowers)
}