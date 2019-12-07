// matches any non-empty string that is entirely numerical
NUMERICAL_REGEX = /^\d+$/;

const getMessage = (field, value) => {
    return (value.length == 0) ? `Must provide ${field} value` : `${value}' is an invalid '${field}' value`;
};

export const heightConstraints = {
    feet: {
        presence: true,
        format: {
            // pattern: any string of digits
            pattern: NUMERICAL_REGEX,
            message: (value, attribute) => {return getMessage(attribute, value)}
        }
    },
    inches: {
        presence: true,
        format: {
            // pattern: any string of digits
            pattern: NUMERICAL_REGEX,
            message: (value, attribute) => {return getMessage(attribute, value)}
        }
    }
};

export const weightConstraints = {
    presence: true,
    format: {
        pattern: NUMERICAL_REGEX,
        message: (value, attribute) => {return getMessage(attribute, value)}
    }
}