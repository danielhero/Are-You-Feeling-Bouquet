let distributors = []

export const useDistributors = () => distributors.slice()

export const getDistributors = () => fetch("http://localhost:3000/distributors")
    .then(res => res.json())
    .then (data => distributors = data)