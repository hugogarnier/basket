import { formatISO, parse } from 'date-fns'
import type { LinksFunction, LoaderFunction } from 'remix'
import { json, Link, Outlet, useLoaderData } from 'remix'

import { Card } from '~/components/Card'
import Layout from '~/components/Layout'
import { Table, TableCell, TableHead } from '~/components/Table'

import { db } from '~/utils/db.server'
import { Schedule } from '~/utils/types'

export const loader: LoaderFunction = async () => {
  const data = {
    schedule: await db.schedules.findUnique({
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
        <div className="grid grid-cols-auto-fill gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="overflow-x-auto py-5">
          <h1 className="text-3xl font-bold text-white">France</h1>

          <Table fullWidth>
            <TableHead>
              <tr>
                <TableCell>Date</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>Team Score</TableCell>
                <TableCell>Opposant</TableCell>
                <TableCell>Opp Score</TableCell>
              </tr>
            </TableHead>
            <tbody>
              {data.schedule.schedule.map((result: Schedule, index: number) => (
                <tr key={result.id}>
                  <TableCell>
                    {(result.date.length < 10 && result.date) ||
                      formatISO(
                        parse(result.date, 'EEEE, MMM d, yyyy', new Date()),
                        { representation: 'date' },
                      )}
                  </TableCell>
                  <TableCell>{result.team}</TableCell>
                  <TableCell>{result.pts}</TableCell>
                  <TableCell>{result.opp}</TableCell>
                  <TableCell>{result.oppPts}</TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  )
}
