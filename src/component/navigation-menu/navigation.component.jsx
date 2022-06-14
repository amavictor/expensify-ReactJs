import { Outlet, Link } from "react-router-dom";
import {BsPhoneVibrateFill, GiClothes, ImBooks, MdFastfood} from "react-icons/all";
import './navigation.styles.scss'
import {useEffect, useState} from "react";

export default function Navigation ({item,filter,filtered,parentCallback}){

    function onTrigger (){
        parentCallback(true)
    }

    function handleOnClick1(){
        let category = 'Food'
        filter(category)
        onTrigger()
    }
    function handleOnClick2(){
        let category = 'Book'
        filter(category)
        onTrigger()
    }
    function handleOnClick3(){
        let category = 'Clothes'
        filter(category)
        onTrigger()
    }
    function handleOnClick4(){
        let category = 'Gadget'
        filter(category)
        onTrigger()
    }
    return(
        <div className={'navigation'}>
                <MdFastfood className={'icons'} onClick={handleOnClick1}/>
                <ImBooks className={'icons'} onClick={handleOnClick2} />
                <GiClothes className={'icons'} onClick={handleOnClick3}/>
                <BsPhoneVibrateFill className={'icons'} onClick={handleOnClick4}/>

        </div>

    )
}