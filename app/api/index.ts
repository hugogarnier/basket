import { requestHeaders } from '~/utils/setHeaders'

export const getGames = async (date: string, teamId: string) => {
  const headers = requestHeaders
  const response = await fetch(
    `${process.env.RAPIDAPI_URL}/games?season=2021-2022&league=2&date=${date}&team=${teamId}`,
    {
      method: 'GET',
      headers: headers,
    },
  )
  const data = await response.json()

  return {
    data: data.response,
  }
}
