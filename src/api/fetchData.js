const URL = 'https://api.tvmaze.com/search/shows?q='

const fetchData = (query) => {
  return fetch(`${URL}${query}`)
          .then(res => res.json())
          .catch(e => {
            throw new Error(e)
          })
}

export default fetchData