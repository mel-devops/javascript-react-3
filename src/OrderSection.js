import React from 'react'
import { formatUSD } from './Util/Money'
import { OrderTable } from './OrderTable'
import './OrderSection.scss'

export const OrderSection = ({total, order, totalFood, orderFood}) => {
  return (
    <div className='OrderSection'>
        <div className='OrderSection_Title'>
            Your Order
        </div>
        {
            (total > 0 || totalFood > 0) && (
            <>
                <strong>Drinks</strong>
                <OrderTable completeOrder={order}/>
                <strong>Foods</strong>
                <OrderTable completeOrder={orderFood}/>
            </>
            )
        }
        
        {
            total === 0 && totalFood === 0 &&
            <> 
                Your cart is empty. 
            </>
        }
        <hr />
        <div className='OrderSection_Total'>
            Total:<span>{ formatUSD(Number(total)+Number(totalFood))}</span>
        </div>
    </div>
  )
}
