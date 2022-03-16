import { formatISO, parse } from 'date-fns'
import { Schedule } from '../types'

export const formattedDate = (object: Schedule[]) => {
  const newObject = object
    .filter((elem: Schedule) => elem.date.length > 10)
    .map((elem: Schedule) => {
      const newDate = formatISO(
        parse(elem.date, 'EEEE, MMM d, yyyy', new Date()),
        {
          representation: 'date',
        },
      )
      elem.date = newDate
      return { ...elem }
    })
  return newObject
}
// export const formattedDate = (object: Schedule[]) => {
//   const newObject = object.reduce(
//     (acc: Schedule[], current: Schedule) =>
//       (current.date.length > 10 && [...acc, current]) || acc,
//     [],
//   )
//   return newObject
// }
