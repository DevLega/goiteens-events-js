import React from 'react'
import Event from './Event.jsx'
import { Board, List } from './styled/PageBoard.styled.jsx'

export default function PageBoard({ events }) {
  return (
    <section>
      <h2>24th Core Worlds Coalition Conference</h2>
      <Board>
        <List>
          {events.map(event => (
            <Event name={event.name} time={event.time} location={event.location} speaker={event.speaker} />
          ))}
        </List>
      </Board>
    </section>

  )
}
