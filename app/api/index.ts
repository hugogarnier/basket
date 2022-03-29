export const getGames = async (date: string, teamId: string) => {
  const response = await fetch(
    `${process.env.RAPIDAPI_URL}/games?season=2021-2022&league=2&date=${date}&team=${teamId}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': process.env.RAPIDAPI_HEADER as string,
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
      },
    },
  )
  const data = await response.json()

  return {
    data: data.response,
  }
}
