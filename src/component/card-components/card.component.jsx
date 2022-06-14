
import './card.style.scss'
import {AiFillCloseCircle, BsFillCheckCircleFill, BsFillTrashFill} from "react-icons/all";
import {Link, useNavigate} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
export default function Card({shop,deleteItem,parentCallback,descriptionchecker,sendToDescription,description1}){
    let description = shop.description.slice(0,20)
    const navigate = useNavigate()
    const[deleted, setDeleted]=useState(false)
    function toggleClass(){
        setDeleted(true)
    }
    const[complete,setComplete] = useState(false)
    function loadDescription(unit, callback){
        descriptionchecker(unit, callback)
        onTrigger()
    }
    function checkComplete(){
        let com = !complete
        return(
            setComplete(com)
        )
    }
    function onTrigger (){
        return parentCallback(true)
    }
    const el = sendToDescription

    return(
        <div>
                <div className={'card-item'} style={{backgroundColor : complete ? '#ddf6c7' : ' #fff5e8'}}  >
                    <div className={'card-info-delete'} >
                        <div className={'numbering'}>
                            {shop.id}
                        </div>
                        <p  >{shop.mainItem}</p>
                        <p>₦{shop.itemPrice}</p>
                        <div>
                            <BsFillCheckCircleFill className={'icons'} onClick={checkComplete} />
                            <BsFillTrashFill className={'icons'} onClick={()=>deleteItem(shop.id)}/>
                        </div>
                    </div>
                    <div className={'description'}>
                        <p onClick={()=>loadDescription(shop.id, (des)=> navigate('/description', { state: {
                            description1: des
                            }}))}>{`${description}...`}</p>
                    </div>
                </div>

        </div>


    )
}