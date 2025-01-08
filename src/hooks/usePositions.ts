import { useEffect, useState } from "react"
import { UserPosition } from "../types/UserPositions"
import { getUserPositions } from "../api/positionsAPI"

export const useUserPositions = (refreshKey?: number) => {
  const [userPositions, setUserPositions] = useState<UserPosition[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setUserPositions([])
    setLoading(true)
    setError('')

    const fetchUserPositions = async() => {

      try {
        const jsonResponse = await getUserPositions()
        setUserPositions(jsonResponse.data)
      } catch(error) {
        setError(`There was an error in GET userPositions: ${(error as Error).message}`)
      } finally {
        setLoading(false)
      } 
    }

    fetchUserPositions()
  }, [refreshKey])

  return { userPositions, loading, error }
}