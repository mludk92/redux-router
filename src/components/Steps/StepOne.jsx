//import Hooks
import { useSelector, useDispatch } from 'react-redux';



function StepOne() {
    //pull value out of redux store {useSelector}
    const personName = useSelector(store => store.personName);

    const allPeople = useSelector(store => store.allPeople);

    //create a variable to dispatch to the reducer {useDispatch}
    const dispatch = useDispatch();

    const handleChange = (event) => {
        //dispatch an action to the reducer {dispatch}
        const action = {type: 'SET_PERSON_NAME', payload: event.target.value};
        dispatch(action);
    }

    const addPerson = (event) => {
        event.preventDefault();
        const action = {type: 'ADD_PERSON_NAME', payload: personName};
        dispatch(action);
    }



    return (
        <>
        <h3>Step One</h3>
        <form form onSubmit = {addPerson}>
            <input type="text" onChange={handleChange} value={personName}/>
            <input type="submit" />
        </form>
        <ul>
            {
            allPeople.map((person, index) => 
                <li key={index}>{person}</li>
            )}
        </ul>
        </>
    )
}
export default StepOne;