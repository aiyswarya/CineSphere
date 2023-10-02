import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryTerm="") => {

    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([])

    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies() {
          try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.json}`)
            }
    
            const fetchedMovies = await response.json()
            setLoading(false);
            setData(fetchedMovies.results)
          } catch (err) {
            console.log(err)
          }
        }
    
        fetchMovies()
      }, [url])

  return {data, loading}
}
