import React from 'react';
import './crearNotaProdAdmin.css';
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
  approvepord?: string
}

export const CrearNotaProdAdmin: React.FC = () => {
  const [ selectedMonth, setSelectedMonth ] = useState<any>();
  const [ selectedYear, setSelectedYear ] = useState<any>();
  const [ fetchedRecords, setFetchedRecords] = useState<any>([]);
  const [ day1Name, setDay1Name ] =  useState<any>();
  const [ day1Pz, setDay1Pz ] =  useState<any>();
  const [ day1Olls, setDay1Olls ] =  useState<any>();
  const [ day2, setDay2 ] =  useState<any>();
  const [ day2Name, setDay2Name ] =  useState<any>();
  const [ day2Pz, setDay2Pz ] =  useState<any>();
  const [ day2Olls, setDay2Olls ] =  useState<any>();
  const [ day3, setDay3 ] =  useState<any>();
  const [ day3Name, setDay3Name ] =  useState<any>();
  const [ day3Pz, setDay3Pz ] =  useState<any>();
  const [ day3Olls, setDay3Olls ] =  useState<any>();
  const [ day4, setDay4 ] =  useState<any>();
  const [ day4Name, setDay4Name ] =  useState<any>();
  const [ day4Pz, setDay4Pz ] =  useState<any>();
  const [ day4Olls, setDay4Olls ] =  useState<any>();
  const [ day5, setDay5 ] =  useState<any>();
  const [ day5Name, setDay5Name ] =  useState<any>();
  const [ day5Pz, setDay5Pz ] =  useState<any>();
  const [ day5Olls, setDay5Olls ] =  useState<any>();
  const [ day6, setDay6 ] =  useState<any>();
  const [ day6Name, setDay6Name ] =  useState<any>();
  const [ day6Pz, setDay6Pz ] =  useState<any>();
  const [ day6Olls, setDay6Olls ] =  useState<any>();
  const [ day7, setDay7 ] =  useState<any>();
  const [ day7Name, setDay7Name ] =  useState<any>();
  const [ day7Pz, setDay7Pz ] =  useState<any>();
  const [ day7Olls, setDay7Olls ] =  useState<any>();
  const [ day8, setDay8 ] =  useState<any>();
  const [ day8Name, setDay8Name ] =  useState<any>();
  const [ day8Pz, setDay8Pz ] =  useState<any>();
  const [ day8Olls, setDay8Olls ] =  useState<any>();
  const [ day9, setDay9 ] =  useState<any>();
  const [ day9Name, setDay9Name ] =  useState<any>();
  const [ day9Pz, setDay9Pz ] =  useState<any>();
  const [ day9Olls, setDay9Olls ] =  useState<any>();
  const [ day10, setDay10 ] =  useState<any>();
  const [ day10Name, setDay10Name ] =  useState<any>();
  const [ day10Pz, setDay10Pz ] =  useState<any>();
  const [ day10Olls, setDay10Olls ] =  useState<any>();
  const [ day11, setDay11 ] =  useState<any>();
  const [ day11Name, setDay11Name ] =  useState<any>();
  const [ day11Pz, setDay11Pz ] =  useState<any>();
  const [ day11Olls, setDay11Olls ] =  useState<any>();
  const [ day12, setDay12 ] =  useState<any>();
  const [ day12Name, setDay12Name ] =  useState<any>();
  const [ day12Pz, setDay12Pz ] =  useState<any>();
  const [ day12Olls, setDay12Olls ] =  useState<any>();
  const [ day13, setDay13 ] =  useState<any>();
  const [ day13Name, setDay13Name ] =  useState<any>();
  const [ day13Pz, setDay13Pz ] =  useState<any>();
  const [ day13Olls, setDay13Olls ] =  useState<any>();
  const [ day14, setDay14 ] =  useState<any>();
  const [ day14Name, setDay14Name ] =  useState<any>();
  const [ day14Pz, setDay14Pz ] =  useState<any>();
  const [ day14Olls, setDay14Olls ] =  useState<any>();
  const [ day15, setDay15 ] =  useState<any>();
  const [ day15Name, setDay15Name ] =  useState<any>();
  const [ day15Pz, setDay15Pz ] =  useState<any>();
  const [ day15Olls, setDay15Olls ] =  useState<any>();
  const [ day16, setDay16 ] =  useState<any>();
  const [ day16Name, setDay16Name ] =  useState<any>();
  const [ day16Pz, setDay16Pz ] =  useState<any>();
  const [ day16Olls, setDay16Olls ] =  useState<any>();
  const [ day17, setDay17 ] =  useState<any>();
  const [ day17Name, setDay17Name ] =  useState<any>();
  const [ day17Pz, setDay17Pz ] =  useState<any>();
  const [ day17Olls, setDay17Olls ] =  useState<any>();
  const [ day18, setDay18 ] =  useState<any>();
  const [ day18Name, setDay18Name ] =  useState<any>();
  const [ day18Pz, setDay18Pz ] =  useState<any>();
  const [ day18Olls, setDay18Olls ] =  useState<any>();
  const [ day19, setDay19 ] =  useState<any>();
  const [ day19Name, setDay19Name ] =  useState<any>();
  const [ day19Pz, setDay19Pz ] =  useState<any>();
  const [ day19Olls, setDay19Olls ] =  useState<any>();
  const [ day20, setDay20 ] =  useState<any>();
  const [ day20Name, setDay20Name ] =  useState<any>();
  const [ day20Pz, setDay20Pz ] =  useState<any>();
  const [ day20Olls, setDay20Olls ] =  useState<any>();
  const [ day21, setDay21 ] =  useState<any>();
  const [ day21Name, setDay21Name ] =  useState<any>();
  const [ day21Pz, setDay21Pz ] =  useState<any>();
  const [ day21Olls, setDay21Olls ] =  useState<any>();
  const [ day22, setDay22 ] =  useState<any>();
  const [ day22Name, setDay22Name ] =  useState<any>();
  const [ day22Pz, setDay22Pz ] =  useState<any>();
  const [ day22Olls, setDay22Olls ] =  useState<any>();
  const [ day23, setDay23 ] =  useState<any>();
  const [ day23Name, setDay23Name ] =  useState<any>();
  const [ day23Pz, setDay23Pz ] =  useState<any>();
  const [ day23Olls, setDay23Olls ] =  useState<any>();
  const [ day24, setDay24 ] =  useState<any>();
  const [ day24Name, setDay24Name ] =  useState<any>();
  const [ day24Pz, setDay24Pz ] =  useState<any>();
  const [ day24Olls, setDay24Olls ] =  useState<any>();
  const [ day25, setDay25 ] =  useState<any>();
  const [ day25Name, setDay25Name ] =  useState<any>();
  const [ day25Pz, setDay25Pz ] =  useState<any>();
  const [ day25Olls, setDay25Olls ] =  useState<any>();
  const [ day26, setDay26 ] =  useState<any>();
  const [ day26Name, setDay26Name ] =  useState<any>();
  const [ day26Pz, setDay26Pz ] =  useState<any>();
  const [ day26Olls, setDay26Olls ] =  useState<any>();
  const [ day27, setDay27 ] =  useState<any>();
  const [ day27Name, setDay27Name ] =  useState<any>();
  const [ day27Pz, setDay27Pz ] =  useState<any>();
  const [ day27Olls, setDay27Olls ] =  useState<any>();
  const [ day28, setDay28 ] =  useState<any>();
  const [ day28Name, setDay28Name ] =  useState<any>();
  const [ day28Pz, setDay28Pz ] =  useState<any>();
  const [ day28Olls, setDay28Olls ] =  useState<any>();
  const [ day29, setDay29 ] =  useState<any>();
  const [ day29Name, setDay29Name ] =  useState<any>();
  const [ day29Pz, setDay29Pz ] =  useState<any>();
  const [ day29Olls, setDay29Olls ] =  useState<any>();
  const [ day30, setDay30 ] =  useState<any>();
  const [ day30Name, setDay30Name ] =  useState<any>();
  const [ day30Pz, setDay30Pz ] =  useState<any>();
  const [ day30Olls, setDay30Olls ] =  useState<any>();
  const [ day31, setDay31 ] =  useState<any>();
  const [ day31Name, setDay31Name ] =  useState<any>();
  const [ day31Pz, setDay31Pz ] =  useState<any>();
  const [ day31Olls, setDay31Olls ] =  useState<any>();
  const [ totalBaralosoPz, setTotalBaralosoPz ] =  useState<any>();
  const [ totalBaralosoOlls, setTotalBaralosoOlls ] =  useState<any>();
  const [ totalComitecoPz, setTotalComitecoPz ] =  useState<any>();
  const [ totalComitecoOlls, setTotalComitecoOlls ] =  useState<any>();
  const [ totalComitecoAaPz, setTotalComitecoAaPz ] =  useState<any>();
  const [ totalComitecoAaOlls, setTotalComitecoAaOlls ] =  useState<any>();
  const [ totalComitecoBaPz, setTotalComitecoBaPz ] =  useState<any>();
  const [ totalComitecoBaOlls, setTotalComitecoBaOlls ] =  useState<any>();

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
      displayDates();
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
    // displayDates();
    calculateTotal();
  }

  const calculateTotal = () => {
    let baralosoPz = 0;
    let baralosoOlls = 0;
    let comitecoPz = 0;
    let comitecoOlls = 0;
    let comitecoAaPz = 0;
    let comitecoAaOlls = 0;
    let comitecoBaPz = 0;
    let comitecoBaOlls = 0;

    fetchedRecords.map((record: any) => {
      if (record.quesoname === "Baraloso") {
        baralosoPz += parseInt(record.nopieces);
        baralosoOlls += parseInt(record.holladas);
      }
      if (record.quesoname === "Comiteco") {
        comitecoPz += parseInt(record.nopieces);
        comitecoOlls += parseInt(record.holladas);
      }
      if (record.quesoname === "Comiteco AA") {
        comitecoAaPz += parseInt(record.nopieces);
        comitecoAaOlls += parseInt(record.holladas);
      }
      if (record.quesoname === "Comiteco BA") {
        comitecoBaPz += parseInt(record.nopieces);
        comitecoBaOlls += parseInt(record.holladas);
      }
    })

    setTotalBaralosoPz(baralosoPz);
    setTotalBaralosoOlls(baralosoOlls);
    setTotalComitecoPz(comitecoPz);
    setTotalComitecoOlls(comitecoOlls);
    setTotalComitecoAaPz(comitecoAaPz);
    setTotalComitecoAaOlls(comitecoAaOlls);
    setTotalComitecoBaPz(comitecoBaPz);
    setTotalComitecoBaOlls(comitecoBaOlls);
  }

  const cleanStates = () => {
    setDay1Name('');
    setDay1Pz('');
    setDay1Olls('');
    setDay2Name('');
    setDay2Pz('');
    setDay2Olls('');
    setDay3Name('');
    setDay3Pz('');
    setDay3Olls('');
    setDay4Name('');
    setDay4Pz('');
    setDay4Olls('');
    setDay5Name('');
    setDay5Pz('');
    setDay5Olls('');
    setDay6Name('');
    setDay6Pz('');
    setDay6Olls('');
    setDay7Name('');
    setDay7Pz('');
    setDay7Olls('');
    setDay8Name('');
    setDay8Pz('');
    setDay8Olls('');
    setDay9Name('');
    setDay9Pz('');
    setDay9Olls('');
    setDay10Name('');
    setDay10Pz('');
    setDay10Olls('');
    setDay11Name('');
    setDay11Pz('');
    setDay11Olls('');
    setDay12Name('');
    setDay12Pz('');
    setDay12Olls('');
    setDay13Name('');
    setDay13Pz('');
    setDay13Olls('');
    setDay14Name('');
    setDay14Pz('');
    setDay14Olls('');
    setDay15Name('');
    setDay15Pz('');
    setDay15Olls('');
    setDay16Name('');
    setDay16Pz('');
    setDay16Olls('');
    setDay17Name('');
    setDay17Pz('');
    setDay17Olls('');
    setDay18Name('');
    setDay18Pz('');
    setDay18Olls('');
    setDay19Name('');
    setDay19Pz('');
    setDay19Olls('');
    setDay20Name('');
    setDay20Pz('');
    setDay20Olls('');
    setDay21Name('');
    setDay21Pz('');
    setDay21Olls('');
    setDay22Name('');
    setDay22Pz('');
    setDay22Olls('');
    setDay23Name('');
    setDay23Pz('');
    setDay23Olls('');
    setDay24Name('');
    setDay24Pz('');
    setDay24Olls('');
    setDay25Name('');
    setDay25Pz('');
    setDay25Olls('');
    setDay26Name('');
    setDay26Pz('');
    setDay26Olls('');
    setDay27Name('');
    setDay27Pz('');
    setDay27Olls('');
    setDay28Name('');
    setDay28Pz('');
    setDay28Olls('');
    setDay29Name('');
    setDay29Pz('');
    setDay29Olls('');
    setDay30Name('');
    setDay30Pz('');
    setDay30Olls('');
    setDay31Name('');
    setDay31Pz('');
    setDay31Olls('');
  }

  const displayDates = () => {
    cleanStates();

    fetchedRecords.map((record: any) => {
      if (record.datein.split('-')[2].slice(0,2) == 1) {
        setDay1Name(record.quesoname);
        setDay1Pz(record.nopieces);
        setDay1Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 2) {
        setDay2Name(record.quesoname);
        setDay2Pz(record.nopieces);
        setDay2Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 3) {
        setDay3Name(record.quesoname);
        setDay3Pz(record.nopieces);
        setDay3Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 4) {
        setDay4Name(record.quesoname);
        setDay4Pz(record.nopieces);
        setDay4Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 5) {
        setDay5Name(record.quesoname);
        setDay5Pz(record.nopieces);
        setDay5Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 6) {
        setDay6Name(record.quesoname);
        setDay6Pz(record.nopieces);
        setDay6Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 7) {
        setDay7Name(record.quesoname);
        setDay7Pz(record.nopieces);
        setDay7Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 8) {
        setDay8Name(record.quesoname);
        setDay8Pz(record.nopieces);
        setDay8Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 9) {
        setDay9Name(record.quesoname);
        setDay9Pz(record.nopieces);
        setDay9Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 10) {
        setDay10Name(record.quesoname);
        setDay10Pz(record.nopieces);
        setDay10Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 11) {
        setDay11Name(record.quesoname);
        setDay11Pz(record.nopieces);
        setDay11Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 12) {
        setDay12Name(record.quesoname);
        setDay12Pz(record.nopieces);
        setDay12Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 13) {
        setDay13Name(record.quesoname);
        setDay13Pz(record.nopieces);
        setDay13Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 14) {
        setDay14Name(record.quesoname);
        setDay14Pz(record.nopieces);
        setDay14Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 15) {
        setDay15Name(record.quesoname);
        setDay15Pz(record.nopieces);
        setDay15Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 16) {
        setDay16Name(record.quesoname);
        setDay16Pz(record.nopieces);
        setDay16Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 17) {
        setDay17Name(record.quesoname);
        setDay17Pz(record.nopieces);
        setDay17Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 18) {
        setDay18Name(record.quesoname);
        setDay18Pz(record.nopieces);
        setDay18Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 19) {
        setDay19Name(record.quesoname);
        setDay19Pz(record.nopieces);
        setDay19Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 20) {
        setDay20Name(record.quesoname);
        setDay20Pz(record.nopieces);
        setDay20Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 21) {
        setDay21Name(record.quesoname);
        setDay21Pz(record.nopieces);
        setDay21Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 22) {
        setDay22Name(record.quesoname);
        setDay22Pz(record.nopieces);
        setDay22Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 23) {
        setDay23Name(record.quesoname);
        setDay23Pz(record.nopieces);
        setDay23Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 24) {
        setDay24Name(record.quesoname);
        setDay24Pz(record.nopieces);
        setDay24Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 25) {
        setDay25Name(record.quesoname);
        setDay25Pz(record.nopieces);
        setDay25Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 26) {
        setDay26Name(record.quesoname);
        setDay26Pz(record.nopieces);
        setDay26Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 27) {
        setDay27Name(record.quesoname);
        setDay27Pz(record.nopieces);
        setDay27Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 28) {
        setDay28Name(record.quesoname);
        setDay28Pz(record.nopieces);
        setDay28Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 29) {
        setDay29Name(record.quesoname);
        setDay29Pz(record.nopieces);
        setDay29Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 30) {
        setDay20Name(record.quesoname);
        setDay20Pz(record.nopieces);
        setDay20Olls(record.holladas);
      }
      if (record.datein.split('-')[2].slice(0,2) == 31) {
        setDay31Name(record.quesoname);
        setDay31Pz(record.nopieces);
        setDay31Olls(record.holladas);
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
            <p className="report-name">Queso</p>
            <p className="report-pieces">Piezas</p>
            <p className="report-olladas">Olladas</p>
            <p className="report-date-1">01</p>
            <p className="report-name-01">{day1Name}</p>
            <p className="report-pieces-01">{day1Pz} pz</p>
            <p className="report-olladas-01">{day1Olls} olls</p>
            <p className="report-date-2">02</p>
            <p className="report-name-02">{day2Name}</p>
            <p className="report-pieces-02">{day2Pz} pz</p>
            <p className="report-olladas-02">{day2Olls} olls</p>
            <p className="report-date-3">03</p>
            <p className="report-name-03">{day3Name}</p>
            <p className="report-pieces-03">{day3Pz} pz</p>
            <p className="report-olladas-03">{day3Olls} olls</p>
            <p className="report-date-4">04</p>
            <p className="report-name-04">{day4Name}</p>
            <p className="report-pieces-04">{day4Pz} pz</p>
            <p className="report-olladas-04">{day4Olls} olls</p>
            <p className="report-date-5">05</p>
            <p className="report-name-05">{day5Name}</p>
            <p className="report-pieces-05">{day5Pz} pz</p>
            <p className="report-olladas-05">{day5Olls} olss</p>
            <p className="report-date-6">06</p>
            <p className="report-name-06">{day6Name}</p>
            <p className="report-pieces-06">{day6Pz} pz</p>
            <p className="report-olladas-06">{day6Olls} olls</p>
            <p className="report-date-7">07</p>
            <p className="report-name-07">{day7Name}</p>
            <p className="report-pieces-07">{day7Pz} pz</p>
            <p className="report-olladas-07">{day7Olls} olls</p>
            <p className="report-date-8">08</p>
            <p className="report-name-08">{day8Name}</p>
            <p className="report-pieces-08">{day8Pz} pz</p>
            <p className="report-olladas-08">{day8Olls} olls</p>
            <p className="report-date-9">09</p>
            <p className="report-name-09">{day9Name}</p>
            <p className="report-pieces-09">{day9Pz} pz</p>
            <p className="report-olladas-09">{day9Olls} olls</p>
            <p className="report-date-10">10</p>
            <p className="report-name-10">{day10Name}</p>
            <p className="report-pieces-10">{day10Pz} pz</p>
            <p className="report-olladas-10">{day10Olls} olls</p>
            <p className="report-date-11">11</p>
            <p className="report-name-11">{day11Name}</p>
            <p className="report-pieces-11">{day11Pz} pz</p>
            <p className="report-olladas-11">{day11Olls} olls</p>
            <p className="report-date-12">12</p>
            <p className="report-name-12">{day12Name}</p>
            <p className="report-pieces-12">{day12Pz} pz</p>
            <p className="report-olladas-12">{day12Olls} olls</p>
            <p className="report-date-13">13</p>
            <p className="report-name-13">{day13Name}</p>
            <p className="report-pieces-13">{day13Pz} pz</p>
            <p className="report-olladas-13">{day13Olls} olls</p>
            <p className="report-date-14">14</p>
            <p className="report-name-14">{day14Name}</p>
            <p className="report-pieces-14">{day14Pz} pz</p>
            <p className="report-olladas-14">{day14Olls} olls</p>
            <p className="report-date-15">15</p>
            <p className="report-name-15">{day15Name}</p>
            <p className="report-pieces-15">{day15Pz} pz</p>
            <p className="report-olladas-15">{day15Olls} olls</p>
            <p className="report-date-16">16</p>
            <p className="report-name-16">{day16Name}</p>
            <p className="report-pieces-16">{day16Pz} pz</p>
            <p className="report-olladas-16">{day16Olls} olls</p>
            <p className="report-date-17">17</p>
            <p className="report-name-17">{day17Name}</p>
            <p className="report-pieces-17">{day17Pz} pz</p>
            <p className="report-olladas-17">{day17Olls} olls</p>
            <p className="report-date-18">18</p>
            <p className="report-name-18">{day18Name}</p>
            <p className="report-pieces-18">{day18Pz} pz</p>
            <p className="report-olladas-18">{day18Olls} olls</p>
            <p className="report-date-19">19</p>
            <p className="report-name-19">{day19Name}</p>
            <p className="report-pieces-19">{day19Pz} pz</p>
            <p className="report-olladas-19">{day19Olls} olls</p>
            <p className="report-date-20">20</p>
            <p className="report-name-20">{day20Name}</p>
            <p className="report-pieces-20">{day20Pz} pz</p>
            <p className="report-olladas-20">{day20Olls} olls</p>
            <p className="report-date-21">21</p>
            <p className="report-name-21">{day21Name}</p>
            <p className="report-pieces-21">{day21Pz} pz</p>
            <p className="report-olladas-21">{day21Olls} olls</p>
            <p className="report-date-22">22</p>
            <p className="report-name-22">{day22Name}</p>
            <p className="report-pieces-22">{day22Pz} pz</p>
            <p className="report-olladas-22">{day22Olls} olls</p>
            <p className="report-date-23">23</p>
            <p className="report-name-23">{day23Name}</p>
            <p className="report-pieces-23">{day23Pz} pz</p>
            <p className="report-olladas-23">{day23Olls} olls</p>
            <p className="report-date-24">24</p>
            <p className="report-name-24">{day24Name}</p>
            <p className="report-pieces-24">{day24Pz} pz</p>
            <p className="report-olladas-24">{day24Olls} olls</p>
            <p className="report-date-25">25</p>
            <p className="report-name-25">{day25Name}</p>
            <p className="report-pieces-25">{day25Pz} pz</p>
            <p className="report-olladas-25">{day25Olls} olls</p>
            <p className="report-date-26">26</p>
            <p className="report-name-26">{day26Name}</p>
            <p className="report-pieces-26">{day26Pz} pz</p>
            <p className="report-olladas-26">{day26Olls} olls</p>
            <p className="report-date-27">27</p>
            <p className="report-name-27">{day27Name}</p>
            <p className="report-pieces-27">{day27Pz} pz</p>
            <p className="report-olladas-27">{day27Olls} olls</p>
            <p className="report-date-28">28</p>
            <p className="report-name-28">{day28Name}</p>
            <p className="report-pieces-28">{day28Pz} pz</p>
            <p className="report-olladas-28">{day28Olls} olls</p>
            <p className="report-date-29">29</p>
            <p className="report-name-29">{day29Name}</p>
            <p className="report-pieces-29">{day29Pz} pz</p>
            <p className="report-olladas-29">{day29Olls} olls</p>
            <p className="report-date-30">30</p>
            <p className="report-name-30">{day30Name}</p>
            <p className="report-pieces-30">{day30Pz} pz</p>
            <p className="report-olladas-30">{day30Olls} olls</p>
            <p className="report-date-31">31</p>
            <p className="report-name-31">{day31Name}</p>
            <p className="report-pieces-31">{day31Pz} pz</p>
            <p className="report-olladas-31">{day31Olls} olls</p>
            <p className="report-total-tipo-queso">Tipo de Queso</p>
            <p className="report-total-pieces">Total de Piezas</p>
            <p className="report-total-olladas">Total de Olladas</p>
            <p className="report-total-baraloso">Baraloso</p>
            <p className="report-total-baraloso-pz">{totalBaralosoPz} pz</p>
            <p className="report-total-baraloso-olls">{totalBaralosoOlls} ollas</p>
            <p className="report-total-comiteco">Comiteco</p>
            <p className="report-total-comiteco-pz">{totalComitecoPz} pz</p>
            <p className="report-total-comiteco-olls">{totalComitecoOlls} ollas</p>
            <p className="report-total-comiteco-aa">Comiteco AA</p>
            <p className="report-total-comiteco-aa-pz">{totalComitecoAaPz} pz</p>
            <p className="report-total-comiteco-aa-olls">{totalComitecoAaOlls} ollas</p>
            <p className="report-total-comiteco-ba">Comiteco BA</p>
            <p className="report-total-comiteco-ba-pz">{totalComitecoBaPz} pz</p>
            <p className="report-total-comiteco-ba-olls">{totalComitecoBaOlls} ollas</p>
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