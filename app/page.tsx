'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useBoundStore } from './store'

export default function Home() {
  const router = useRouter()
  const auth = useBoundStore(state => state.auth)

  useEffect(() => {
    if (auth) {
      return router.replace('/user')
    }
    return router.replace('/login')
  }, [])
  return null
}
