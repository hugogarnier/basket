import cn from 'classnames'

export function CardList({ games }) {
  return (
    <div className="grid grid-cols-auto-fill gap-5">
      {games.map(({ team, pts, opp, oppPts }) => (
        <GameCard />
      ))}
    </div>
  )
}
