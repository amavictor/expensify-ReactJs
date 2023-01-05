import Input from "../form/form.component";
import Card from "../card-components/card.component";
import Navigation from "../navigation-menu/navigation.component";
import './mainbox.scss'

import React, {useEffect, useState} from "react";


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
    const [items, setItems] = useState( ()=> {
            const savedItems = localStorage.getItem('item')
            if (savedItems) {
                return JSON.parse(savedItems)
            } else {
                return []
            }
        }
    )
    let localStorageItem
    useEffect(()=>{
        items.map(()=>{localStorageItem = localStorage.setItem('item', JSON.stringify(items))})
    })
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
    }

    function deleteItem(id){
        let updatedList = [...items].filter((newItem)=> newItem.id !==id)
        setItems(updatedList)
    }
    //to confirm the value of the description
    function checkDescription(id,callback){
        items.map((mapper)=>{
            let myProp='id'
            if (mapper.hasOwnProperty(myProp)){
                if(id===mapper.id) {
                    let des = String(mapper.description)
                    callback(des)
                }
                else return (alert('id mismatch, requires correct id'))
            }
        })
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

    const [description, setDescription] = useState(false)
    const handleDescriptionCallback = (children)=>{setDescription(children)}
    return(
        <div>
            <div className={'main-box'} style={{visibility : description ? 'hidden' : 'null'}}>

                <div>
                    <Input submitFunction = {submit} handleChangeFunction ={handleChange} {...input}/>
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