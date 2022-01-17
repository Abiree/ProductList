
import { useState, useEffect } from "react";
import { useTable, usePagination, useSortBy} from "react-table";
import { fetchProducts } from "./fetchData";

import React from "react";

export const Table = ()=> {
  
   
  const [data, setdata] = useState([]);
 


useEffect(() => {
  fetchProducts(setdata);

}, [])

function multiSelectFilter(rows, columnIds, filterValue) {
  return filterValue.length === 0
    ? rows
    : rows.filter((row) =>
        filterValue.includes(String(row.original[columnIds])),
      );
}

    
    

//columns
      const columns = React.useMemo(
        () => [
          {
            Header: "Product Infos",
            columns: [
              {
                Header: "id",
                accessor: "id",
            
              },
              {
                Header: "title",
                accessor: "title",
              },
              {
                Header: "price",
                accessor: "price",
              },
              {
                Header: "description",
                accessor: "description",
              },
              {
                Header: "category",
                accessor: "category",
                filter: multiSelectFilter,
                show: false,
                
              },
              {
                Header: "image",
                Cell: tableProps => (
                  <img
                    src={tableProps.row.original.image}
                    width={45}
                    alt='Product'
                  />
                )
                
              }
            ]
          },
          {
            Header: "Rating",
            columns: [
              {
                Header: "rate",
                accessor: "rating.rate",
            
              },
              {
                Header: "count",
                accessor: "rating.count",
                
              }
            
            ]
          }
        ],
        []
      );

 
  
    
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
        
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 0,pageSize:5 },
         
        },
        useSortBy, 
        usePagination,
      
      )
 // Render the UI for product table
 return (
  <>
   
    <table {...getTableProps()}>
    
      <thead >
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
              <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                
              })}
            </tr>
          )
        
        }
        )}
      </tbody>
    </table>
    {/* 
      Pagination 
    */}
    <div className="pagination">
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </button>{' '}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
      {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 15, 20].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}