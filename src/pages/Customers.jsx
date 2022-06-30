import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection , Edit, Toolbar, Sort, Filter, Inject } from '@syncfusion/ej2-react-grids'

import { customersData , customersGrid } from '../data/dummy'
import Header from '../comp/Header'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-gray-50 rounded-3xl'>
      <Header category='Page' title="Customers"/>
        <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting: true, allowEditing: true }}
        width="auto"
        >
          <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
          </ColumnsDirective>
          <Inject services={[ Page, Toolbar, Selection, Edit, Sort, Filter]}/>
        </GridComponent>
    </div>
  )
}

export default Customers