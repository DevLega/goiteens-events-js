import React from 'react'
import { EventItem, Property } from './styled/Event.styled'
import { CiLocationOn, CiSpeaker, CiCalendar, CiClock1 } from 'react-icons/ci'

export default function Event({ name, time, location, speaker }) {
    const startTime = new Date(time.start)
    const endTime = new Date(time.end)
    let durationHours = (endTime - startTime) / (1000 * 60 * 60)

    return (
    <EventItem>
        <h2>{name}</h2>
        <div>
            <Property>
                <CiLocationOn/>
                <span>{location}</span>
            </Property>
        </div>
        <div>
            <Property>
                <CiSpeaker/>
                <span>{speaker}</span>
            </Property>
        </div>
        <div>
            <Property>
                <CiCalendar/>
                <span>{startTime.toLocaleDateString()}</span>
            </Property>
        </div>
        <div>
            <Property>
                <CiClock1/>
                <span>{durationHours} hours</span>
            </Property>
        </div>
    </EventItem>
  )
}
