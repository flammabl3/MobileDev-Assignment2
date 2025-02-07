class Validations {
    static validateUsernameLength(username: string): boolean {
        return username.length >= 5;
    }

    // returns true or an array (which is mutable length). Isn't javascript weird?
    static validatePasswordFormat(password: string) {
        //define a RegexP. password must be at least 8 characters long. should have at least one uppercase letter, one lowercase letter, one number, and one special character.
        let errors = [];

        const min_length = 8;
        const upper = /[A-Z]/;
        const lower = /[a-z]/;
        const special = /[@$!%*?&]/;
        const number = /\d/;

        if (password.length < min_length) {
            errors.push('Password must be at least 8 characters long.');
        }

        if (!upper.test(password)) {
            errors.push('Password must have at least one uppercase letter.');
        }

        if (!lower.test(password)) {
            errors.push('Password must have at least one lowercase letter.');
        }

        if (!special.test(password)) {
            errors.push('Password must have at least one special character.');
        }

        if (!number.test(password)) {
            errors.push('Password must have at least one number.');
        }
        
        return errors.length === 0 ? true : errors;
    }
}

export default Validations;