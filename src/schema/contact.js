const contactForm = {
    type: "object",
    properties: {
        title: { 
            type: "string", 
            maxLength: 50, 
            errorMessage: "Error: Must be less than 50 characters.",
            nullable: true
        },
        prefix: { 
            type: "string", 
            minLength: 2, 
            maxLength: 4 
        },
        company_size: { type: "string", maxLength: 15, nullable: true },
        industry: {type: "string", maxLength: 50, nullable: true},
        year_founded: { 
            type: "number", 
            nullable: true,
            coercible: {
                from: "",
                to: null
            } 
        },
        email: { 
            type: "string", 
            maxLength: 100, 
            pattern: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
            errorMessage: "Error: Please enter a valid email address.",
            nullable: true,
            coercible: {
                from: "",
                to: null
            } 
        }
    },
    required: ["organization_name"],
    additionalProperties: true
};
