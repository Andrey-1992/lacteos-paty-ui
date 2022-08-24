import React from 'react';
import './crearNotaProdOutAdmin.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
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

export const CrearNotaProdOutAdmin: React.FC = () => {
  const [ fetchedRecords, setFetchedRecords] = useState<any>([]);
  const [ selectedDate, setSelectedDate ] = useState<any>();
  const [ totalBaralosoDate, setTotalBaralosoDate ] =  useState<any>();
  const [ totalBaralosoPz, setTotalBaralosoPz ] =  useState<any>();
  const [ totalBaralosoKgs, setTotalBaralosoKgs ] =  useState<any>();
  const [ totalBaralosoPrice, setTotalBaralosoPrice ] =  useState<any>();
  const [ totalBaralosoPriceTotal, setTotalBaralosoPriceTotal ] =  useState<any>();
  const [ totalComitecoDate, setTotalComitecoDate ] =  useState<any>();
  const [ totalComitecoPz, setTotalComitecoPz ] =  useState<any>();
  const [ totalComitecoKgs, setTotalComitecoKgs ] =  useState<any>();
  const [ totalComitecoPrice, setTotalComitecoPrice ] =  useState<any>();
  const [ totalComitecoPriceTotal, setTotalComitecoPriceTotal ] =  useState<any>();
  const [ totalComitecoAaDate, setTotalComiteAaDate ] =  useState<any>();
  const [ totalComitecoAaPz, setTotalComitecoAaPz ] =  useState<any>();
  const [ totalComitecoAaKgs, setTotalComitecoAaKgs ] =  useState<any>();
  const [ totalComitecoAaPrice, setTotalComitecAaPrice ] =  useState<any>();
  const [ totalComitecoAaPriceTotal, setTotalComitecoAaPriceTotal ] =  useState<any>();
  const [ totalComitecoBaDate, setTotalComiteBaDate ] =  useState<any>();
  const [ totalComitecoBaPz, setTotalComitecoBaPz ] =  useState<any>();
  const [ totalComitecoBaKgs, setTotalComitecoBaKgs ] =  useState<any>();
  const [ totalComitecoBaPrice, setTotalComitecBaPrice ] =  useState<any>();
  const [ totalComitecoBaPriceTotal, setTotalComitecoBaPriceTotal ] =  useState<any>();

  const filterDataByDate = (data:Array<RecordBody>): void => {
      const dataFiltered = data.reduce((acc:any, dataRecords: any) => {
        if (dataRecords.dateout && dataRecords.quesostatus === 'Salida') {
          if (dataRecords.dateout.slice(0, 10) === selectedDate) {
            acc.push(dataRecords)
          }
        }

        return acc;
      }, [])

      setFetchedRecords(dataFiltered);
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
    calculateTotal();
  }

  const calculateTotal = () => {
    let baralosoDate = '';
    let baralosoPz = 0;
    let baralosoKgs = 0;
    let baralosoTotalPrice = 0;
    let comitecoDate = '';
    let comitecoPz = 0;
    let comitecoKgs = 0;
    let comitecoTotalPrice = 0;
    let comitecoAaDate = '';
    let comitecoAaPz = 0;
    let comitecoAaKgs = 0;
    let comitecoAaTotalPrice = 0;
    let comitecoBaDate = '';
    let comitecoBaPz = 0;
    let comitecoBaKgs = 0;
    let comitecoBaTotalPrice = 0;

    fetchedRecords.map((record: any) => {
      if (record.quesoname === "Baraloso") {
        baralosoDate = record.dateout.slice(0, 10)
        baralosoPz += parseInt(record.nopiecessalida);
        baralosoKgs += parseInt(record.weigthcurrent);
        setTotalBaralosoPrice(record.price);
      }
      if (record.quesoname === "Comiteco") {
        comitecoDate = record.dateout.slice(0, 10);
        comitecoPz += parseInt(record.nopiecessalida);
        comitecoKgs += parseInt(record.weigthcurrent);
        setTotalComitecoPrice(record.price);
      }
      if (record.quesoname === "Comiteco AA") {
        comitecoAaDate = record.dateout.slice(0, 10);
        comitecoAaPz += parseInt(record.nopiecessalida);
        comitecoAaKgs += parseInt(record.weigthcurrent);
        setTotalComitecAaPrice(record.price);
      }
      if (record.quesoname === "Comiteco BA") {
        comitecoBaDate = record.dateout.slice(0, 10);
        comitecoBaPz += parseInt(record.nopiecessalida);
        comitecoBaKgs += parseInt(record.weigthcurrent);
        setTotalComitecBaPrice(record.price);
      }
    })

    // baralosoTotalPrice = parseInt(totalBaralosoPrice * )

    setTotalBaralosoDate(baralosoDate);
    setTotalBaralosoPz(baralosoPz);
    setTotalBaralosoKgs(baralosoKgs);
    setTotalBaralosoPriceTotal(totalBaralosoPrice * baralosoKgs);
    setTotalComitecoDate(comitecoDate);
    setTotalComitecoPz(comitecoPz);
    setTotalComitecoKgs(comitecoKgs);
    setTotalComitecoPriceTotal(totalComitecoPrice * comitecoKgs);
    setTotalComiteAaDate(comitecoAaDate);
    setTotalComitecoAaPz(comitecoAaPz);
    setTotalComitecoAaKgs(comitecoAaKgs);
    setTotalComitecoAaPriceTotal(totalComitecoAaPrice * comitecoAaKgs);
    setTotalComiteBaDate(comitecoAaDate);
    setTotalComitecoBaPz(comitecoBaPz);
    setTotalComitecoBaKgs(comitecoBaKgs);
    setTotalComitecoBaPriceTotal(totalComitecoBaPrice * comitecoBaKgs);
  }

  const cleanStates = () => {
  }

  if (fetchedRecords) {
    return (
      <div className="crearNotaProdAdmin">
        <div className="fabrica">
          <form className="top-filter-search-prods">
          <input type="date" className="crear-reporte-queso-date" onChange={(event) => setSelectedDate(event.target.value)}></input>
          <button className='read-prod-records-btn' onClick={readProdRecords}>Crear Reporte</button>
          </form>
          <div className="monthly-prod-report-out">
            <p className="report-total-date-out">Fecha</p>
            <p className="report-total-tipo-queso-out">Tipo de Queso</p>
            <p className="report-total-pieces-out">Total de Piezas</p>
            <p className="report-total-olladas-out">Total de Kgs</p>
            <p className="report-total-price-per-piece-out">Precio por Pieza</p>
            <p className="report-total-total-price-out">Precio total</p>
            <p className="report-total-baraloso-date-out">{totalBaralosoDate}</p>
            <p className="report-total-baraloso-out">Baraloso</p>
            <p className="report-total-baraloso-pz-out">{totalBaralosoPz} pz</p>
            <p className="report-total-baraloso-olls-out">{totalBaralosoKgs} kgs</p>
            <p className="report-total-baraloso-price-per-piece-out">$ {totalBaralosoPrice}</p>
            <p className="report-total-baraloso-price-total-out">$ {totalBaralosoPriceTotal}</p>
            <p className="report-total-comiteco-date-out">{totalComitecoDate}</p>
            <p className="report-total-comiteco-out">Comiteco</p>
            <p className="report-total-comiteco-pz-out">{totalComitecoPz} pz</p>
            <p className="report-total-comiteco-olls-out">{totalComitecoKgs} kgs</p>
            <p className="report-total-comiteco-price-per-piece-out">$ {totalComitecoPrice}</p>
            <p className="report-total-comiteco-price-total-out">$ {totalComitecoPriceTotal}</p>
            <p className="report-total-comiteco-aa-date-out">{totalComitecoAaDate}</p>
            <p className="report-total-comiteco-aa-out">Comiteco AA</p>
            <p className="report-total-comiteco-aa-pz-out">{totalComitecoAaPz} pz</p>
            <p className="report-total-comiteco-aa-olls-out">{totalComitecoAaKgs} kgs</p>
            <p className="report-total-comiteco-aa-price-per-piece-out">$ {totalComitecoAaPrice}</p>
            <p className="report-total-comiteco-aa-price-total-out">$ {totalComitecoAaPriceTotal}</p>
            <p className="report-total-comiteco-ba-date-out">{totalComitecoBaDate}</p>
            <p className="report-total-comiteco-ba-out">Comiteco BA</p>
            <p className="report-total-comiteco-ba-pz-out">{totalComitecoBaPz} pz</p>
            <p className="report-total-comiteco-ba-olls-out">{totalComitecoBaKgs} kgs</p>
            <p className="report-total-comiteco-ba-price-per-piece-out">$ {totalComitecoBaPrice}</p>
            <p className="report-total-comiteco-ba-price-total-out">$ {totalComitecoBaPriceTotal}</p>
          </div>
          <NavLink to="/go-menu-salidas-prod-admin">
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
        <input type="date" className="crear-reporte-queso-date-out" onChange={(event) => setSelectedDate(event.target.value)}></input>
        <button className='read-prod-records-btn' onClick={readProdRecords}>Crear Reporte</button>
        </form>
        <NavLink to="/go-menu-salidas-prod-admin">
          <p className='go-back-menu-entradas-prod-admin-busqueda'>Menu Entradas</p>
        </NavLink>
      </div>
    </div>
  );
};