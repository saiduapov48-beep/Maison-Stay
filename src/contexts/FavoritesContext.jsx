import React, { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites))
      } catch (e) {
        localStorage.removeItem('favorites')
      }
    }
  }, [])

  const toggleFavorite = (roomId) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(roomId)
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const isFavorite = (roomId) => {
    return favorites.includes(roomId)
  }

  const addFavorite = (roomId) => {
    if (!favorites.includes(roomId)) {
      const newFavorites = [...favorites, roomId]
      setFavorites(newFavorites)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }
  }

  const removeFavorite = (roomId) => {
    const newFavorites = favorites.filter(id => id !== roomId)
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem('favorites')
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, addFavorite, removeFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider')
  }
  return context
}
