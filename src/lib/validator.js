import Ajv from "ajv";
import AjvFormats from "ajv-formats";
import AjvErrors from "ajv-errors";

import interceptor from "./data_interceptor";

const ajv = new Ajv({ 
    allErrors: true, 
    strict: false,
    $data: true 
});
AjvFormats(ajv);
AjvErrors(ajv);

const initValidationCache = async () => {
    try {
        let { entityType, schema } = window;
        if (!schema) {
            throw new Error("Validation cache failed: schemas required");
        }
        Object.keys(entityType).forEach(et => {
            let type = `${et[0].toLowerCase()}${et.substring(1, et.length)}`;
            ajv.removeSchema(schema[type]);
            ajv.addSchema(schema[type], entityType[et].type);
        });
    } catch (e) {
        console.error("Error while loading validation schemas!");
    }
};

const validate = async (type, data) => {
    let isValid = true;
    let message = null;
    try {
        let validate = ajv.getSchema(type);
        isValid = validate(data);
        if (!isValid) {
            message = validate.errors;
        }
    } catch (e) {
        isValid = false;
        message = e.message;
    }
    return {
        isValid,
        message
    };
};

const coerceValues = (schema, data) => {
    if (!schema || !data) {
        console.error("Schema, data, or both are missing");
        return;
    }
    Object.entries(schema.properties).forEach(([key, p]) => {
        let isCoercible = p.coercible && 
        Object.keys(p.coercible).length !== 0 &&
        p.nullable;        
        if (isCoercible) {
            let { coercible } = p;
            if (data[key] === coercible.from) {
                data[key] = coercible.to;
            }
        }
    });
};

const validateResolver = async (data, context) => {
    let validate = ajv.getSchema(context);
    let { schema } = validate;
    let dataCopy = interceptor(context, { ...data });
    coerceValues(schema, dataCopy);
    let isValid = validate(dataCopy);
    if (isValid) {
        return { 
            values: dataCopy, 
            errors: {} 
        };
    }
    let { errors } = validate;
    //TODO: Implement a better log from front-end - sometimes errors are
    //present here that aren't seen on-screen!
    // console.error("VALIDATION ERROR! validator.validateResolver - find me!", errors);
    let errorsFormatted = errors.reduce((prev, current, i) => ({
        ...prev,
        [current.dataPath.replace(".", "").replace("/", "") || `errorKey${i}`]: current.message
    }), {});
    return {
        values: {},
        errors: errorsFormatted
    };
};

export default {
    initValidationCache,
    validate,
    validateResolver
};