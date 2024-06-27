import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='Pidelo con IA...'
        row={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton 
            type='outline'
            title='Pidelo con IA...'
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton 
              type='outline'
              title='Logo con IA'
             // handleClick={() => handleSubmit('logo')}
              customStyles='text-xs'
            />
            <CustomButton 
              type='filled'
              title='IA Completo'
             // handleClick={() => handleSubmit('completo')}
              customStyles='text-xs'
            />

          </>
        )}
      </div>

    </div>
  )
}

export default AIPicker