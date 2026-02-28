import React, { createContext, useContext, useState, useEffect } from 'react'

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([])
  const [currentBooking, setCurrentBooking] = useState({
    roomId: null,
    checkIn: null,
    checkOut: null,
    guests: 1,
    specialRequests: ''
  })

  useEffect(() => {
    const storedBookings = localStorage.getItem('bookings')
    if (storedBookings) {
      try {
        setBookings(JSON.parse(storedBookings))
      } catch (e) {
        localStorage.removeItem('bookings')
      }
    }
  }, [])

  const updateCurrentBooking = (updates) => {
    setCurrentBooking(prev => ({ ...prev, ...updates }))
  }

  const createBooking = (userId) => {
    if (!currentBooking.roomId || !currentBooking.checkIn || !currentBooking.checkOut) {
      throw new Error('Missing required booking details')
    }

    const booking = {
      id: Date.now(),
      userId,
      roomId: currentBooking.roomId,
      checkIn: currentBooking.checkIn,
      checkOut: currentBooking.checkOut,
      guests: currentBooking.guests,
      specialRequests: currentBooking.specialRequests,
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    }

    setBookings(prev => {
      const newBookings = [...prev, booking]
      localStorage.setItem('bookings', JSON.stringify(newBookings))
      return newBookings
    })

    setCurrentBooking({
      roomId: null,
      checkIn: null,
      checkOut: null,
      guests: 1,
      specialRequests: ''
    })

    return booking
  }

  const cancelBooking = (bookingId) => {
    setBookings(prev => {
      const newBookings = prev.filter(b => b.id !== bookingId)
      localStorage.setItem('bookings', JSON.stringify(newBookings))
      return newBookings
    })
  }

  const getUserBookings = (userId) => {
    return bookings.filter(b => b.userId === userId)
  }

  const getBookingById = (bookingId) => {
    return bookings.find(b => b.id === bookingId)
  }

  return (
    <BookingContext.Provider value={{
      bookings,
      currentBooking,
      updateCurrentBooking,
      createBooking,
      cancelBooking,
      getUserBookings,
      getBookingById
    }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }
  return context
}
