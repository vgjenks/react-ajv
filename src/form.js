import React from "react";
import { useForm } from "react-hook-form";
import { validateResolver } from "./lib/validator";
import "./scss/form.scss";

const Form = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        context: "contactForm",
        resolver: validateResolver
    });

    const onSubmit = formData => {
        console.log(`You said: ${JSON.stringify(formData, null, 4)}`)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        Prefix
                        <select {...register("prefix")}>
                            <option value="">Select One</option>
                            <option value="Mr.">Mr.</option>
                            <option value="Ms.">Ms.</option>
                            <option value="Mrs.">Mrs.</option>
                        </select>
                    </label>
                    {errors.prefix && <span className="validation">{errors.prefix}</span>}
                </div>
                <div>
                    <label>
                        First Name
                        <input type="text" {...register("firstName")} />
                    </label>
                    {errors.firstName && <span className="validation">{errors.firstName}</span>}
                </div>
                <div>
                    <label>
                        Last Name
                        <input type="text" {...register("lastName")} />
                    </label>
                    {errors.lastName && <span className="validation">{errors.lastName}</span>}
                </div>
                <div>
                    <label>
                        Email
                        <input type="text" {...register("email")} />
                    </label>
                    {errors.email && <span className="validation">{errors.email}</span>}
                </div>
                <div>
                    <label>
                        Title
                        <input type="text" {...register("title")} />
                    </label>
                    {errors.title && <span className="validation">{errors.title}</span>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;