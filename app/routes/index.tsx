import {
  closestIndexTo,
  compareAsc,
  compareDesc,
  format,
  formatISO,
  parse,
} from 'date-fns'
import { useEffect, useMemo, useState } from 'react'
import type { LinksFunction, LoaderFunction } from 'remix'
import { json, Link, Outlet, useLoaderData } from 'remix'
import { ArrowIcon } from '~/components/ArrowIcon'

import { CardList } from '~/components/CardList'
import Layout from '~/components/Layout'
import { Table, TableCell, TableHead } from '~/components/Table'

import { db } from '~/utils/db.server'
import { formattedDate } from '~/utils/functions/formattedDate'
import { Schedule } from '~/utils/types'

export const loader: LoaderFunction = async () => {
  const data = {
    schedule: await db.schedules.findUnique({
      where: { season: 2022 },
    }),
  }

  return json(data)
}

function findClosestPrevDate(dateToCompare: Date, dates: string[]) {
  const formatDates = dates.map((date) => new Date(date))

  return closestIndexTo(dateToCompare, formatDates)
}

export default function Index() {
  const data = useLoaderData()
  const [indexDate, setIndexDate] = useState<number>()
  const [computedDates, setComputedDates] = useState([
    ...new Set(formattedDate(data.schedule.schedule).map((elem) => elem.date)),
  ])
  const [newGames, setNewGames] = useState<Schedule[]>()

  useEffect(() => {
    const initIndexDate = () => {
      setIndexDate(findClosestPrevDate(new Date(), computedDates))
      setNewGames(data.schedule.schedule)
    }
    initIndexDate()
  }, [computedDates, data])

  useEffect(() => {
    const computedGames = () => {
      const filteredGames = data.schedule.schedule.filter(
        (game: Schedule) => game.date === computedDates[indexDate],
      )
      setNewGames(filteredGames)
    }
    computedGames()
  }, [indexDate, computedDates, data])

  const prevIndex = () =>
    (indexDate === 0 && setIndexDate(0)) || setIndexDate(indexDate - 1)
  const nextIndex = () => {
    if (indexDate === computedDates.length - 1) {
      setIndexDate(computedDates.length - 1)
    } else {
      setIndexDate(indexDate + 1)
    }
  }

  return (
    <Layout>
      <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
        <div className="mb-10 flex w-36 select-none items-center justify-between">
          <span onClick={prevIndex} className="cursor-pointer">
            <ArrowIcon />
          </span>
          <span>
            {computedDates[indexDate] &&
              format(new Date(computedDates[indexDate]), 'dd MMM yyyy')}
          </span>
          <span onClick={nextIndex} className="rotate-180 cursor-pointer ">
            <ArrowIcon />
          </span>
        </div>

        <div className="grid grid-cols-auto-fill gap-5">
          {newGames && <CardList games={newGames} />}
        </div>
      </div>
    </Layout>
  )
}
