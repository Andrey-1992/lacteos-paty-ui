import React from 'react';
import { useState } from 'react';
import './editarReporteOutProdProd.css';
import { updateCheeseProdRecordOut, createProdRecorductionOut, deleteChesseProdRecord } from '../FetchProductionRecords';

interface RecordBody {
  id?: any,
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
  approvepord?: string,
  approvedprodsalida?: string,
  lotenum?: string,
  refrigerationtype?: string
}

interface Props {
  selectedRecord?: RecordBody;
  changeViewStatus: (viewStatus?: string, prodId?: number) => void;
}

export const EditarReporteOutProdProd: React.FC<Props> = ({selectedRecord, changeViewStatus}) => {
  const [ selectedDateOut, setSelectedDateOut ] = useState<any>(selectedRecord?.dateout);
  const [ selectedKg, setSelectedKg ] = useState<any>(selectedRecord?.weigthcurrent);
  const [ isDisable, setIsDisable ] = useState<boolean>(false);
  const [ selectedPieces, setSelectedPieces ] = useState<any>(selectedRecord?.nopieces);
  const [ selectedPiecesOut, setSelectedPiecesOut ] = useState<any>(selectedRecord?.nopiecessalida);
  const [ selectedPiecesTotal, setSelectedPiecesTotal ] = useState<any>();

  const cheeseCategory = [
    {Name:'Selecione Categoria', Value:''},
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'}
  ];

  const updateRecord = (event: { preventDefault: () => void; }):void => {
    event.preventDefault();
    const idNm = parseInt(selectedRecord?.id);
    const dateString = setSelectedDateOut.toString();
    const updateObj = {
      'approvedprodsalida': 'Falso',
      'dateout': selectedDateOut.toString(),
      'weigthcurrent': parseInt(selectedKg),
      'nopieces': parseInt(selectedPieces),
      'nopiecessalida': parseInt(selectedPiecesOut),
      'price': 0
      };
      updateCheeseProdRecordOut(idNm, updateObj);
      console.log('Updated but waiting for approval - Production Request Side');
      setIsDisable(true);
  }

  const goBackView = (event: { preventDefault: () => void; }):void => {
    event.preventDefault();
    changeViewStatus('overView');
  }

  const calculateNewTotal = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const newTotal = selectedPieces - selectedPiecesOut;
    setSelectedPiecesTotal(newTotal);
  }

  if (selectedRecord) {
    const cleanedDateIn = selectedRecord.datein?.slice(0, 10).split('-').join(' / ');
    const cleanedDateOut = selectedRecord.dateout?.slice(0, 10).split('-').join(' / ');
    return (
      <div className="crearReporteProdAdmin">
        <form className="cheese-categories-form">
          <div className="crear-reporte-queso-marco">
            <img className="cheese-piece-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU'} alt={'Imagen de Pieza de Queso'} width="200" height="200"></img>
            <h3 className="crear-reporte-queso-texto">Tipo de Queso:</h3>
            <h3 className="crear-reporte-queso-texto">{selectedRecord.quesoname}</h3>
            <h3 className="crear-reporte-queso-texto">Fecha Entrada:</h3>
            <p>{cleanedDateIn}</p>
            <h3 className="crear-reporte-queso-texto">Fecha de Ultima Salisa:</h3>
            <p>{cleanedDateOut}</p>
            <h3>Cambiar: <input type="date" className="crear-reporte-queso-date" onChange={(event) => setSelectedDateOut(event.target.value)}></input></h3>
            <h3>Piezas Disponibles: {selectedPieces}</h3>
            <h4>No Lote: {selectedRecord.lotenum}</h4>
            <h4>Refrigeracion: {selectedRecord.refrigerationtype}</h4>
            <h4>Kilogramos: <input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedKg(event.target.value)} value={selectedKg}></input></h4>
            <h3>Calcular Salida</h3>
            <h4>Pz de Salida: <input type="number" className="crear-reporte-queso-num" onChange={(event) =>  setSelectedPiecesOut(event.target.value)} value={selectedPiecesOut}></input></h4>
            <h4>Total Final: <input type="number" className="crear-reporte-queso-num" value={selectedPiecesTotal}></input></h4>
            <button onClick={calculateNewTotal}>Calcular</button>
            <br></br>
            <br></br>
            <button className='read-prod-records-btn' disabled={isDisable} onClick={updateRecord}>{!isDisable? 'Generar Reporte' : 'Reporte Generado!'}</button>
          </div>
        </form>
        <button className='read-prod-records-btn' onClick={goBackView}>Regresar</button>
      </div>
    );
  }

  return (
    <div className="editarReporteProdAdmin">
      <p>Loading</p>
    </div>
  );
};