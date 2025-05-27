import Form from "react-bootstrap/Form";

import "../css/MealFormBody.css"


function MealFormBody() {
    return (
        <>
            <div>
                <div className="meal-inputs">
                    <h6>What meal are you planning for?</h6>
                    <Form.Select aria-label="Default select example" required>
                        <option value="1">Breakfast</option>
                        <option value="2">Lunch</option>
                        <option value="3">Dinner</option>
                        <option value="3">Snack</option>
                    </Form.Select>
                </div>
                <div className="meal-inputs">
                    <h6>Do you have any allergies/restrictions?</h6>
                    <Form.Control type="text" />
                </div>
                <div className="meal-inputs">
                    <h6>Target calories for this meal?</h6>
                    <Form.Control type="text" required/>
                </div>
            </div>
        </>
    );
}

export default MealFormBody;
