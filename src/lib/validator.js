import Ajv from "ajv";
import AjvFormats from "ajv-formats";
import AjvErrors from "ajv-errors";

//schemas
import { contactForm } from "../schema/contact";

//configure AJV
const ajv = new Ajv({
    allErrors: true,
    strict: false,
    $data: true
});
AjvFormats(ajv);
AjvErrors(ajv);

/**
 * Custom validation resolver - passed to react-hook-form
 */
const validateResolver = async (data, context) => {
    //pull by context prop in useForm()
    ajv.removeSchema("contactForm");
    ajv.addSchema(contactForm, "contactForm");
    let validate = ajv.getSchema(context);

    // let { schema } = validate;

    //run validation and pull errors
    let isValid = await validate(data);
    let { errors } = validate;

    //hack/workaround for bogus, always-present "required" error
    let errCount = errors.filter(err => err.instancePath !== "").length;

    //let data through?
    if (isValid || errCount === 0) {
        return {
            values: data,
            errors: {}
        };
    }

    //reduce errors to format form expects
    let errorsFormatted = errors.reduce((prev, current) => ({
        ...prev,
        [current.instancePath.replace("/", "")]: current
    }), {});

    //return expected format
    return {
        values: {},
        errors: errorsFormatted
    };
};

export {
    validateResolver
};