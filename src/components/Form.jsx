import React, { useState } from 'react';
import "./Form.css";

const Form = ({ closeForm, onsubmit, defaultValue }) => {

    const [formState, setFormState] = useState(defaultValue ||
        {
        task: '',
        duedate: '',
        stauts:'',
    });

    const [errors,setErrors] = useState("")

    const validateForm = () =>{
        if (formState.task && formState.duedate && formState.status){
            setErrors("")
            return true
        }
        else{
            let errorFields=[];
            for(const [key,value] of Object.entries(formState)){
                if (!value){
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "));
            return false
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        onsubmit(formState)

        closeForm();
    }


    return (
        <div className='form-container' onClick={(e) => {
            if (e.target.className === "form-container")
                closeForm()
        }}>
            <div className='form'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='task'>task </label>
                        <textarea name='task' value={formState.task} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='duedate'>Due Date </label>
                        <input type='text' name='duedate' value={formState.duedate} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='status'>Status </label>
                        <select  name='status' value={formState.status} onChange={handleChange}>
                            <option value="completed">Completed</option>
                            <option value="not-completed">Not-Completed</option>
                        </select>
                    </div>
                    {errors && <div className='error'>{`Please include: ${errors}`}</div>}
                    <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;