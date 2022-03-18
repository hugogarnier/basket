import { Card } from '../Card'
import { Schedule } from '~/utils/types'

export function CardList({ games }: { games: Schedule[] }) {
  return (
    <>
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </>
  )
}
