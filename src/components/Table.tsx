import {useContext, useEffect, useState} from 'react';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { Context } from '../store/appContext';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Titulo', width: 500 },
  { field: 'author', headerName: 'Autor', width: 200 },
  {
    field: 'publishedAt',
    headerName: 'Fecha de Publicacion',
    type: 'number',
    width: 200,
  },
];



export default function NewsTable() {
    const {store} = useContext(Context)
    const [rows, setRows] = useState([])


    useEffect(() => {
        let currentRows = store.keywordNews.map((item: { id: any }, i: number) => {
            item.id = i + 1
            return item
          });

          let currentRowsCountry = store.countryNews.map((item: { id: any }, i: number) => {
            item.id = i + 1
            return item
          });
          
          let newRows = currentRows.concat(currentRowsCountry)

          setRows(newRows)
        
      }, [store.keywordNews]);

    
      
    console.log(rows)
  return (
    <div style={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}