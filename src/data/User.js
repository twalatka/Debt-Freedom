export default class {

    /**
     * User class constructor method
     *   Stores information about the user
     *
     * @param name The user's name
     * @param email The user's email, used for login
     * @param id The id for the user. Used as a key in other objects. Should always be a UUID.
     *   id will autogenerate if sent undefined
     *
     * @return An instance of the user class
     *
     * @TODO autogenerate id.
     */
    constructor(id, name, email) {
        this._name = name;
        this._email = email;
        this._uuid = id
    }

    get name() { return this._name; }

    get email() { return this._email; }

    get user() { return this._user; }

    set name(name) { this._name = name; }

    set email(email) { this._email = email; }
}