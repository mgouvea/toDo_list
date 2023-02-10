import { BlankSpace } from '../components/blankSpace';
import './home.css';
import rockeatImg from '../../public/rocket.png';

export function Home() {
  return (
    <div className="container">
      <div className="header">
        <img id="rockeatIcon" src={rockeatImg} alt="Rockeat logo" />
        <h1 className="textHeader" id="textFirst">
          TO
        </h1>
        <h1 className="textHeader" id="textSecond">
          DO
        </h1>
      </div>
      <div className="content">
        <div className="createTaskContent">
          <input
            className="inputCreateTask"
            type="text"
            placeholder="Adicione uma nova tarefa"
            autoFocus
          />
          <button className="buttonCreateTask">Criar</button>
        </div>
        <div className="statusContent">
          <div className="taskStatus">
            <div className="createTaskStatus">
              Tarefas criadas <p className="number">0</p>
            </div>
            <div className="doneTaskStatus">
              Concluídas <p className="number">0</p>
            </div>
          </div>
          <BlankSpace />
        </div>
      </div>
    </div>
  );
}
