import React from 'react';
import './monthlyProdReport.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  filteredRecords?: Array<RecordBody>
}

export const MonthlyProdReport: React.FC<Props> = ({ filteredRecords }) => {
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
  const [ fetchedData, setFetchedData ] = useState <any>();

  const matchDates = (): void  => {
    // setFetchedData(filteredRecords)
    if (fetchedData) {
      fetchedData.map((record: any) => {
        // console.log(record)
        setDay1(record.quesoname)
      })
    }
    console.log(filteredRecords)
    // filteredRecords.map((record: any) => {
    //   setDay1(record.quesoname)
    // })
  }

  useEffect(() => {
    matchDates()
  }, [])

  if (filteredRecords) {
    return (
      <div className="monthlyProdReport">
        <p>1 : {day1}</p>
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
        <p>31 : {day31}</p>
      </div>
    );
  }

  return (
    <p>Test</p>
  )
};