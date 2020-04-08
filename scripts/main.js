import { FlowerList } from "./flowerList.js";
import { getFlowers } from "./flowerDataProvider.js";


getFlowers()
    .then(FlowerList)