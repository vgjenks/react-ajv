import React from "react";
import { useForm } from "react-hook-form";
import "./scss/form.scss";

const Form = () => {
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors } 
    } = useForm();

    const onSubmit = e => {
        console.log(`You said: ${e.target.value}`)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Prefix</label>
                    <select>
                        <option value="">Select One</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                    </select>
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" />
                </div>
            </form>
        </div>
    );
};

export default Form;