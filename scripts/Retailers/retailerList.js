import { useRetailers } from "./retailerDataProvider.js"
import eachRetailer from "./retailerHTML.js"
import { useDistributors } from "../Distributors/distributorDataProvider.js"



const contentTarget = document.querySelector(".retailerContainer")

const render = retailersToRender => {
    const distributors = useDistributors()

    contentTarget.innerHTML =`
    <h1> CURRENT RETAILERS </h1>
    <div class="retailerInfo">
        <ul class="listOfRetailers">
        </ul>
    </div>      
    `

    const retailerListTarget = document.querySelector(".listOfRetailers")
    

    retailerListTarget.innerHTML = retailersToRender.map(
        (retailerObject) => {

            const foundDistributor = distributors.find(distributor => distributor.id === retailerObject.distributorId)

            return eachRetailer(retailerObject, foundDistributor)
        }  
    ).join("")
}

export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}




















































      
