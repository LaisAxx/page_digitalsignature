import React, { useEffect, useState } from 'react';
import './Clock.css'

function Clock() {
  const [date, setDate] = useState(new Date())


  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    
    };
    
  }
  )


  function tick() {
    setDate(new Date());
  }
 
  return (
    <>
      <div id="clock">
        {/* { date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} */}
        <div className="clock">
          {date.toLocaleTimeString([], { hour: 'numeric' })}
        <span>Horas</span>

        </div>
        <div className="clock">
          {date.toLocaleTimeString([], { minute: 'numeric' })}
          <span>Minutos</span>

        </div>
        <div className="clock">
          {date.toLocaleTimeString([], { second: 'numeric' })}
          <span>Segundos</span>
        </div>
        
      </div>
      <div className="dateTime"> {date.toDateString('pt-BR') }</div>
    </>

  )

}

export default Clock;