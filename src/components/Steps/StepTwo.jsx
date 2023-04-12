import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';




function StepTwo() {

    const dispatch = useDispatch();
    const history = useHistory();
    const activityType = useSelector(store => store.activityType);
    const handleChange = (event) => {
        const action = {type: 'SET_ACTIVITY_TYPE', payload: event.target.value};
        dispatch(action);
    }
    const nextPage = () => {
        if(activityType !== '') {
            history.push('/step-3');
        } else {
            alert('Please enter a activity');
        }
    }


    return (
        <>
        <h3>Step Two</h3>
        <form>
            <input type="text" value={activityType} onChange={handleChange}/>
            <input type="submit"/>
        </form>
        <button onClick={nextPage}>Next</button>
        </>
    )
}
export default StepTwo;