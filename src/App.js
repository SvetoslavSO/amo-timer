import { useEffect, useState } from "react";

function App() {

  const [timer, setValue] = useState('00:00:00');

  function check(num) {
    if(num < 10) {
      return `0${num}`
    } else if (num >= 10 && num <= 59) {
      return `${num}`
    } else return '00'
  }

  function checkHour (hour) {
    if(hour < 10) {
      return `0${hour}`
    } else {
      return `${hour}`
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
        setValue(timer => {
          let array = timer.split(":")
          let curValSec = Number(array[2])+1;
          let curValMin = Number(array[1]);
          let curValHour = Number(array[0]);
          let checkedSec = check(curValSec)
          if(Number(checkedSec) === 0) {
            let checkedMin = check(curValMin + 1)
            if(Number(checkedMin) === 0) {
              return (`${checkHour(curValHour + 1)}:00:00`)
            } else {
              return (`${checkHour(curValHour)}:${checkedMin}:00`)
            } 
          } else {
            return (`${checkHour(curValHour)}:${check(curValMin)}:${checkedSec}`)
          }
        })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <div className="timer">{ timer }</div>
    </div>
  );
}

export default App;
