import React, {useState} from 'react';
import FeedbackForm from '../FeedbackForm';
import FeedbackItem from '../FeedbackItem';


function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([])
    
    const allFeedbacks = [{id: 1, body: 'Smthing text'},
    {id: 2, body: 'Smthing text texttextt exttexttexttextte xttexttext texttexttexttexttext texttexttexttexttexttext texttext texttexttext'},
    {id: 3, body: 'Smthing text text text text text text text text text text text text text text text text text text text text text text text '}]
    
    const createFeedback = (newFeedback) => {
        setFeedbacks([...feedbacks, newFeedback])
    }

    return (
        <div className="feedbackscontainer">
            <FeedbackForm create={createFeedback}/>
            {allFeedbacks.map((feedback) =>
                    <FeedbackItem feedback={feedback} />
                )}
        </div>
    );
}

export default Feedbacks;