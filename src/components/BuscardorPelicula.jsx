import { FcSearch } from 'react-icons/fc'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BuscardorPelicula = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(search === '') return
    
    navigate(`/contenedorpelicula?search=${search}`)
    setSearch('') 
  }

  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)
  }

  return (
    <div className='contenedor-formulario'>
      <form className='contenedor-input' onSubmit={handleSubmit}>
        <input className='input' value={search} onChange={handleChange} type="text"  />
        <button className='boton'><FcSearch className='search'/></button>
      </form>
    </div>
  )
}

export default BuscardorPelicula