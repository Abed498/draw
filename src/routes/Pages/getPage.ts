import Tournament, { isValidTournament } from 'model/Tournament'
import Stage, { isValidStage } from 'model/Stage'

export default async (tournament: Tournament, stage: Stage) => {
  if (!isValidTournament(tournament)) {
    throw new Error(`Invalid tournament: ${tournament}`)
  }

  if (!isValidStage(stage)) {
    throw new Error(`Invalid stage: ${stage}`)
  }

  return import(/* webpackChunkName: "[request]" */ `pages/${tournament}/${stage}`)
    .then(mod => mod?.default)
    .catch(console.error)
}
