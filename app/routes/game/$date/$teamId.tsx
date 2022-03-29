import { format } from 'date-fns'
import type { LoaderFunction } from 'remix'
import { json, useLoaderData } from 'remix'
import invariant from 'tiny-invariant'

import { getGames } from '~/api'
import Layout from '~/components/Layout'
import { Table, TableCell, TableHead } from '~/components/Table'
import { teamRapidApi } from '~/constants/teams'
import { getKeyByValue } from '~/utils/functions/getKeyByValue'

type Game = {
  id: number
  date: string
  time: string
  timestamp: number
  timezone: string
  stage: null
  week: string
  status: { long: string; short: string; timer: null }
  league: {
    id: number
    name: string
    type: string
    season: string
    logo: string
  }
  country: {
    id: 4
    name: string
    code: string
    flag: string
  }
  teams: {
    home: {
      id: number
      name: string
      logo: string
      away: {
        id: number
        name: string
        logo: string
      }
    }
    scores: {
      home: {
        quarter_1: number
        quarter_2: number
        quarter_3: number
        quarter_4: number
        over_time: number
        total: number
      }
      away: {
        quarter_1: number
        quarter_2: number
        quarter_3: number
        quarter_4: number
        over_time: number
        total: number
      }
    }
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.date, 'Expected params.date')
  invariant(params.teamId, 'Expected params.teamId')
  const { data }: { data: Game[] } = await getGames(params.date, params.teamId)
  console.log(
    '🚀 ~ file: $teamId.tsx ~ line 70 ~ constloader:LoaderFunction= ~ data',
    data[0].teams,
  )
  return json(data[0])
}

export default function Index() {
  const data = useLoaderData()
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-white">{data.league.name}</h1>
      <p className="text-base text-white">
        {format(new Date(data.date), 'dd MMMM yyyy')}
      </p>
      <div className="mt-10">
        <div className="flex items-center">
          <h3 className="pr-5 text-xl text-white">{data.teams.home.name}</h3>
          <img
            className="w-10"
            src={`../../images/logos/${getKeyByValue(
              teamRapidApi,
              data.teams.home.name,
            )}.png`}
            alt={data.teams.home.name}
          />
        </div>

        <div className="overflow-x-auto py-1">
          <Table>
            <TableHead>
              <tr>
                <TableCell>1st Quarter</TableCell>
                <TableCell>2nd Quarter</TableCell>
                <TableCell>3rd Quarter</TableCell>
                <TableCell>4th Quarter</TableCell>
                <TableCell>Total</TableCell>
              </tr>
            </TableHead>
            <tbody>
              <tr>
                <TableCell>{data.scores.home.quarter_1}</TableCell>
                <TableCell>{data.scores.home.quarter_2}</TableCell>
                <TableCell>{data.scores.home.quarter_3}</TableCell>
                <TableCell>{data.scores.home.quarter_4}</TableCell>
                <TableCell>{data.scores.home.total}</TableCell>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center">
          <h3 className="pr-5 text-xl text-white">{data.teams.away.name}</h3>
          <img
            className="w-10"
            src={`../../images/logos/${getKeyByValue(
              teamRapidApi,
              data.teams.away.name,
            )}.png`}
            alt={data.teams.away.name}
          />
        </div>
        <div className="overflow-x-auto py-1">
          <Table>
            <TableHead>
              <tr>
                <TableCell>1st Quarter</TableCell>
                <TableCell>2nd Quarter</TableCell>
                <TableCell>3rd Quarter</TableCell>
                <TableCell>4th Quarter</TableCell>
                <TableCell>Total</TableCell>
              </tr>
            </TableHead>
            <tbody>
              <tr>
                <TableCell>{data.scores.away.quarter_1}</TableCell>
                <TableCell>{data.scores.away.quarter_2}</TableCell>
                <TableCell>{data.scores.away.quarter_3}</TableCell>
                <TableCell>{data.scores.away.quarter_4}</TableCell>
                <TableCell>{data.scores.away.total}</TableCell>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  )
}
