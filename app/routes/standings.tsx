import type { LinksFunction, LoaderFunction } from 'remix'
import { json, Link, Outlet, useLoaderData } from 'remix'

import Layout from '~/components/Layout'
import { Table, TableCell, TableHead } from '~/components/Table'
import { teams } from '~/constants/teams'

import { db } from '~/utils/db.server'
import { getKeyByValue } from '~/utils/functions/getKeyByValue'
import { Standing, StandingTeamStat } from '~/utils/types'

export const loader: LoaderFunction = async () => {
  const data = {
    standings: await db.standings.findUnique({
      where: { season: 2022 },
    }),
  }
  return json(data)
}

export default function Index() {
  const data = useLoaderData()

  return (
    <Layout>
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        <h1 className="text-3xl font-bold text-white">Betclic Elite</h1>
        <div className="overflow-x-auto py-5">
          <Table>
            <TableHead>
              <tr>
                <TableCell>Rank</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>Win</TableCell>
                <TableCell>Loss</TableCell>
                <TableCell>Win %</TableCell>
                <TableCell>Points Scored</TableCell>
                <TableCell>Points Allowed</TableCell>
              </tr>
            </TableHead>
            <tbody>
              {data.standings.standings.map((team: Standing, index: number) => {
                const formatTeamName = getKeyByValue(teams, team.team)
                return (
                  <tr
                    key={index}
                    className=" hover:cursor-pointer hover:bg-slate-700"
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="w-auto">
                      <div className="flex items-center gap-4">
                        <img
                          className="w-8"
                          src={`images/logos/${formatTeamName}.png`}
                          alt={team.team}
                        />
                        {team.team}
                      </div>
                    </TableCell>
                    <TableCell>{team.win}</TableCell>
                    <TableCell>{team.lose}</TableCell>
                    <TableCell>{team.percentage}</TableCell>
                    <TableCell>{team.pointScored}</TableCell>
                    <TableCell>{team.pointAllowed}</TableCell>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
        <h1 className="text-3xl font-bold text-white">Per Game Stats</h1>
        <div className="overflow-x-auto py-5">
          <Table>
            <TableHead>
              <tr>
                <TableCell>Rank</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>FG</TableCell>
                <TableCell>FGA</TableCell>
                <TableCell>FG%</TableCell>
                <TableCell>3P</TableCell>
                <TableCell>3PA</TableCell>
                <TableCell>3P%</TableCell>
                <TableCell>2P</TableCell>
                <TableCell>2PA</TableCell>
                <TableCell>2P%</TableCell>
                <TableCell>FT</TableCell>
                <TableCell>FTA</TableCell>
                <TableCell>FT%</TableCell>
                <TableCell>ORB</TableCell>
                <TableCell>DRB</TableCell>
                <TableCell>TRB</TableCell>
                <TableCell>AST</TableCell>
                <TableCell>STL</TableCell>
                <TableCell>BLK</TableCell>
                <TableCell>TOV</TableCell>
                <TableCell>PF</TableCell>
                <TableCell>PTS</TableCell>
              </tr>
            </TableHead>
            <tbody>
              {data.standings.teamPerGameStats.map((team: StandingTeamStat) => {
                const formatTeamName = getKeyByValue(teams, team.team)
                return (
                  <tr
                    key={team.rank}
                    className=" last:bg-slate-800 hover:cursor-pointer hover:bg-slate-700 last:hover:bg-slate-800"
                  >
                    <TableCell>
                      {(team.rank === 0 && <></>) || team.rank}
                    </TableCell>
                    <TableCell>
                      <div className="flex w-72 items-center gap-4">
                        {(formatTeamName === undefined && <></>) || (
                          <img
                            className="w-8"
                            src={`images/logos/${formatTeamName}.png`}
                            alt={team.team}
                          />
                        )}
                        {team.team}
                      </div>
                    </TableCell>
                    <TableCell>{team.fieldGoals}</TableCell>
                    <TableCell>{team.fieldGoalsAttempt}</TableCell>
                    <TableCell>{team.fieldGoalsPercentage}</TableCell>
                    <TableCell>{team.threePoint}</TableCell>
                    <TableCell>{team.threePointAttempt}</TableCell>
                    <TableCell>{team.threePointPercentage}</TableCell>
                    <TableCell>{team.twoPoint}</TableCell>
                    <TableCell>{team.twoPointAttempt}</TableCell>
                    <TableCell>{team.twoPointPercentage}</TableCell>
                    <TableCell>{team.freeThrow}</TableCell>
                    <TableCell>{team.freeThrowAttempt}</TableCell>
                    <TableCell>{team.freeThrowPercentage}</TableCell>
                    <TableCell>{team.offRebond}</TableCell>
                    <TableCell>{team.defRebond}</TableCell>
                    <TableCell>{team.totRebond}</TableCell>
                    <TableCell>{team.assist}</TableCell>
                    <TableCell>{team.steal}</TableCell>
                    <TableCell>{team.block}</TableCell>
                    <TableCell>{team.turnover}</TableCell>
                    <TableCell>{team.foul}</TableCell>
                    <TableCell>{team.points}</TableCell>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  )
}
