export const contactForm = {
    type: "object",
    properties: {
        prefix: { 
            type: "string", 
            minLength: 2, 
            maxLength: 4,
            errorMessage: "Select a prefix",
        },
        firstName: { 
            type: "string", 
            minLength: 1, 
            maxLength: 50,
            errorMessage: "Between 1 and 50 characters.",
        },
        lastName: { 
            type: "string", 
            minLength: 1, 
            maxLength: 50,
            errorMessage: "Between 1 and 50 characters.",
        },
        title: { 
            type: "string", 
            maxLength: 50, 
            errorMessage: "Less than 50 characters.",
            nullable: true
        },
        email: { 
            type: "string", 
            maxLength: 100, 
            pattern: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
            errorMessage: "Invalid email address.",
            nullable: true
        }
    },
    required: ["firstName, lastName", "email"],
    additionalProperties: false
};
