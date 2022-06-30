import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../comp'

const ColorPicker = () => {

  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }

  return (
    <div className='m-2 md:p-10 mdm-10 mt-24 p-2 bg-white rounded-3xl'>
      <Header category="App" title="Color Picker"/>
        <div className='text-center'>
          <div id='preview'/>
          <div className='flex justify-center items-center gap-20 flex-wrap'>
            <div>
              <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallet</p>
              <ColorPickerComponent 
                id="inline-pallet"
                mode='Palette'
                inline
                modeSwitcher={false}
                showButtons={false}
                change={change}
              />
            </div>
            <div>
              <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
              <ColorPickerComponent 
                id="inline-pallet"
                mode='Picker'
                inline
                modeSwitcher={false}
                showButtons={false}
                change={change}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ColorPicker