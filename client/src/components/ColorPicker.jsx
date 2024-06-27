import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        //To add or change colors to presetChart or delete presetColors for random 
        presetColors={[
          '#000000',
          '#FFFFFF',
          '#808080',
          '#008000',
          '#800080',
          '#FF0000',
          '#1656AD',
          '#401E12',
          '#F0C807',
          '#EE0943',
          '#3C20A3',
          '#00B496'
        ]}
        onChange={(color) => state.color = color.hex}
      />

    </div>
  )
}

export default ColorPicker