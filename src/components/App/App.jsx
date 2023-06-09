import { HashRouter as Router, Route, Link } from "react-router-dom";
import StepOne from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import StepThree from "../Steps/StepThree";

function App () {
  
  return (
    <div>
      <Router>
      <h1>Activity Log</h1>
      
      <Route exact path="/">
        {/* Step one component goes here */}
        <StepOne />
      </Route>

      <Route exact path="/step-2">
        {/* Step two component goes here */}
        <StepTwo />
      </Route>

      <Route exact path="/step-3">
        {/* Step three component goes here */}
        <StepThree />
      </Route>

      </Router>
    </div>
  );

}

export default App
