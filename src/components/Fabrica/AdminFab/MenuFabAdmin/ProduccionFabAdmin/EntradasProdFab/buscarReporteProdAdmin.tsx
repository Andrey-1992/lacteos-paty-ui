import React from 'react';
import './buscarReporteProdAdmin.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { fetchAllProdRecords } from '../FetchProductionRecords';
import { ProdCardsOverview } from './prodCardsOverview';
import { EditarReporteProdAdmin } from './editarReporteProdAdmin';

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

export const BuscarReporteProdAdmin: React.FC = () => {
  const [ selectedMonth, setSelectedMonth ] = useState<any>();
  const [ selectedYear, setSelectedYear ] = useState<any>();
  const [ fetchedRecords, setFetchedRecords] = useState<any>();
  const [ detailedView, setDetailedView] = useState<boolean>(false);
  const [ selectedRecordById, setSelectedRecordById] = useState<RecordBody>();

  const monthSelection = [
    {Name:'Seleccione Mes', Value:''}, {Name:'Enero', Value: '01'}, {Name:'Febrero', Value: '02'},{Name:'Marzo', Value: '03'},
    {Name:'Abril', Value: '04'}, {Name:'Mayo', Value: '05'}, {Name:'Junio', Value: '06'}, {Name:'Julio', Value: '07'},
    {Name:'Agosto', Value: '08'}, {Name:'Septiembre', Value: '09'}, {Name:'Octubre', Value: '10'}, {Name:'Noviembre', Value: '11'},
    {Name:'Diciembre', Value: '12'}
  ];

  const yearSelection = [
    {Name:'Seleccione Año', Value:''}, {Name:'2020', Value: '2020'}, {Name:'2021', Value: '2021'},{Name:'2022', Value: '2022'},
    {Name:'2023', Value: '2023'}, {Name:'2024', Value: '2024'}, {Name:'2025', Value: '2025'}, {Name:'2026', Value: '2026'},
    {Name:'2027', Value: '2027'}, {Name:'2028', Value: '2028'}, {Name:'2029', Value: '2029'}, {Name: '2030', Value: '2030'}
  ];

  const filterDataByDate = (data:any): void => {
    const dataFiltered = data.reduce((acc:any, dataRecords: any) => {
      const yearData = dataRecords.datein.split('-')[0];
      const monthData = dataRecords.datein.split('-')[1]
      if (yearData === selectedYear && monthData === selectedMonth) {
        acc.push(dataRecords)
      }
      return acc;
    }, [])
    setFetchedRecords(dataFiltered);
    // console.log(fetchedRecords)
  }

  const makeFetch = (): void => {
    fetchAllProdRecords()
    .then(data => filterDataByDate(data))
    .catch(error => console.log(error))
  }

  const readProdRecords = (event: { preventDefault: () => void; }): void => {
    event.preventDefault();
    makeFetch();
    // console.log(fetchedRecords)
  }

  const changeViewStatus = (viewStatus?: string, prodId?: number): void => {
    if (viewStatus === 'detailedView') {
      const selectedRecod = fetchedRecords.filter((fetchedRecords: any) => fetchedRecords.id === prodId);
      // console.log(selectedRecod)
      setSelectedRecordById(selectedRecod[0])
      console.log(selectedRecordById)
      setDetailedView(true)
    }
    if (viewStatus === 'overView') {
      setDetailedView(false)
    }
  }

  if (fetchedRecords) {
    const prodCardOver = fetchedRecords.map((fetchedRecords: any) => <ProdCardsOverview filteredRecords={fetchedRecords} changeViewStatus={changeViewStatus}/>)
    return (
      <div className="fabrica">
        <form className="top-filter-search-prods">
          <div className="crear-reporte-queso-marco">
            <select className="select-month-search" onChange={(event) => setSelectedMonth(event.target.value)}>
            {monthSelection.map(list => (
              <option className="option-date-style" value={list.Value}>
                {list.Name}
              </option>
            ))}
            </select>
            <select className="select-year-search" onChange={(event) => setSelectedYear(event.target.value)}>
            {yearSelection.map(list => (
              <option className="option-date-style" value={list.Value}>
                {list.Name}
              </option>
            ))}
            </select>
            <br></br>
            <button className='read-prod-records-btn' onClick={readProdRecords}>Buscar Reportes</button>
          </div>
        </form>
        {!detailedView ? <p>{prodCardOver}</p> : <EditarReporteProdAdmin selectedRecord={selectedRecordById} changeViewStatus={changeViewStatus}/>}
        <NavLink className='go-menu-entradas-prod-admin' to="/go-menu-entradas-prod-admin">
          <p>Menu Entradas</p>
        </NavLink>
      </div>
    );
  }


  return (
    <div className="fabrica">
      <form className="top-filter-search-prods">
        <div className="crear-reporte-queso-marco">
          <select className="select-month-search" onChange={(event) => setSelectedMonth(event.target.value)}>
          {monthSelection.map(list => (
            <option className="option-date-style" value={list.Value}>
              {list.Name}
            </option>
          ))}
          </select>
          <select className="select-year-search" onChange={(event) => setSelectedYear(event.target.value)}>
          {yearSelection.map(list => (
            <option className="option-date-style" value={list.Value}>
              {list.Name}
            </option>
          ))}
          </select>
          <br></br>
          <button className='read-prod-records-btn' onClick={readProdRecords}>Buscar Reportes</button>
        </div>
      </form>
      {/* {fetchedRecords ? <p>{fetchedRecords[0].quesoname}</p> : <p>No hay records dentro de esta feacha</p>} */}
      {/* {fetchedRecords ? <p>prodCardOver</p> : <p>No hay records dentro de esta feacha</p>} */}
      <NavLink className='go-menu-entradas-prod-admin' to="/go-menu-entradas-prod-admin">
        <p>Menu Entradas</p>
      </NavLink>
    </div>
  );

  // return (
  //   <p>Loading...</p>
  // )
};
