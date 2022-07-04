import './prodCardsOverview.css';
import React from 'react';

interface RecordBody {
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
  filteredRecords: RecordBody
  // changeViewStatus: (viewStatus: string, articleTitle?: string) => void
}

export const ProdCardsOverview: React.FC<Props> = (filteredRecords) => {
  // let articleNaming = articleNews.title
  const sendStatus = ():void => {
      // changeViewStatus('overview', articleNaming)
      console.log(filteredRecords.filteredRecords.quesoname)
  }

  if (filteredRecords) {
    return (
        <div className="info-prod-card-overview">
          {/* <h2 className="overview-text">{articleNews.title}</h2>
          <p className="overview-text">Category #{articleNews.section}</p>
          <button className="more-info-btn" onClick={sendStatus}>More info</button> */}
          {/* <p>{filteredRecords.datein}</p> */}
          <p>Test</p>
          <button className='read-prod-records-btn' onClick={sendStatus}>Buscar Reportes</button>
        </div>
    );
  }
  return(<p>loading</p>)
}