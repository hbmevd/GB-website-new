import { Fragment, useEffect, useState } from "react";
import { Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker";


import Pageheader from "../../../components/common/pageheader/pageheader";
import { BasicMutipleSelect, BasicMutipleSelect2, } from "./multiselect";

export function Calendar() {

    const [startDate, setStartDate] = useState(new Date());

    let eventGuid = 0;
    const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
    const INITIAL_EVENTS = [
        {
            id: createEventId(),
            title: "Meeting",
            start: todayStr,
        },

    ];
    function createEventId() {
        return String(eventGuid++);
    }
    const initialstate1 = {
        calendarEvents: [
            {
                title: "Atlanta Monster",
                start: new Date("2019-04-04 00:00"),
                id: "1001",
            },
            {
                title: "My Favorite Murder",
                start: new Date("2019-04-05 00:00"),
                id: "1002",
            },
        ],

        events: [
            {
                title: "My Event 1",
                id: "1",
                bg: "bg-primary",
                border: "border-primary",
            },
            {
                title: "My Event 2",
                id: "2",
                bg: " bg-secondary",
                border: "border-success",
            },
            {
                title: "My Event 3",
                id: "3",
                bg: "bg-warning",
                border: "border-warning",
            },
            { title: "My Event 4", id: "4", bg: "bg-info", border: "border-info" },
            {
                title: "My Event 5",
                id: "5",
                bg: "bg-success",
                border: "border-success",
            },
            {
                title: "My Event 6",
                id: "6",
                bg: "bg-danger",
                border: "border-danger",
            },
        ],
    };
    const [state] = useState(initialstate1);

    useEffect(() => {
        // const draggableEl: any = document.getElementById("external-events");
        // new Draggable(draggableEl, {
        //     itemSelector: ".fc-event",
        //     eventData: function (eventEl: { getAttribute: (arg0: string) => any; }) {
        //         const title = eventEl.getAttribute("title");
        //         const id = eventEl.getAttribute("data");
        //         const classValue = eventEl.getAttribute("class");
        //         return {
        //             title: title,
        //             id: id,
        //             className: classValue,
        //         };
        //     },
        // });
    }, []);

    function renderEventContent(eventInfo: any) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        );
    }
    const handleEventClick = (clickInfo: any) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    };
    const handleEvents = () => { };

    const handleDateSelect = (selectInfo: any) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
            });
        }
    };
    return (
        <Fragment>

            <Pageheader titles="CALENDAR" Subtite="Apps" active="Calendar" />

            <div className="pd-b-0  main-content-calendar pt-0">

                {/* <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Header>
                                <h3 className="card-title">
                                    Calender With different Color Events
                                </h3>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12} sm={12} lg={3}>
                                        <div id="external-events">
                                            <h4>Draggable Events</h4>
                                            {state.events.map((event: any) => (
                                                <div
                                                    className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} ${event.border}`}
                                                    title={event.title}
                                                    key={event.id}
                                                >
                                                    <div className="fc-event-main">{event.title}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div>

                                        </div>
                                        <br />
                                        <Card className="custom-event-card">
                                            <Card.Body>
                                                <h6 className="card-title mb-3">Custom Event</h6>
                                                <Form action="#">
                                                    <FormGroup className="form-group">
                                                        <label htmlFor="eventTitle" className="form-label">Event Title:</label>
                                                        <input className="form-control" id="eventTitle" placeholder="your title here..." type="text" />
                                                    </FormGroup>
                                                    <FormGroup className="form-group">
                                                        <label className="form-label">Event Date:</label>
                                                        <DatePicker
                                                            className="w-100 form-control"
                                                            selected={startDate}
                                                            onChange={(date: any) => setStartDate(date)}
                                                        />
                                                    </FormGroup>
                                                    <label className="form-label">Event Type:</label>
                                                    <FormGroup className="form-group ">

                                                        <BasicMutipleSelect />
                                                    </FormGroup>
                                                    <label className="form-label">Reminder:</label>
                                                    <FormGroup className="form-group">

                                                        <BasicMutipleSelect2 />
                                                    </FormGroup>
                                                    <div className="btn-list">
                                                        <button className="btn btn-primary">ADD</button>
                                                        <button className="btn btn-outline-danger">RESET</button>
                                                    </div>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col md={12} lg={9}>
                                        <div id="calendar2">
                                            <FullCalendar
                                                plugins={[
                                                    dayGridPlugin,
                                                    timeGridPlugin,
                                                    interactionPlugin,
                                                ]}
                                                headerToolbar={{
                                                    left: "prev,next today",
                                                    center: "title",
                                                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                                                }}
                                                initialView="dayGridMonth"
                                                editable={true}
                                                selectable={true}
                                                selectMirror={true}
                                                dayMaxEvents={true}
                                                initialEvents={INITIAL_EVENTS}
                                                select={handleDateSelect}
                                                eventContent={renderEventContent}
                                                eventClick={handleEventClick}
                                                eventsSet={handleEvents}
                                            />
                                        </div>

                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Calendarmini />
                </Row> */}

                <Row>
                    <Col xl={3} lg={12} md={12}>
                        <Card>
                            <Card.Body>
                            <div className="card-title">Draggable Events</div>
                            <div id="external-events">
                                {state.events.map((event: any) => (
                                    <div
                                        className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} ${event.border}`}
                                        title={event.title}
                                        key={event.id}
                                    >
                                        <div className="fc-event-main">{event.title}</div>
                                    </div>
                                ))}
                            </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-event-card">
                            <Card.Body>
                                <div className="card-title">Custom Event</div>
                                <Form action="#">
                                    <FormGroup className="form-group">
                                        <label htmlFor="eventTitle" className="form-label">Event Title:</label>
                                        <input className="form-control" id="eventTitle" placeholder="your title here..." type="text" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <label className="form-label">Event Date:</label>
                                        <DatePicker
                                            className="w-100 form-control"
                                            selected={startDate}
                                            onChange={(date: any) => setStartDate(date)}
                                        />
                                    </FormGroup>
                                    <label className="form-label">Event Type:</label>
                                    <FormGroup className="form-group ">

                                        <BasicMutipleSelect />
                                    </FormGroup>
                                    <label className="form-label">Reminder:</label>
                                    <FormGroup className="form-group">

                                        <BasicMutipleSelect2 />
                                    </FormGroup>
                                    <div className="btn-list">
                                        <button className="btn btn-primary">ADD</button>
                                        <button className="btn btn-outline-danger">RESET</button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9} lg={12} md={12}>
                        <Card>
                            <Card.Body>
                            <div id="calendar2">
                                <FullCalendar
                                    plugins={[
                                        dayGridPlugin,
                                        timeGridPlugin,
                                        interactionPlugin,
                                    ]}
                                    headerToolbar={{
                                        left: "prev,next today",
                                        center: "title",
                                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                                    }}
                                    initialView="dayGridMonth"
                                    editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    dayMaxEvents={true}
                                    initialEvents={INITIAL_EVENTS}
                                    select={handleDateSelect}
                                    eventContent={renderEventContent}
                                    eventClick={handleEventClick}
                                    eventsSet={handleEvents}
                                />
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        </Fragment>
    );
}

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
