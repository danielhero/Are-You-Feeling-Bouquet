import { useRetailers } from "./retailerDataProvider.js"
import eachRetailer from "./retailerHTML.js"
import { useDistributors } from "../Distributors/distributorDataProvider.js"
import { useNurseries } from "../Nurseries/nurseryDataProvider.js"
import { useNurseryDistributorRelationship } from "../ManyManyRelationships/nurseryDistributorDataProvider.js"
import { useFlowerNurseRelationship } from "../ManyManyRelationships/flowerNuseryDataProvider.js"
import { useFlowers } from "../Flowers/flowerDataProvider.js"





const contentTarget = document.querySelector(".retailerContainer")

const render = retailersToRender => {
    const distributors = useDistributors()
    const NDRelationship = useNurseryDistributorRelationship()
    const FNRelationship = useFlowerNurseRelationship()
    const nurseries = useNurseries()
    const flowers = useFlowers()

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

            const nurseryDistributorRelationship = NDRelationship.filter(NDRelationship => NDRelationship.distributorId === foundDistributor.id)

            const foundNurseries = nurseryDistributorRelationship.map(nd => {

                return nurseries.find(nursery => nd.nurseryId === nursery.id)
            })
            
                const  flowerNurseryRelationship = foundNurseries.map(nursery => {
                    
                    return FNRelationship.filter(FNRelationship => FNRelationship.nurseryId === nursery.id)
                }).flat()

                const foundFlowers = flowerNurseryRelationship.map(fn => {

                    return flowers.find(flower => fn.flowerId === flower.id)
                })

                         
            return eachRetailer(retailerObject, foundDistributor, foundNurseries, foundFlowers)
        
        }).join("")
}

export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}




















































      
