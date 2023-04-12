import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function StepThree () {

    const dispatch = useDispatch();
    const history = useHistory();
    const addMinutes = useSelector(store => store.addMinutes);

    const handleChange = (event) => {
        const action = {type: 'ADD_MINUTES_COUNT', payload: event.target.value};
        dispatch(action);
    }

    const nextPage = () => {
        if(addMinutes > 0) {
            history.push('/step-4');
        } else {
            alert('Add Time to Input to Continue');
        }
    }


    return (
        <>
        <h3>Step Three</h3>
        <form>
        <input type="number" onClick={handleChange}/>
        <input type="submit"/>
        </form>
        <button onClick={nextPage}>Next</button>
        
        </>
    )
}

export default StepThree