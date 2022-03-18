import { computeTeams, teams } from '~/constants/teams'
import { getKeyByValue } from '~/utils/functions/getKeyByValue'
import { Schedule } from '~/utils/types'

export function Card({ game }: { game: Schedule }) {
  const isHomeWinner = game.pts > game.oppPts
  return (
    <article
      className={
        'firefox:bg-slate-750 flex rounded-lg border border-main bg-glass text-white backdrop-blur-lg duration-300 hover:cursor-pointer hover:bg-slate-700'
      }
    >
      <div className="flex w-full flex-col">
        <div className="flex justify-between p-4">
          <div className="flex h-20 w-20 flex-col items-center justify-around text-center">
            <span>{`${getKeyByValue(computeTeams, game.opp)}`}</span>
            <img
              className="w-8"
              src={`images/logos/${getKeyByValue(teams, game.opp)}.png`}
              alt={game.opp}
            />
          </div>

          <div className=" flex-2 mt-3 flex p-4">
            <p
              className={`text-2xl font-bold  ${isHomeWinner && 'opacity-50'}`}
            >
              {game.oppPts}
            </p>

            <p className="whitespace-nowrap px-3 pt-1.5 text-center uppercase">
              {(game.oppPts && 'Final') || 'Not played'}
            </p>

            <p
              className={`text-2xl font-bold  ${!isHomeWinner && 'opacity-50'}`}
            >
              {game.pts}
            </p>
          </div>
          <div className="flex h-20 w-20 flex-col items-center justify-around text-center">
            <span>{`${getKeyByValue(computeTeams, game.team)}`}</span>
            <img
              className="w-8"
              src={`images/logos/${getKeyByValue(teams, game.team)}.png`}
              alt={game.team}
            />
          </div>
        </div>
        <footer className="border-t border-main py-2 text-center text-sm">
          View details
        </footer>
      </div>
    </article>
  )
}
