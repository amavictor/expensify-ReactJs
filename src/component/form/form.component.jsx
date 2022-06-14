import './form.sytles.scss'
import {Fragment} from "react";
import Button from "../button/button.component";


export default function Input ({submitFunction, handleChangeFunction,id,mainItem,itemPrice, description, category}){


    return(
        <form onSubmit={submitFunction}>
            <div className={'form-div'}>
                <div className={'flex-input'}>
                    <input className={'text-input-top s-n'} placeholder={'S/N'} onChange={handleChangeFunction} name={'id'} required={true} value={id}/>
                    <input className={'text-input-top'} placeholder={'item'} onChange={handleChangeFunction} name= {'mainItem'} required={true} value={mainItem}/>
                    <input className={'text-input-top s-n'} placeholder={'price'} onChange={handleChangeFunction} name={'itemPrice'} required={true} value={itemPrice}/>
                </div>
                <div className={'flex-input-2'}>
                    <textarea maxLength={'100'} className={'text-input'} placeholder={'description'} onChange={handleChangeFunction} name={'description'} value={description} />
                        <select  className={'text-input'} placeholder={'category'} onChange={handleChangeFunction} name={'category'} value={category}>
                            <option value={''} disabled selected hidden>select category...</option>
                            <option>Food</option>
                            <option>Book</option>
                            <option>Gadget</option>
                            <option>Clothes</option>
                        </select>

                </div>
            </div>
            <Button/>

        </form>
    )
}