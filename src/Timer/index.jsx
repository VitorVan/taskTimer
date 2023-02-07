import { useState, useEffect } from "react"
import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import { ExportJsonCsv } from 'react-export-json-csv';

import { Container, ButtonContainer, TaskBar } from "./styles";

export default function Timer() {
    const [taskname, setTaskname] = useState('');
    const [actualDate, setActualDate] = useState('');
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      });

      const headers = [
        {
          key: 'taskName',
          name: 'Task',
        },
        {
          key: 'date',
          name: 'Data',
        },
        {
          key: 'taskDays',
          name: 'Dias',
        },
        {
          key: 'taskHours',
          name: 'Horas',
        },
        {
            key: 'taskMin',
            name: 'Minutos',
        },
        {
            key: 'taskSec',
            name: 'Segundos',
        }
      ]
      
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
      } = useStopwatch({ });
  

      function onReset() {
        reset();
        start();
        pause();
      }
      function onSave() {
        const actual = {
            taskName: taskname,
            taskDays: days,
            taskHours: hours,
            taskMin: minutes,
            taskSec: seconds,
            date: actualDate,
        }

        if (actual.taskName === '') {
            reset(undefined, false)
            return;
        }

        setTasks([...tasks, actual])
        setTaskname('');
        setActualDate('');
        reset(undefined, false)
      }
      function handleInputChange(event) {
        setTaskname(event.target.value);
      }
      function onStart() {
        start();
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        setActualDate(date);
      }

      return (
        <Container>
                <h1>Este é o seu timer</h1>
                <input type="text" placeholder="Insira aqui o nome da task" value={taskname} onChange={handleInputChange}/>
                <ButtonContainer>
                    <button onClick={onStart} className='start'>Start</button>
                    <button onClick={pause} className='pause'>Pause</button>
                    <button onClick={onSave} className='save'>Salvar</button>
                    <button onClick={() => reset(undefined, false)} className='reset'>Resetar</button>
                    <ExportJsonCsv headers={headers} items={tasks}>Exportar</ExportJsonCsv>
                    <button onClick={() => setTasks([])} className='clear'>Limpar tasks</button>
                </ButtonContainer>
                <div style={{fontSize: '100px'}}>
                    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>{isRunning ? 'Contando' : 'Pausado'}</p>
            {tasks.map((task) => (
                <div className="tasksContainer" key={task.taskName}>
                    <TaskBar><p>{task.taskName}</p> <p className="date">{task.date ? task.date : 'noDate'}</p> <span>{task.taskDays}</span>:<span>{task.taskHours}</span>:<span>{task.taskMin}</span>:<span>{task.taskSec}</span></TaskBar> 
                </div>
            ))}
        </Container>
      );
}