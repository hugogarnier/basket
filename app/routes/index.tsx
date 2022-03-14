import { formatISO, parse } from 'date-fns'
import type { LinksFunction, LoaderFunction } from 'remix'
import { json, Link, Outlet, useLoaderData } from 'remix'

import { CardList } from '~/components/CardList'
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
          <CardList games={data.schedule.schedule} />
        </div>
      </div>
    </Layout>
  )
}
