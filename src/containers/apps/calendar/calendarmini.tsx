/* eslint-disable no-new */
import { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'
import FullCalendar from '@fullcalendar/react'
import listWeek from '@fullcalendar/list'

// CalendarComponent
class Calendarmini extends Component {
    state = {
        // Data for ListCalendar******
        calendarEvents1: [
            { id: '1', title: 'Event Now1', start: new Date() },
            { id: '2', title: 'Event Now1', start: new Date() },
            { id: '3', title: 'Event Now1', start: new Date() },
            { id: '4', title: 'Event Now1', start: new Date() },
            { id: '5', title: 'Event Now1', start: new Date() },
            { id: '6', title: 'Event Now1', start: new Date() },
        ],
    }
    render() {
        return (
            <Fragment>
                <Card>
                    <Card.Header>
                        <div className='card-title'>List Calendar</div>
                    </Card.Header>
                    <Card.Body>
                        <div>
                            <FullCalendar initialView="listWeek" plugins={[listWeek]} events={this.state.calendarEvents1} />
                        </div>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

export default Calendarmini;

