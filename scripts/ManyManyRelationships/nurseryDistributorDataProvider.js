let nurseryDistributorRelationship = []

export const useNurseryDistributorRelationship = () => nurseryDistributorRelationship.slice()

export const getNurseryDistributorRelationship = () => fetch("http://localhost:3000/nurseryDistributor")
    .then(res => res.json())
    .then (data => nurseryDistributorRelationship = data)