import React from 'react';
import './crearNotaProdAdminII.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { MonthlyProdReport } from './monthlyProdReport';
import { fetchAllProdRecords } from '../FetchProductionRecords';

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
  refrigerationtype?: string
}

export const CrearNotaProdAdmin: React.FC = () => {
  const [ selectedMonth, setSelectedMonth ] = useState<any>();
  const [ selectedYear, setSelectedYear ] = useState<any>();
  const [ fetchedRecords, setFetchedRecords] = useState<any>([]);
  const [ day1, setDay1 ] =  useState<any>();
  const [ day2, setDay2 ] =  useState<any>();
  const [ day3, setDay3 ] =  useState<any>();
  const [ day4, setDay4 ] =  useState<any>();
  const [ day5, setDay5 ] =  useState<any>();
  const [ day6, setDay6 ] =  useState<any>();
  const [ day7, setDay7 ] =  useState<any>();
  const [ day8, setDay8 ] =  useState<any>();
  const [ day9, setDay9 ] =  useState<any>();
  const [ day10, setDay10 ] =  useState<any>();
  const [ day11, setDay11 ] =  useState<any>();
  const [ day12, setDay12 ] =  useState<any>();
  const [ day13, setDay13 ] =  useState<any>();
  const [ day14, setDay14 ] =  useState<any>();
  const [ day15, setDay15 ] =  useState<any>();
  const [ day16, setDay16 ] =  useState<any>();
  const [ day17, setDay17 ] =  useState<any>();
  const [ day18, setDay18 ] =  useState<any>();
  const [ day19, setDay19 ] =  useState<any>();
  const [ day20, setDay20 ] =  useState<any>();
  const [ day21, setDay21 ] =  useState<any>();
  const [ day22, setDay22 ] =  useState<any>();
  const [ day23, setDay23 ] =  useState<any>();
  const [ day24, setDay24 ] =  useState<any>();
  const [ day25, setDay25 ] =  useState<any>();
  const [ day26, setDay26 ] =  useState<any>();
  const [ day27, setDay27 ] =  useState<any>();
  const [ day28, setDay28 ] =  useState<any>();
  const [ day29, setDay29 ] =  useState<any>();
  const [ day30, setDay30 ] =  useState<any>();
  const [ day31, setDay31 ] =  useState<any>();

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

  const filterDataByDate = (data:Array<RecordBody>): void => {
      const dataFiltered = data.reduce((acc:any, dataRecords: any) => {
        const yearData = dataRecords.datein.split('-')[0];
        const monthData = dataRecords.datein.split('-')[1]
        if (yearData === selectedYear && monthData === selectedMonth && dataRecords.approvepord === "Verdadero") {
          acc.push(dataRecords)
        }
        return acc;
      }, [])
      setFetchedRecords(dataFiltered);
      // displayDates();
      console.log(fetchedRecords)
  }

  const makeFetch = (): void => {
    fetchAllProdRecords()
    .then(data => filterDataByDate(data))
    // .then(() => displayDates())
    .catch(error => console.log(error))
  }

  const readProdRecords = (event: { preventDefault: () => void; }): void => {
    event.preventDefault();
    makeFetch();
    displayDates();
  }

  const displayDates = () => {
    fetchedRecords.map((record: any) => {
      if (record.datein.split('-')[2].slice(0,2) == 1) {
        setDay1(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 2) {
        setDay2(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 3) {
        setDay3(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 4) {
        setDay4(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 5) {
        setDay5(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 6) {
        setDay6(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 7) {
        setDay7(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 8) {
        setDay8(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 9) {
        setDay9(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 10) {
        setDay10(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 11) {
        setDay11(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 12) {
        setDay12(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 13) {
        setDay13(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 14) {
        setDay14(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 15) {
        setDay15(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 16) {
        setDay16(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 17) {
        setDay17(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 18) {
        setDay18(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 19) {
        setDay19(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 20) {
        setDay20(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 21) {
        setDay21(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 22) {
        setDay22(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 23) {
        setDay23(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 24) {
        setDay24(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 25) {
        setDay25(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 26) {
        setDay26(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 27) {
        setDay27(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 28) {
        setDay28(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 29) {
        setDay29(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 30) {
        setDay30(record.quesoname)
      }
      if (record.datein.split('-')[2].slice(0,2) == 31) {
        setDay31(record.quesoname)
      }
    })
  }

  if (fetchedRecords) {
    return (
      <div className="crearNotaProdAdmin">
        <div className="fabrica">
          <form className="top-filter-search-prods">
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
            <button className='read-prod-records-btn' onClick={readProdRecords}>Crear Reporte</button>
          </form>
          {/* <MonthlyProdReport filteredRecords={fetchedRecords} /> */}
          <div className="monthly-prod-report">
            <p className="report-date">Fecha</p>
            <p className="report-date-1">01</p>
            <p className="report-date-2">02</p>
            <p className="report-date-3">03</p>
            <p className="report-date-4">04</p>
            <p className="report-date-5">05</p>
            <p className="report-date-6">06</p>
            <p className="report-date-7">07</p>
            <p className="report-date-8">08</p>
            <p className="report-date-9">09</p>
            <p className="report-date-10">10</p>
            <p className="report-date-11">11</p>
            <p className="report-date-12">12</p>
            <p className="report-date-13">13</p>
            <p className="report-date-14">14</p>
            <p className="report-date-15">15</p>
            <p className="report-date-16">16</p>
            <p className="report-date-17">17</p>
            <p className="report-date-18">18</p>
            <p className="report-date-19">19</p>
            <p className="report-date-20">20</p>
            <p className="report-date-21">21</p>
            <p className="report-date-22">22</p>
            <p className="report-date-23">23</p>
            <p className="report-date-24">24</p>
            <p className="report-baraloso">Baraloso</p>
            <p className="report-baraloso-qz">Qz</p>
            <p className="report-baraloso-oa">Oa</p>
            <p className="report-baraloso-pr">$</p>
            <p className="report-comiteco">Comiteco</p>
            <p className="report-comiteco-qz">Qz</p>
            <p className="report-comiteco-oa">Oa</p>
            <p className="report-comiteco-pr">$</p>
            <p className="report-comiteco-aa">Comiteco AA</p>
            <p className="report-comiteco-aa-qz">Qz</p>
            <p className="report-comiteco-aa-oa">Oa</p>
            <p className="report-comiteco-aa-pr">$</p>
            <p className="report-comiteco-ba">Comiteco BA</p>
            <p className="report-comiteco-ba-qz">Qz</p>
            <p className="report-comiteco-ba-oa">Oa</p>
            <p className="report-comiteco-ba-pr">$</p>
            <p className="report-flor-aa">Flor AA</p>
            <p className="report-flor-aa-qz">Qz</p>
            <p className="report-flor-aa-oa">Oa</p>
            <p className="report-flor-aa-pr">$</p>
            <p className="report-flor-ba">Flor BA</p>
            <p className="report-flor-ba-qz">Qz</p>
            <p className="report-flor-ba-oa">Oa</p>
            <p className="report-flor-ba-pr">$</p>
            {/* <p>1 : {day1}</p>
            <p>2 : {day2}</p>
            <p>3 : {day3}</p>
            <p>4 : {day4}</p>
            <p>5 : {day5}</p>
            <p>6 : {day6}</p>
            <p>7 : {day7}</p>
            <p>8 : {day8}</p>
            <p>9 : {day9}</p>
            <p>10 : {day10}</p>
            <p>11 : {day11}</p>
            <p>12 : {day12}</p>
            <p>13 : {day13}</p>
            <p>14 : {day14}</p>
            <p>15 : {day15}</p>
            <p>16 : {day16}</p>
            <p>17 : {day17}</p>
            <p>18 : {day18}</p>
            <p>19 : {day19}</p>
            <p>20 : {day20}</p>
            <p>21 : {day21}</p>
            <p>22 : {day22}</p>
            <p>23 : {day23}</p>
            <p>24 : {day24}</p>
            <p>25 : {day25}</p>
            <p>26 : {day26}</p>
            <p>27 : {day27}</p>
            <p>28 : {day28}</p>
            <p>29 : {day19}</p>
            <p>30 : {day30}</p>
            <p>31 : {day31}</p> */}
          </div>
          <NavLink to="/go-menu-entradas-prod-admin">
            <p className='go-back-menu-entradas-prod-admin-busqueda'>Menu Entradas</p>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="crearNotaProdAdmin">
      <div className="fabrica">
        <form className="top-filter-search-prods">
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
          <button className='read-prod-records-btn' onClick={readProdRecords}>Crear Reporte</button>
        </form>
        <NavLink to="/go-menu-entradas-prod-admin">
          <p className='go-back-menu-entradas-prod-admin-busqueda'>Menu Entradas</p>
        </NavLink>
      </div>
    </div>
  );
};