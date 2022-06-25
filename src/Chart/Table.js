import React from 'react'
import DataTable from 'react-data-table-component';
function Table({data}) {
    const columns = [
        {
            name: 'rate-float',
            selector: row => row.rate,
            sortable: true,
        },
        {
            name: 'code',
            selector: row => row.code,
            sortable: true,
        },
        {
            name: 'symbol',
            selector: row => row.symbol,
            sortable: true,
        },
        {
            name: 'description',
            selector: row => row.description,
            sortable: true,
        },
    ];

  
  return (
    <div>
      <DataTable
            columns={columns}
            data={data}
            
        />
    </div>
  )
}

export default Table