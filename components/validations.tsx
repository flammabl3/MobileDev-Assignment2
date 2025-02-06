class Validations {
    static validateEmail(email: string): boolean {
        //define a RegExp. \S is a string. + matches one or more strings, and then we search for @ and . in the right spots.
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    static validatePassword(password: string): boolean {
        return password.length >= 8;
    }
}

export default Validations;