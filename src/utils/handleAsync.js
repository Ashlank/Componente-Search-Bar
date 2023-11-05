import fetchData from '../api/fetchData'

export default async function handleAsync(query, setState, setLoading) {
  try {
    const data = await fetchData(query)
    setState(data)
    setLoading(false)
  } catch (error) {
    console.log(error)
  }
}