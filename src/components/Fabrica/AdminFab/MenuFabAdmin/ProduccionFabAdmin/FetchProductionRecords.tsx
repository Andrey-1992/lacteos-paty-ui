// GET Records Section --------------->
export const fetchAllProdRecords = async () => {
  try {
    const response = await fetch('http://localhost:4000/inventario-quesos')
    if (!response.ok || response.status === 500) {
      throw Error('Error fetching all factory production records')
    }
    const data = await response.json()
    return data
  } catch(err) {
    return err;
  }
}

// export const getProdRecordsByDate = async (month: string, year: string) => {
//   try {
//     const response = await fetch(`http://localhost:4000/inventario-quesos-by-date/${month}/${year}`)
//     if (!response.ok || response.status === 500) {
//       throw Error('Error fetching all factory production records')
//     }
//     const data = await response.json()
//     console.log(data)
//     return data
//   } catch(err) {
//     return err;
//   }
// }





// Create (POST) Records Section ----------->

interface Body {
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

export const createProdRecorduction = async (objBody: Body) => {
  try {
    const res = await fetch('http://localhost:4000/ingresar-quesos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objBody)
    });
    const res_1 = await res.json();
    return console.log(res_1);
  } catch (err) {
    return err;
  }
}