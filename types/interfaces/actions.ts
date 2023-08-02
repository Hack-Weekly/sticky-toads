import { Card, Label } from "./project"

export interface ListActions {
  project_id: string
  list_id: string
  list_title: string
  message: string
}

export interface CardActions {
  list_id: string
  card: Card
}

export interface LabelActions {
  card_id: string
  label: Label
}
