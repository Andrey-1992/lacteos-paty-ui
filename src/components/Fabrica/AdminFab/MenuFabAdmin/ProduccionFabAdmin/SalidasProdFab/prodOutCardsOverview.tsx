import './prodOutCardsOverview.css';
import React from 'react';

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
  approvepord?: string,
  lotenum?: string,
  refrigerationtype?: string
}

interface Props {
  filteredRecords: RecordBody;
  changeViewStatus: (viewStatus?: string, prodId?: number) => void;
}

export const ProdOutCardsOverview: React.FC<Props> = ({filteredRecords, changeViewStatus}) => {
  const sendStatus = (event: { preventDefault: () => void; }):void => {
    event.preventDefault()
    changeViewStatus('detailedView', filteredRecords.id);
  }

  if (filteredRecords) {
    const cleanedDateIn = filteredRecords.datein?.slice(0, 10).split('-').join(' / ');
    const cleanedDateOut = filteredRecords.dateout?.slice(0, 10).split('-').join(' / ')
    return (
      <div className="crearReporteProdAdmin">
        <form className="cheese-categories-form">
          <div className="crear-reporte-queso-marco">
            <img className="cheese-piece-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShezzrcP_kQ2aqlw0AgJqSi2UWDekCbm3JNQ&usqp=CAU'} alt={'Imagen de Pieza de Queso'} width="200" height="200"></img>
            <h3>Tipo de Queso: {filteredRecords.quesoname}</h3>
            <h3>Refrigeracion: {filteredRecords.refrigerationtype}</h3>
            <h3>No Lote: {filteredRecords.lotenum}</h3>
            <h3>No Piezas: {filteredRecords.nopieces}</h3>
            <h4 className="crear-reporte-queso-texto">Fecha de Entrada:</h4>
            <h4>{cleanedDateIn}</h4>
            <h4 className="crear-reporte-queso-texto">Fecha Ultima Salida:</h4>
            <h4>{cleanedDateOut}</h4>
            <br></br>
            <button className='read-prod-records-btn' onClick={sendStatus}>Editar Reporte</button>
          </div>
        </form>
      </div>
    );
  }
  return(<p>Loading...</p>)
}