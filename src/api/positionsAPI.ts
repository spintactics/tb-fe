import { GetUserPositionsResponse } from "../types/UserPositions"
import { BASE_URL } from '../../config'
import { mockUserPositions } from "../mocks/userPositions.mock"

export const getUserPositions = async(): Promise<GetUserPositionsResponse> => {
  try {
    // const response = await fetch(`${BASE_URL}`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`)
    // }

    // const jsonResponse: GetUserPositionsResponse = await response.json()

    // return jsonResponse

    return {
      data: mockUserPositions
    }
  } catch(error) {
    console.log(`Error in getUserPositions: ${(error as Error).message}`)
    throw error
  }
}