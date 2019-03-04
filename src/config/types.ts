import React from 'react'

// Generic
export interface Dictionary<T> {
  [key: string]: T | undefined
}

// Events
export type InputEvent = React.FormEvent<EventTarget>
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>

// Election
export interface Candidate {
  readonly id: string
  readonly name: string
  readonly party?: string
}
export type OptionalCandidate = Candidate | undefined
export type VoteDict = Dictionary<OptionalCandidate>
export interface BMDConfig {
  readonly requireActivation?: boolean
  readonly showHelpPage?: boolean
  readonly showSettingsPage?: boolean
}
export interface ElectionDefaults {
  readonly bmdConfig: BMDConfig
}
export interface Contest {
  readonly id: string
  readonly title: string
  readonly type: string
}
export interface SeatContest extends Contest {
  readonly type: 'plurality'
  readonly allowWriteIns: boolean
  readonly candidates: Candidate[]
  readonly seats: number
  readonly district: string
}
export interface ApprovalContest extends Contest {
  readonly type: 'boolean'
  readonly description: string
}
export interface Election {
  readonly bmdConfig?: BMDConfig
  readonly contests: Array<SeatContest | ApprovalContest>
  readonly county: string
  readonly date: string
  readonly seal: string
  readonly state: string
  readonly title: string
}
export type OptionalElection = Election | undefined
export type UpdateVoteFunction = (
  contestId: string,
  candidate: OptionalCandidate
) => void
export interface BallotContextInterface {
  readonly election: Election | undefined
  resetBallot: () => void
  setBallotKey: (activationCode: string) => void
  updateVote: UpdateVoteFunction
  votes: VoteDict
}

export default {}
