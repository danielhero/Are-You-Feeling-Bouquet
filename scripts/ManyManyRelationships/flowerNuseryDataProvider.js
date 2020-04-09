let flowerNurseRelationship = []

export const useFlowerNurseRelationship = () => flowerNurseRelationship.slice()

export const getFlowerNurseRelationship = () => fetch("http://localhost:3000/flowerNursery")
    .then(res => res.json())
    .then (data => flowerNurseRelationship = data)