import { FlowerList } from "./Flowers/flowerList.js";
import { getFlowers } from "./Flowers/flowerDataProvider.js";
import { RetailerList } from "./Retailers/retailerList.js";
import { getRetailers } from "./Retailers/retailerDataProvider.js";
import { getDistributors } from "./Distributors/distributorDataProvider.js";



getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributors)    
    .then(RetailerList)