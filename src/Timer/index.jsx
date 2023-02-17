import { useState, useEffect } from "react"
import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import { ExportJsonCsv } from 'react-export-json-csv';

import { Container, ButtonContainer, InputsContainer, Tabela } from "./styles";

export default function Timer() {
    const [taskname, setTaskname] = useState('');
    const [actualDate, setActualDate] = useState('');
    const [participants, setParticipants] = useState([]);
    const [participantsInput, setParticipantsInput] = useState([]);
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
  
      function onSave() {
        const aux = participantsInput.split(", ");
        console.log(aux);
        setParticipants([...aux]);
        console.log(participants);


        const actual = {
            taskName: taskname,
            taskDays: days,
            taskHours: hours,
            taskMin: minutes,
            taskSec: seconds,
            date: actualDate,
            participantes: participantsInput.split(", "),
            noParticipantes: participantsInput.split(", ").length,
        }

        if (actual.taskName === '') {
          reset(undefined, false)
          return;
        }
        
        setTasks([...tasks, actual])
        setTaskname('');
        setActualDate('');
        setParticipants([]);
        setParticipantsInput("");
        reset(undefined, false)
      }
      function handleInputChange(event) {
        setTaskname(event.target.value);
      }

      function handleParticipantsInputChange(event) {
        setParticipantsInput(event.target.value);
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
                <div style={{fontSize: '100px'}}>
                    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p style={{marginBottom: '50px'}}>{isRunning ? 'Contando' : 'Pausado'}</p>
                <InputsContainer>
                  <input className="task" type="text" placeholder="Insira aqui o nome da task" value={taskname} onChange={handleInputChange}/>
                  <input className="participants" type="text" placeholder="Insira aqui o nome dos participantes" value={participantsInput} onChange={handleParticipantsInputChange}/>
                </InputsContainer>
                <ButtonContainer>
                    <button onClick={onStart} className='start'>Start</button>
                    <button onClick={pause} className='pause'>Pause</button>
                    <button onClick={onSave} className='save'>Salvar</button>
                    <button onClick={() => reset(undefined, false)} className='reset'>Resetar</button>
                    <ExportJsonCsv headers={headers} items={tasks}>Exportar</ExportJsonCsv>
                    <button onClick={() => setTasks([])} className='clear'>Limpar tasks</button>
                </ButtonContainer>
            
            <Tabela>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Data</th>
                  <th>Duração</th>
                  <th>Nº de participantes</th>
                  <th>Participantes</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                    <tr key={task.taskName}>
                      <td>{task.taskName}</td>
                      <td>{task.date ? task.date : 'Sem data'}</td>
                      <td><span>{task.taskDays}</span>:<span>{task.taskHours}</span>:<span>{task.taskMin}</span>:<span>{task.taskSec}</span></td>
                      <td>{task.noParticipantes ? task.noParticipantes : "0"}</td>
                      <td>{task.participantes ? task.participantes.map((participante) => (participante + "; ")) : "Sem participantes"}</td>
                    </tr>
                ))}
              </tbody>
            </Tabela>
        </Container>
      );
}