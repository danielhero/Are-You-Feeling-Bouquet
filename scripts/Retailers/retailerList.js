import { useRetailers } from "./retailerDataProvider.js"
import eachRetailer from "./retailerHTML.js"


const contentTarget = document.querySelector(".retailerContainer")

const render = retailersToRender => {

    contentTarget.innerHTML = `
    
    <h1> CURRENT RETAILERS </h1>
    <div class="retailerInfo">
        <ul class="listOfRetailers">
        </ul>
    </div>       
`
      
const retailerListTarget = document.querySelector(".listOfRetailers")
       
retailerListTarget.innerHTML = retailersToRender.map((
        retailerObject) => {
            return eachRetailer(retailerObject)
            
        }
    ).join("")
}

export const RetailerList = () => {
    const retailers = useRetailers()
    
    render(retailers)
}