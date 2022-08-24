import React from 'react';
// import './buscarReporteOutProdAdmin.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { fetchAllProdRecords } from '../FetchProductionRecords';
import { ProdOutCardsOverviewProd } from './prodOutCardsOverviewProd';
import { EditarReporteOutProdProd } from './editarReporteOutProdProd';

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

export const ReporteSalidaCreadosProd: React.FC = () => {
  const [ selectedCategory, setSelectedCategory ] = useState<any>();
  const [ selectedMonth, setSelectedMonth ] = useState<any>();
  const [ selectedYear, setSelectedYear ] = useState<any>();
  const [ fetchedRecords, setFetchedRecords] = useState<any>();
  const [ detailedView, setDetailedView] = useState<boolean>(false);
  const [ selectedRecordById, setSelectedRecordById] = useState<RecordBody>();

  const cheeseCategory = [
    {Name:'Selecione Categoria', Value:''}, {Name:'Todos los quesos', Value:'Todos'}, 
    {Name:'Baraloso', Value:'Baraloso'}, {Name:'Comiteco', Value:'Comiteco'}, 
    {Name:'Comiteco BA', Value:'Comiteco BA'}, {Name:'Comiteco AA', Value:'Comiteco AA'}
  ];

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
      const cheeseCat = dataRecords.quesoname;
      const status = dataRecords.quesostatus;
      const yearData = dataRecords.datein.split('-')[0];
      const monthData = dataRecords.datein.split('-')[1];
      if (status === "Salida" && yearData === selectedYear && monthData === selectedMonth && selectedCategory === 'Todos') {
        acc.push(dataRecords)
      }
      if (status === "Salida" && yearData === selectedYear && monthData === selectedMonth && selectedCategory === cheeseCat) {
        acc.push(dataRecords)
      }
      return acc;
    }, [])
    setFetchedRecords(dataFiltered);
  }

  const makeFetch = (): void => {
    fetchAllProdRecords()
    .then(data => filterDataByDate(data))
    .catch(error => console.log(error))
  }

  const readProdRecords = (event: { preventDefault: () => void; }): void => {
    event.preventDefault();
    makeFetch();
  }

  const changeViewStatus = (viewStatus?: string, prodId?: number): void => {
    if (viewStatus === 'detailedView') {
      const selectedRecod = fetchedRecords.filter((fetchedRecords: any) => fetchedRecords.id === prodId);
      setSelectedRecordById(selectedRecod[0])
      setDetailedView(true)
    }
    if (viewStatus === 'overView') {
      setDetailedView(false)
    }
  }

  if (fetchedRecords) {
    const prodCardOver = fetchedRecords.map((fetchedRecords: any) => <ProdOutCardsOverviewProd filteredRecords={fetchedRecords} changeViewStatus={changeViewStatus}/>)
    return (
      <div className="fabrica">
        <form className="top-filter-search-prods">
          <select className="select-month-search" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
            {cheeseCategory.map(list => (
              <option className="option-choice-style" value={list.Value}>
                {list.Name}
              </option>
            ))}
          </select>
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
          <button className='read-prod-records-btn' onClick={readProdRecords}>Buscar Reportes</button>
        </form>
        {!detailedView ? <p>{prodCardOver}</p> : <EditarReporteOutProdProd selectedRecord={selectedRecordById} changeViewStatus={changeViewStatus}/>}
        <NavLink to="/go-menu-salidas-prod-prod">
          <p className='go-back-menu-entradas-prod-admin-busqueda'>Menu Salidas</p>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="fabrica">
      <form className="top-filter-search-prods">
        <select className="select-month-search" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
          {cheeseCategory.map(list => (
            <option className="option-choice-style" value={list.Value}>
              {list.Name}
            </option>
          ))}
        </select>
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
        <button className='read-prod-records-btn' onClick={readProdRecords}>Buscar Reportes</button>
      </form>
      <NavLink to="/go-menu-salidas-prod-prod">
        <p className='go-back-menu-entradas-prod-admin-busqueda'>Menu Salidas</p>
      </NavLink>
    </div>
  );
};