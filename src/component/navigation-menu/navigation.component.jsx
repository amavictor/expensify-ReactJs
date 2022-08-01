import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBook,faBurger,faShirt,faLaptop} from "@fortawesome/free-solid-svg-icons";
import './navigation.styles.scss'

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
                <FontAwesomeIcon icon={faBurger} className={'icons'} onClick={handleOnClick1} />
                <FontAwesomeIcon icon={faBook} className={'icons'} onClick={handleOnClick2}/>
                <FontAwesomeIcon icon={faShirt}  className={'icons'} onClick={handleOnClick3}/>
                <FontAwesomeIcon icon={faLaptop} className={'icons'} onClick={handleOnClick4} />

        </div>

    )
}