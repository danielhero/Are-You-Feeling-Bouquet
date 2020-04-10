const eachRetailer = (retailerObject, distributorObject, nurseryArray, flowerArray) => {
    
    return  `
    
        <li>
            <p>${retailerObject.retailerName}:</p>
            <p>${retailerObject.address}, ${retailerObject.city}, ${retailerObject.state}</p> 
            <p>Current Distributor Partner is ${distributorObject.distributorName}</p>
            <p>Distributor is currently being supplied by the following:</p>
                <ul class="nurseryList">
                   ${nurseryArray.map(nursery => `<li>${nursery.nurseryName}</li>`).join("")}
                </ul>
            <p>The Nurseries are growing the following flowers:</p>
                <ul class="flowerList">
                ${flowerArray.map(flower => `<li>${flower.color} ${flower.commonName}</li>`).join("")}
                </ul>
        </li>

    `
}

export default eachRetailer