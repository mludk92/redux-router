//import Hooks
import { useSelector, useDispatch } from 'react-redux';



function StepOne() {
    //pull value out of redux store {useSelector}
    const personName = useSelector(store => store.personName);
    //create a variable to dispatch to the reducer {useDispatch}
    const dispatch = useDispatch();
    const handleChange = (event) => {
        //dispatch an action to the reducer {dispatch}
        const action = {type: 'SET_PERSON_NAME', payload: event.target.value};
        dispatch(action);
    }

    return (
        <>
        <h3>Step One</h3>
        <form>
            <input type="text" onChange={handleChange} value={personName}/>
        </form>
        </>
    )
}
export default StepOne;