import React from 'react'
import './FoodPage.scss'
import Image from 'react-bootstrap/Image'
import { FoodTable } from '../FoodTable'

export const FoodPage = () => {
  return (
    <div className='FoodPage'>
       <div className='Center_Content'>
          <div className='FoodPage_Header'>
                Food 
            </div>
            <div className='FoodPage_Content'>
                     <FoodTable /> 
                </div>
                <div className='FoodPage_Content'>
                    <div className='FoodPage_Pix'>
                        <Image width='800px' rounded={true} fluid={true} src='sandwich.png' alt='sandwich' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='soup.png' alt='soup' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='pizza.png' alt='pizza' />
                    </div>
                </div>
            </div>
        </div>
    )
}
