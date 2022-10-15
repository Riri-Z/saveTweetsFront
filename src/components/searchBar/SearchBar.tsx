import React, { useState, useEffect  } from 'react';
import './search.css'
export const SearchBar: React.FC = (): any => {

  const [search, setSearch] = useState('type here')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  return (
    <form>
      <label>
        <input value={search} onChange={handleChange}   />
      </label>
    </form>
  )
}