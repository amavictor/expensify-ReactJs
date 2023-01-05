
import './description.styles.scss'
import {useLocation} from "react-router-dom";


export default function Description (props){
    console.log('description loaded')
    const location = useLocation()
    const {state} =location


    console.log('location from component 1',location)
    return(
        <div className={'description-box'}>{
            <div className={'display-box'}>
                <p>{state.description1}</p>
            </div>
        }
        </div>
    )
}