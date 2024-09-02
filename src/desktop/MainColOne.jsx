import React from "react";
import './MainColOne.css';

const mainFeatCol = () => {
   return (
    <>
      <div id='main-col-one'>
          <div id="todo-div" className="options">
            <img id="todo-main" src="images/icon-todo.svg" alt="notepad" />
            <p>To-do</p>
          </div>
          <div id="calendar-div" className="options">
            <img id="calendar-main" src="/images/icon-calendar.svg" alt="calendar" />
            <p>Calendar</p>
          </div>
          <div id="reminders-div" className="options">
            <img id="reminders-main" src="/images/icon-reminders.svg" alt="bell" />
            <p>Reminders</p>
          </div>
          <div id="planning-div" className="options">
            <img id="planning-main" src="/images/icon-planning.svg" alt="clock" />
            <p>Planning</p>
          </div>
      </div>
    </>
   )
}

export default mainFeatCol;