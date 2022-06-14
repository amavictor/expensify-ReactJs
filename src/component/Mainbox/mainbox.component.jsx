import Input from "../form/form.component";
import Card from "../card-components/card.component";
import Navigation from "../navigation-menu/navigation.component";
import './mainbox.scss'

import React, {useState} from "react";
import Description from "../description/description";


export default function MainBox (){

    const [input, setInput] = useState({
        id:'',
        mainItem: '',
        itemPrice:'',
        category:'',
        description:'',
        completed: false
    })//input initial states
    const [filteredItems, setFilteredItems] = useState([])//new array to get item category
    const [description1,setDescription1] = useState('')
    const [items, setItems] = useState([])
    function handleChange(e){
        const {name,value} = e.target
        setInput({...input, [name]:value})
    }

    function addTask(item) {
        setItems(prevState => {
            return [...prevState,input]
        })
        setFilteredItems(items)
    }

    function submit(e){
        e.preventDefault()
        addTask()
        setInput({
            id:'',
            mainItem: '',
            itemPrice:'',
            category:'',
            description:'',
            completed: false
        })
        console.log(items)
    }
    function deleteItem(id){
        let updatedList = [...items].filter((newItem)=> newItem.id !==id)
        setItems(updatedList)
    }//function to delete item
//Aparently I won't use this for now because I have no idea why my stuff is running crazy
    function checkDescription(id,callback){
        items.map((mapper)=>{
            let myProp='id'
            if (mapper.hasOwnProperty(myProp)){
                if(id===mapper.id) {
                    let des = String(mapper.description)
                    console.log(des)
                    sendToDescription(des)
                    callback(des)
                }
                else return (console.log('id mismatch'))
            }

        })
    }
    function sendToDescription(descriptionValue){
        setDescription1(descriptionValue)
        return (description1)

        /*   return <div style={{backgroundColor: 'red', height:'300px'}}>{descriptionValue}</div>*/
    }
    function filteredArray(category){
        const filteredArray = items.filter((item)=>{
            return item.category === category
        })
        setFilteredItems(filteredArray)

    }

    const [checkCategory, setCheckcategory]=useState(false)
    const handleCallback = (childData)=>{
        setCheckcategory(childData)
    }
    /*function changeDescription(){
        return !description
    }*/
    const [description, setDescription] = useState(false)
    const handleDescriptionCallback = (children)=>{setDescription(children)}
    console.log(description1, 'description')
    return(
        <div>
            {/*{description ? <Description sendToDescription={sendToDescription}
                descriptionValue={descriptionValue}/>
                :*/}
                <div className={'main-box'} style={{visibility : description ? 'hidden' : 'null'}}>

                    <div>
                        <Input submitFunction = {submit} handleChangeFunction ={handleChange}/>
                        <Navigation  item = {items} filter={filteredArray} filtered={filteredItems} parentCallback = {handleCallback}/>
                        <div>
                            {   checkCategory ?
                                filteredItems.map((elements)=>{
                                    return (
                                        <div>
                                            <Card shop={elements} key={items.id}
                                                  parentCallback={handleDescriptionCallback}
                                                  deleteItem={deleteItem}
                                                  descriptionchecker={checkDescription}
                                                  sendToDescription={sendToDescription}
                                                  description1={description1}
                                            />
                                        </div>
                                    )
                                }) :
                                items.map((elements)=>{
                                    return (
                                        <div>
                                            <Card shop={elements} key={items.id}
                                                  deleteItem={deleteItem}
                                                  parentCallback={handleDescriptionCallback}
                                                  descriptionchecker={checkDescription}
                                                  sendToDescription={sendToDescription}
                                                  description1={description1}
                                            />
                                        </div>

                                    )
                                })

                            }
                        </div>
                    </div>
                </div>

            }
        </div>

    )
}