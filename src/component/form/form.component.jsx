import './form.sytles.scss'
import {Fragment} from "react";
import Button from "../button/button.component";


export default function Input ({submitFunction, handleChangeFunction}){


    return(
        <form onSubmit={submitFunction}>
            <div className={'form-div'}>
                <div className={'flex-input'}>
                    <input className={'text-input-top s-n'} placeholder={'S/N'} onChange={handleChangeFunction} name={'id'} required={true}/>
                    <input className={'text-input-top'} placeholder={'item'} onChange={handleChangeFunction} name= {'mainItem'} required={true} />
                    <input className={'text-input-top s-n'} placeholder={'price'} onChange={handleChangeFunction} name={'itemPrice'} required={true}/>
                </div>
                <div className={'flex-input-2'}>
                    <textarea maxLength={'100'} className={'text-input'} placeholder={'description'} onChange={handleChangeFunction} name={'description'}/>
                        <select  className={'text-input'} placeholder={'category'} onChange={handleChangeFunction} name={'category'} >
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