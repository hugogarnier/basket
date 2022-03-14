import { Card } from '../Card'
import { formattedDate } from '~/utils/functions/formattedDate'
import { Schedule } from '~/utils/types'

export function CardList({ games }: { games: Schedule[] }) {
  const newGames = formattedDate(games)

  return (
    <>
      {newGames.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </>
  )
}
