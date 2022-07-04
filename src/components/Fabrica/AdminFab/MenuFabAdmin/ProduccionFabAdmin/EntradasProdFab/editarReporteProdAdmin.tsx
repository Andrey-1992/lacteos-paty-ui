import React from 'react';
import { useState } from 'react';
import './editarReporteProdAdmin.css';

interface RecordBody {
  id?: number,
  quesoname?: string,
  quesostatus?: string,
  quesoavailability?: boolean,
  nopieces?: number,
  nopiecessalida?: number,
  weigth?: number,
  weigthcurrent?: number,
  holladas?: number,
  datein?: string,
  dateout?: string ,
  price?: number,
  approvepord?: string
}

interface Props {
  selectedRecord?: RecordBody;
  // detailedView: (viewStatus: string, articleTitle?: string) => void;
  changeViewStatus: (viewStatus?: string, prodId?: number) => void;
}


export const EditarReporteProdAdmin: React.FC<Props> = ({selectedRecord, changeViewStatus}) => {
  const [ selectedCategory, setSelectedCategory ] = useState<string>('');
  const [ selectedDate, setSelectedDate ] = useState<string>();
  const [ selectedPieces, setSelectedPieces ] = useState<any>(selectedRecord?.nopieces);
  const [ selectedOlladas, setSelectedOlladas ] = useState<any>(selectedRecord?.holladas);
  const [ selectedPrice, setSelectedPrice ] = useState<any>(selectedRecord?.price);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const sendStatus = (event: { preventDefault: () => void; }):void => {
    event.preventDefault()
    changeViewStatus('overView');
  }

  if (selectedRecord) {
    const cleanedDate = selectedRecord.datein?.slice(0, 10).split('-').join(' / ')
    return (
      <div className="crearReporteProdAdmin">
        <form className="cheese-categories-form">
          <div className="crear-reporte-queso-marco">
            <img className="cheese-piece-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU'} alt={'Imagen de Pieza de Queso'} width="200" height="200"></img>
            <h3 className="crear-reporte-queso-texto">Tipo de Queso: {selectedRecord.quesoname}</h3>
            <h3 className="crear-reporte-queso-texto">Fecha de Entrada: {cleanedDate}</h3>
            <h3>Cambiar: <input type="date" className="crear-reporte-queso-date" onChange={(event) => setSelectedDate(event.target.value)}></input></h3>
            <h4>Disponibilidad: {selectedRecord.quesoavailability ? 'Verdadera' : 'Falso'}</h4>
            <h4>Aprobado: {selectedRecord.approvepord? 'Verdadero' : 'Falso'}</h4>
            <h4>Estatus: {selectedRecord.quesostatus}</h4>
            <h4>No Piezas: <input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedPieces(event.target.value)} value={selectedPieces}></input></h4>
            <h4>No Olladas: <input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedOlladas(event.target.value)} value={selectedOlladas}></input></h4>
            <h4>Precio: $<input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedPrice(event.target.value)} value={selectedPrice}></input></h4>
            <br></br>
            <button className='read-prod-records-btn' onClick={sendStatus}>Todos los reportes</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="editarReporteProdAdmin">
      <p>Editar Reporte Prod Admin</p>
      <button className='read-prod-records-btn' onClick={sendStatus}>Vista General</button>
    </div>
  );
};