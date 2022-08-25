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
  approvepord?: string,
  lotenum?: string,
  refrigerationtype?: string
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

// Create (POST) Records OUT Section ----------->

interface Body {
  approvedprodsalida?: string,
  approvepord?: string,
  quesoname?: string,
  quesostatus?: string,
  quesoavailability?: boolean,
  nopieces?: number,
  nopiecessalida?: number,
  weigthcurrent?: number,
  datein?: string,
  dateout?: string ,
  price?: number,
  lotenum?: string,
  refrigerationtype?: string
}

export const createProdRecorductionOut = async (objBody: Body) => {
  try {
    const res = await fetch('http://localhost:4000/ingresar-quesos-out', {
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



// Update (PUT) Records By Id Section ----------->

interface Body {
  quesoname?: string,
  nopieces?: number,
  holladas?: number,
  datein?: string,
  price?: number,
  approvepord?: string,
  approvedprodsalida?: string,
  lotenum?: string,
  refrigerationtype?: string
}

export const updateCheeseProdRecord = async (id:number, objBody: Body) => {
  try {
    const res = await fetch(`http://localhost:4000/actualizar-quesos/${id}`, {
      method: 'PUT',
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

// Update OUT Records (PUT) Records By Id Section ----------->

interface Body {
  approvedprodsalida?: string
  dateout?: string,
  weigthcurrent?: number,
  nopieces?: number,
  nopiecessalida?: number,
  price?: number
}

export const updateCheeseProdRecordOut = async (id:number, objBody: Body) => {
  try {
    const res = await fetch(`http://localhost:4000/actualizar-quesos-out/${id}`, {
      method: 'PUT',
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

// Delete (DEL) Records By Id Section ----------->
export const deleteChesseProdRecord = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:4000/eliminar-quesos/${id}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(id)
    });
    const res_1 = await res.json();
    return console.log(res_1);
  } catch (err) {
    return err;
  }
}