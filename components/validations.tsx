class Validations {
    static validateUsernameLength(username: string): boolean {
        return username.length >= 5;
    }

    static validatePasswordFormat(password: string): boolean {
        //define a RegexP. password must be at least 8 characters long. should have at least one uppercase letter, one lowercase letter, one number, and one special character.
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);

    }
}

export default Validations;