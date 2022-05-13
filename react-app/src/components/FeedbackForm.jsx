import React, {useState} from 'react';
import InputL from "./UI/inputL/InputL";
import MyButtonFour from "./UI/buttonFour/MyButtonFour";

const FeedbackForm = ({create}) => {
    const [feedback, setFeedback] = useState({ body: ''})


    const addNewFeedback = (e) => {
        e.preventDefault()
        const newFeedback = {
            ...feedback, id: Date.now()
        }
        create(newFeedback)
        setFeedback({ body: ''})
        console.log(feedback);
    }

    return (
        <form id='feedbackform'>
            <InputL
                value={feedback.body}
                onChange={e => setFeedback({...feedback, body: e.target.value})}
                type="text"
                placeholder="Оставьте Ваш отзыв ..."
            />
            <MyButtonFour onClick={addNewFeedback}>ОТПРАВИТЬ ОТЗЫВ</MyButtonFour>
        </form>
    );
};

export default FeedbackForm;