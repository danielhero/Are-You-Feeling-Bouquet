const eachRetailer = (retailerObject, distributorObject) => {
    return  `
    
        <li>
            <p>${retailerObject.retailerName}:</p>
            <p>${retailerObject.address}, ${retailerObject.city}, ${retailerObject.state}</p> 
            <p>Current Distributor Partner is ${distributorObject.distributorName}</p>
        </li>

    `
}

export default eachRetailer