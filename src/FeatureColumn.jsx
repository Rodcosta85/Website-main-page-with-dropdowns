import React from "react";
import './FeatureColumn.css';
import Todo from '/images/icon-todo.svg';
import Calendar from '/images/icon-calendar.svg';
import Reminders from '/images/icon-reminders.svg';
import Planning from '/images/icon-planning.svg';

const newColOne = () => {
    return (
        <>
            <div id="col-one">
                <div id="item-ov-one">
                    <img id="todo-ov" src={Todo} alt="notepad" />
                    <p id="note-ov">To-do List</p>
                </div>
                <div id="item-ov-two">
                    <img id="calendar-ov" src={Calendar} alt="" />
                    <p id="cal-ov">Calendar</p>
                </div>
                <div id="item-ov-three">
                    <img id="reminder-ov" src={Reminders} alt="" />
                    <p id="rem-ov">Reminders</p>
                </div>
                <div id="item-ov-four">
                    <img id="planning-ov" src={Planning} alt="" />
                    <p id="plan-ov">Planning</p>
                </div>
            </div>
        </>
    )
}

export default newColOne;