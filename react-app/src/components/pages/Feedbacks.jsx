import React, {useState} from 'react';
import FeedbackForm from '../FeedbackForm';
import FeedbackItem from '../FeedbackItem';

function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState([{id: 1, body: 'Smthing text'},
    {id: 2, body: 'Smthing text texttextt exttexttexttextte xttexttext texttexttexttexttext texttexttexttexttexttext texttext texttexttext'},
    {id: 3, body: 'Smthing text text text text text text text text text text text text text text text text text text text text text text text '}])
    
    const createFeedback = (newFeedback) => {
        setFeedbacks([...feedbacks, newFeedback])
    }

    const removeFeedback = (feedback) => {
        setFeedbacks(feedbacks.filter(f => f.id !== feedback.id))
    }

    return (
        <div className="feedbackscontainer">
            <FeedbackForm create={createFeedback}/>
            {feedbacks.length !== 0
            ? feedbacks.map((feedback) =>
                    <FeedbackItem remove={removeFeedback} feedback={feedback} />
                )
            : <div className='noFeedbacks'>Оставьте отзыв первым!</div>}
        </div>
    );
}

export default Feedbacks;