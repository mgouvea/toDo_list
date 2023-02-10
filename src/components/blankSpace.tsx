import './blankSpace.css';
import clipboardImg from '../../public/Clipboard.png';

export function BlankSpace() {
  return (
    <div className="containerBlank">
      <img className="imgIcon" src={clipboardImg} alt="" />
      <h1 className="textBlank">Você ainda não tem tarefas cadastradas</h1>
      <p className="subTextBlank">Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
