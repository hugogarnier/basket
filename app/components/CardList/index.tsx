import { Link } from 'remix'

import { Card } from '../Card'
import { teamIds } from '~/constants/teams'
import { getKeyByValue } from '~/utils/functions/getKeyByValue'
import { Schedule } from '~/utils/types'

export function CardList({ games }: { games: Schedule[] }) {
  return (
    <>
      {games.map((game) => {
        const teamId = getKeyByValue(teamIds, game.opp)
        if (game.oppPts) {
          return (
            <Link to={`/game/${game.date}/${teamId}`} key={game.id}>
              <Card game={game} />
            </Link>
          )
        } else {
          return <Card key={game.id} game={game} />
        }
      })}
    </>
  )
}
