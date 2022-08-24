import React from 'react';
import { useState } from 'react';
import './editarReporteProdAdmin.css';
import { updateCheeseProdRecord, deleteChesseProdRecord } from '../FetchProductionRecords';

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
  lotenum?: string,
  refrigerationtype?: string
}

interface Props {
  selectedRecord?: RecordBody;
  changeViewStatus: (viewStatus?: string, prodId?: number) => void;
}

export const EditarReporteProdAdmin: React.FC<Props> = ({selectedRecord, changeViewStatus}) => {
  const [ selectedCategory, setSelectedCategory ] = useState<any>(selectedRecord?.quesoname);
  const [ selectedDate, setSelectedDate ] = useState<any>(selectedRecord?.datein);
  const [ selectedApproved, setSelectedApproved ] = useState<any>(selectedRecord?.approvepord);
  const [ selectedPieces, setSelectedPieces ] = useState<any>(selectedRecord?.nopieces);
  const [ selectedOlladas, setSelectedOlladas ] = useState<any>(selectedRecord?.holladas);
  const [ numLote, setNumLote ] = useState<any>(selectedRecord?.lotenum);
  const [ selectedPrice, setSelectedPrice ] = useState<any>(selectedRecord?.price);
  const [ selectedRefrigeration, setSelectedRefrigeration ] = useState<any>(selectedRecord?.refrigerationtype);
  const [ isDisable, setIsDisable ] = useState<boolean>(false);

  const cheeseCategory = [
    {Name:'Selecione Categoria', Value:''}, 
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'}
  ];

  const refrigerationCategory = [
    {Name:'Selecione Refrigeracion', Value:''}, {Name:'Grande', Value:'Grande'}, 
    {Name:'Mediana', Value:'Mediana'}, {Name:'Chica', Value:'Chica'}
  ];

  const cheeseStatus = [
    {Name:'Falso', Value:'Falso'}, {Name:'Verdadero', Value:'Verdadero'}
  ];

  const updateRecord = (event: { preventDefault: () => void; }):void => {
    event.preventDefault();
    const idNm = parseInt(selectedRecord?.id);
    const dateString = setSelectedDate.toString();
    const updateObj = {
      'approvepord':selectedApproved,
      'datein': selectedDate.toString(),
      'holladas': parseInt(selectedOlladas),
      'nopieces': parseInt(selectedPieces),
      'price':parseInt(selectedPrice),
      'quesoname': selectedCategory,
      'lotenum': numLote,
      'refrigerationtype': selectedRefrigeration,
      'id': parseInt(selectedRecord?.id)
    };
    updateCheeseProdRecord (idNm, updateObj);
    setIsDisable(true);
  }


  const deleteRecord = (event: { preventDefault: () => void; }):void => {
    event.preventDefault();
    const idNm = parseInt(selectedRecord?.id);
    deleteChesseProdRecord(idNm);
    setIsDisable(true);
  }

  const goBackView = (event: { preventDefault: () => void; }):void => {
    event.preventDefault();
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
            <select className="cheese-categorie-" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              {cheeseCategory.map(list => (
                <option className="option-choice-style" value={list.Value}>
                  {list.Name}
                </option>
              ))}
            </select>
            <h3 className="crear-reporte-queso-texto">Refrigeracion:</h3>
            <select className="cheese-categorie-" value={selectedRefrigeration} onChange={(event) => setSelectedRefrigeration(event.target.value)}>
              {refrigerationCategory.map(list => (
                <option className="option-choice-style" value={list.Value}>
                  {list.Name}
              </option>
            ))}
            </select>
            <h3 className="crear-reporte-queso-texto">Fecha Entrada: {cleanedDate}</h3>
            <h3>Cambiar: <input type="date" className="crear-reporte-queso-date" onChange={(event) => setSelectedDate(event.target.value)}></input></h3>
            <h4>Entrada Aprobada:</h4>
            <select className="cheese-categorie-" value={selectedApproved} onChange={(event) => setSelectedApproved(event.target.value)}>
              {cheeseStatus.map(list => (
                <option className="option-choice-style" value={list.Value}>
                  {list.Name}
                </option>
              ))}
            </select>
            <h4>No Piezas: <input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedPieces(event.target.value)} value={selectedPieces}></input></h4>
            <h4>No Olladas: <input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedOlladas(event.target.value)} value={selectedOlladas}></input></h4>
            <h4>No Lote: <input type="text" className="crear-reporte-queso-num" onChange={(event) => setNumLote(event.target.value)} value={numLote}></input></h4>
            <h4>Precio: $<input type="number" className="crear-reporte-queso-num" onChange={(event) => setSelectedPrice(event.target.value)} value={selectedPrice}></input></h4>
            <br></br>
            <button className='read-prod-records-btn' disabled={isDisable} onClick={updateRecord}>{!isDisable? 'Editar Reporte' : 'Reporte Editado!'}</button>
            <button className='read-prod-records-btn' disabled={isDisable} onClick={deleteRecord}>{!isDisable? 'Eliminar Reporte' : 'Reporte Eliminado!'}</button>
          </div>
        </form>
        <button className='go-back-menu-all-reports-prod-admin' onClick={goBackView}>Regresar</button>
      </div>
    );
  }

  return (
    <div className="editarReporteProdAdmin">
      <p>Loading</p>
    </div>
  );
};