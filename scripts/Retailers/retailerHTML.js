const eachRetailer = (retailerObject) => {
    return  `
    <li>${retailerObject.retailerName}: ${retailerObject.address}, ${retailerObject.city}, ${retailerObject.state}</li>
    `
}

export default eachRetailer