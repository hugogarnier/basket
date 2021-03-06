import { teams } from '~/constants/teams'
import { getKeyByValue } from '~/utils/functions/getKeyByValue'
import { StandingTeamStat } from '~/utils/types'

export function Table({ children }: React.PropsWithChildren<{}>) {
  return (
    <table className="my-5 min-w-full overflow-hidden rounded-xl border  bg-glass text-center text-white shadow-lg md:min-w-min">
      {children}
    </table>
  )
}

export function TableCell({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <td
      className={`${
        (className && className) || ''
      } border-t border-main px-3 py-2`}
    >
      {children}
    </td>
  )
}

export function TableHead({ children }: React.PropsWithChildren<{}>) {
  return <thead className="bg-slate-900 font-bold">{children}</thead>
}

export function TableStats({ data }: { data: StandingTeamStat }) {
  const formatTeamName = getKeyByValue(teams, data.team)
  return (
    <tr className=" last:bg-slate-800 hover:cursor-pointer hover:bg-slate-700 last:hover:bg-slate-800">
      <TableCell>{(data.rank === 0 && <></>) || data.rank}</TableCell>
      <TableCell>
        <div className="flex w-72 items-center gap-4">
          {(formatTeamName === undefined && <></>) || (
            <img
              className="w-8"
              src={`images/logos/${formatTeamName}.png`}
              alt={data.team}
            />
          )}
          {data.team}
        </div>
      </TableCell>
      <TableCell>{data.fieldGoals}</TableCell>
      <TableCell>{data.fieldGoalsAttempt}</TableCell>
      <TableCell>{data.fieldGoalsPercentage}</TableCell>
      <TableCell>{data.threePoint}</TableCell>
      <TableCell>{data.threePointAttempt}</TableCell>
      <TableCell>{data.threePointPercentage}</TableCell>
      <TableCell>{data.twoPoint}</TableCell>
      <TableCell>{data.twoPointAttempt}</TableCell>
      <TableCell>{data.twoPointPercentage}</TableCell>
      <TableCell>{data.freeThrow}</TableCell>
      <TableCell>{data.freeThrowAttempt}</TableCell>
      <TableCell>{data.freeThrowPercentage}</TableCell>
      <TableCell>{data.offRebond}</TableCell>
      <TableCell>{data.defRebond}</TableCell>
      <TableCell>{data.totRebond}</TableCell>
      <TableCell>{data.assist}</TableCell>
      <TableCell>{data.steal}</TableCell>
      <TableCell>{data.block}</TableCell>
      <TableCell>{data.turnover}</TableCell>
      <TableCell>{data.foul}</TableCell>
      <TableCell>{data.points}</TableCell>
    </tr>
  )
}
