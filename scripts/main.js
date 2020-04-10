import { FlowerList } from "./Flowers/flowerList.js";
import { getFlowers } from "./Flowers/flowerDataProvider.js";
import { RetailerList } from "./Retailers/retailerList.js";
import { getRetailers } from "./Retailers/retailerDataProvider.js";
import { getDistributors } from "./Distributors/distributorDataProvider.js";
import { getNurseries } from "./Nurseries/nurseryDataProvider.js";
import { getFlowerNurseRelationship } from "./ManyManyRelationships/flowerNuseryDataProvider.js";
import { getNurseryDistributorRelationship } from "./ManyManyRelationships/nurseryDistributorDataProvider.js";


getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getFlowers)
    .then(getNurseryDistributorRelationship) 
    .then(getFlowerNurseRelationship)   
    .then(RetailerList)