export type Standing = {
  GB: number
  id: string
  lose: number
  percentage: number
  pointAllowed: number
  pointScored: number
  team: string
  win: number
}

export type StandingTeamStat = {
  id: string
  assist: number
  block: number
  defRebond: number
  fieldGoals: number
  fieldGoalsAttempt: number
  fieldGoalsPercentage: number
  foul: number
  freeThrow: number
  freeThrowAttempt: number
  freeThrowPercentage: number
  games: number
  offRebond: number
  points: number
  rank: number
  steal: number
  team: string
  threePoint: number
  threePointAttempt: number
  threePointPercentage: number
  totRebond: number
  turnover: number
  twoPoint: number
  twoPointAttempt: number
  twoPointPercentage: number
}

export type Schedule = {
  id: string
  date: string
  opp: string
  oppPts: number
  ot: string
  ppd: string
  pts: number
  team: string
  text: string
}

export type StandingProps = {
  id: string
  season: number
  standings: Standing[]
  teamPerGameStats: StandingTeamStat[]
  teamTotalStats: StandingTeamStat[]
}
