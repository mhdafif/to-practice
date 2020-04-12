import React from 'react'
import thumbnail from '../../assets/images/thumbnail1.jpg'
import { TitleCategory } from './TitleCategory'

export const Card = () => {
  return (
    <div className='container-fluid'>
      <TitleCategory title='Lates' />
      <div className='wrap-card'>
        {[0, 1, 2, 3, 4, 5].map((i) =>
          <div className='card' key={i}>
            <img src={thumbnail} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}