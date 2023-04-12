//import Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {
    //create a variable to use history {useHistory}
    const history = useHistory();
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

    const nextPage = () => {
        if(allPeople.length > 0) {
            history.push('/step-2');
        } else {
            alert('Please enter a name');
        }
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
        <button onClick={nextPage}>Next</button>
        </>
    )
}
export default StepOne;