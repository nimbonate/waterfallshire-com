const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG ?? "");
const projectId = adminConfig.projectId ?? "fire-react-house";

export const DATA_TYPE = {
    TEXT: "text",
    TEXTAREA: "textarea",
    SELECT: "select",
    CHECKBOX: "checkbox",
    ARRAY: "array",
    TIMESTAMP: "timestamp",
    OBJECT: "object",
};

export const INPUT = {
    EMAIL: {
        KEY: "email",
        LABEL: "Email",
        PLACEHOLDER: "taylor_doe@email.com",
        ERRORS: {
            REQUIRED: "An email is required!",
            PATTERN: {
                MESSAGE: "This doesn't look like a valid email address.",
                KEY: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
            TAKEN: {
                MESSAGE: "Email already registered! Try logging in or use another email address.",
                TYPE: "taken",
            },
        },
    },
    PHONE: {
        KEY: "phone",
        LABEL: "Phone",
        PLACEHOLDER: "+1 (123) 456-7890",
        ERRORS: {
            REQUIRED: "A phone number is required!",
            MAX: {
                MESSAGE: "The phone number can only be 25 characters long.",
                KEY: 25,
            },
            MIN: {
                MESSAGE: "The phone number must be at least 4 characters long.",
                KEY: 4,
            },
        },
    },
    PASSWORD: {
        KEY: "password",
        LABEL: "Password",
        PLACEHOLDER: "*********************",
        ERRORS: {
            REQUIRED: "A password is required!",
            MAX: {
                MESSAGE: "The password can only be 50 characters long.",
                KEY: 50,
            },
            MIN: {
                MESSAGE: "The password must be at least 6 characters long.",
                KEY: 6,
            },
        },
    },
    CONFIRM_PASSWORD: {
        KEY: "confirmPassword",
        LABEL: "Confirm password",
        PLACEHOLDER: "*********************",
        ERRORS: {
            REQUIRED: "The password must be confirmed!",
            MAX: {
                MESSAGE: "The password can only be 50 characters long.",
                KEY: 50,
            },
            MIN: {
                MESSAGE: "The password must be at least 6 characters long.",
                KEY: 6,
            },
            NO_MATCH: {
                TYPE: "no-match",
                MESSAGE: "The passwords entered must match!",
            },
        },
    },
    FIRST_NAME: {
        KEY: "firstName",
        LABEL: "First name",
        PLACEHOLDER: "Taylor",
        ERRORS: {
            REQUIRED: "A first name is required!",
            MAX: {
                MESSAGE: "The first name can only be 150 characters long.",
                KEY: 150,
            },
            MIN: {
                MESSAGE: "The first name must be at least 1 characters long.",
                KEY: 1,
            },
        },
    },
    LAST_NAME: {
        KEY: "lastName",
        LABEL: "Last name",
        PLACEHOLDER: "Doe",
        ERRORS: {
            REQUIRED: "A last name is required!",
            MAX: {
                MESSAGE: "The last name can only be 150 characters long.",
                KEY: 150,
            },
            MIN: {
                MESSAGE: "The last name must be at least 1 characters long.",
                KEY: 1,
            },
        },
    },
    NAME: {
        KEY: "name",
        LABEL: "Name",
        PLACEHOLDER: "Taylor Doe",
        ERRORS: {
            REQUIRED: "A name is required!",
            MAX: {
                MESSAGE: "The name can only be 150 characters long.",
                KEY: 150,
            },
            MIN: {
                MESSAGE: "The name must be at least 1 characters long.",
                KEY: 1,
            },
        },
    },
    BODY: {
        KEY: "body",
        LABEL: "Message body",
        PLACEHOLDER: "Detail what you want to say here.",
        ERRORS: {
            REQUIRED: "A text body is required!",
            MAX: {
                MESSAGE: "The text body can only be 30,000 characters long.",
                KEY: 30000,
            },
            MIN: {
                MESSAGE: "The text body must be at least 10 characters long.",
                KEY: 10,
            },
        },
    },
    COLOR: {
        KEY: "color",
        LABEL: "Color",
        PLACEHOLDER: "#FFFFFF",
        ERRORS: {
            REQUIRED: "A color is required!",
            MAX: {
                MESSAGE: "The color can only be 15 characters long.",
                KEY: 15,
            },
            MIN: {
                MESSAGE: "The color must be at least 2 characters long.",
                KEY: 2,
            },
            VALIDATE: {
                MESSAGE: "Looks like one of the colors you inputted is not a proper HTML color. Try using a hex color like '#FFFFFF'!",
            },
        },
    },
    URL: {
        KEY: "url",
        LABEL: "URL",
        PLACEHOLDER: "https://www.google.com",
        ERRORS: {
            REQUIRED: "A URL is required!",
            MAX: {
                MESSAGE: "The URL can only be 100 characters long.",
                KEY: 100,
            },
            MIN: {
                MESSAGE: "The URL must be at least 2 characters long.",
                KEY: 2,
            },
            PATTERN: {
                MESSAGE: "This doesn't look like a valid URL address. Please copy the URL directly from your browser and paste it here, including 'http'/'https' portion.",
                KEY: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
            },
        },
    },
};

export const SIZES = {
    XS: "xs",
    SM: "sm",
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "2xl",
    XXXL: "3xl",
};

export const defaultSiteData = { // This object is just nicely converted to lowercase values fore Firestore version of values
    name: "Fire React House",
    description: "Fire React House is a template for creating web apps with Firebase and React.js.",
    projectId: projectId,
    customUrl: "fire-react-house.web.app",
    logo: {
        width: 100,
        height: 100,
        url: "https://firebasestorage.googleapis.com/v0/b/fire-react-house.appspot.com/o/public%2Flogos%2Flogo512.png?alt=media&token=0b4d4257-5449-4882-bacf-356272994c17",
        showTitle: "true",
    },
    emails: {
        support: "help@minute.tech",
        noreply: "noreply@minute.tech",
    },
    theme: {
        fonts: {
            heading: {
                name: "Roboto Bold",
                light: "black",
                dark: "white",
            },
            body: {
                name: "Roboto Regular",
                light: "black",
                dark: "white",
            },
            link: {
                light: "navyblue",
                dark: "lightblue",
            },
        },
        colors: {
            primary: "dodgerblue",
            secondary: "hotpink",
            tertiary: "tomato",
            red: "firebrick",
            green: "green",
            yellow: "gold",
            blue: "navy",
            grey: "grey",
            lightGrey: "lightgrey",
            background: {
                light: "white",
                dark: "black",
            },
        },
    },
};
