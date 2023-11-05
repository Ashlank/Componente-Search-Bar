import { useState, useEffect } from 'react'
import handleAsync from '../utils/handleAsync'
import ResultsList from './ResultsList'
import Button from './Button'
import Input from './Input'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [inputResults, setInputResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(-1)

  const handleChange = (e) => {
    setSearch(e.currentTarget.value)
    setSelected(-1)
  }
  const handleClose = () => {
    setSearch('')
    setInputResults([])
    setSelected(-1)
  }
  const handleKeyDown = (e) => {
    if(e.key === 'ArrowDown' && selected < inputResults.length - 1 ) {
      setSelected(prev => prev + 1)
      return
    }
    else if(e.key === 'ArrowUp' && selected > 0) {
      setSelected(prev => prev - 1)
      return
    }
    else if(e.key === 'Enter' && selected >= 0) {
      window.open(inputResults[selected].show.url)
      return
    }
  }

  useEffect(() => {
    if(!search) {
      setLoading(true)
      setInputResults([])
      return
    }

    setLoading(true)

    const interval = setTimeout(() => {
      handleAsync(search, setInputResults, setLoading)
    }, 400)

    return () => {
      clearTimeout(interval)
    }
  }, [search])


  return (
    <div className='w-[500px]'>
      {/* Search Bar Container */}
      <div className='flex h-8 bg-white w-full rounded-2xl overflow-hidden'>
        <Input search={search} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <Button search={search} onClick={handleClose} />
      </div>
      {/* Results Container */}
      {
        search
          &&
        <div className='w-full bg-white mt-2'>
          {
            inputResults.length > 0
              ?
            <ResultsList list={inputResults} selected={selected}/>
              :
            <div className='indent-3'>{ loading ? "Cargando..." : "No se encontraron resultados"}</div>
          }
        </div>
      }
    </div>
  )
}
