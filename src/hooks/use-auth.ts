import type { User } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Listen to the authentication state change
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is logged in
        setUser(currentUser)
      }
      else {
        // User is logged out
        setUser(null)
      }
      setLoading(false)
    })

    // Cleanup the listener on component unmount
    return () => unsubscribe()
  }, [])

  return { user, loading }
}

export default useAuth
