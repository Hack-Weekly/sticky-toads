// still needs a assigned_users field but this will work for now
// maybe move to a types dir or something idk
export interface Card {
  id: string
  title: string
  description: string
}

export interface Label {
  id: string
  title?: string
  color?: string
}
