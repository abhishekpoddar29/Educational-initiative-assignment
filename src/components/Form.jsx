import React, { useState } from 'react';
import "./Form.css";

const Form = ({ closeForm, onsubmit, defaultValue }) => {

    const [formState, setFormState] = useState(defaultValue ||
        {
        movie: '',
        releaseyear: '',
    });

    const [errors,setErrors] = useState("")

    const validateForm = () =>{
        if (formState.movie && formState.releaseyear){
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
                        <label htmlFor='movie'>Movie Title</label>
                        <textarea name='movie' value={formState.movie} onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='release'>Release Year </label>
                        <input type='text' name='releaseyear' value={formState.releaseyear} onChange={handleChange} />
                    </div>
                    {errors && <div className='error'>{`Please include: ${errors}`}</div>}
                    <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;