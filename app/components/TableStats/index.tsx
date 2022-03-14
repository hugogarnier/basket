import { TableCell } from '../Table'

import { teams } from '~/constants/teams'
import { getKeyByValue } from '~/utils/functions/getKeyByValue'
import { StandingTeamStat } from '~/utils/types'

export function TableStats(data: StandingTeamStat) {
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
