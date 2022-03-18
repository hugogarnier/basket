import { useState } from 'react'
import type { LinksFunction, LoaderFunction } from 'remix'
import { json, Link, Outlet, useLoaderData } from 'remix'

import Layout from '~/components/Layout'
import { Table, TableCell, TableHead, TableStats } from '~/components/Table'
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
  const [changeStat, setChangeStat] = useState<boolean>(false)
  const linkClass =
    'text-3xl font-bold text-white transition-opacity hover:opacity-70 border-b-2 border-transparent hover:border-slate-500 hover:cursor-pointer'
  const activeLinkClass =
    'text-3xl font-bold text-white transition-opacity hover:opacity-70 border-b-2 border-slate-900 hover:cursor-pointer'

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
                      <div className="flex w-72 items-center gap-4">
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
        <div className="flex gap-6">
          <h1
            className={!changeStat ? activeLinkClass : linkClass}
            onClick={() => setChangeStat(false)}
          >
            Per Game Stats
          </h1>
          <h1
            className={changeStat ? activeLinkClass : linkClass}
            onClick={() => setChangeStat(true)}
          >
            Total Stats
          </h1>
        </div>

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
                <TableCell>{(changeStat && 'PTS') || 'PPG'}</TableCell>
              </tr>
            </TableHead>
            <tbody>
              {(changeStat &&
                data.standings.teamTotalStats.map((team: StandingTeamStat) => {
                  return <TableStats key={team.team} data={team} />
                })) ||
                data.standings.teamPerGameStats.map(
                  (team: StandingTeamStat) => {
                    return <TableStats key={team.team} data={team} />
                  },
                )}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  )
}
