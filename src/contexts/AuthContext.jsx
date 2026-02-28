import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (e) {
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const userData = {
      id: Date.now(),
      email,
      name: email.split('@')[0],
      joinDate: new Date().toISOString(),
      loyaltyTier: 'silver',
      reservations: []
    }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    return userData
  }

  const register = (email, password, name) => {
    const userData = {
      id: Date.now(),
      email,
      name,
      joinDate: new Date().toISOString(),
      loyaltyTier: 'bronze',
      reservations: []
    }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    return userData
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateUser = (updatedData) => {
    const newUser = { ...user, ...updatedData }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
