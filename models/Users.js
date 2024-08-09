/**
 * Clase User
 * 
 * Esta clase representa a un usuario con los atributos nombre, apellido,
 * correo electrónico y número de teléfono. Proporciona métodos para 
 * obtener el nombre completo del usuario, su correo electrónico y su 
 * número de teléfono.
 */
class User {
    /**
     * Constructor de la clase User.
     * 
     * @param {string} nombre - El nombre del usuario.
     * @param {string} apellido - El apellido del usuario.
     * @param {string} email - El correo electrónico del usuario.
     * @param {string} telefono - El número de teléfono del usuario.
     */
    constructor(nombre, apellido, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
    }

    /**
     * getFullName
     * 
     * Este método retorna el nombre completo del usuario combinando 
     * el nombre y el apellido.
     * 
     * @returns {string} El nombre completo del usuario.
     */
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    /**
     * getEmail
     * 
     * Este método retorna el correo electrónico del usuario.
     * 
     * @returns {string} El correo electrónico del usuario.
     */
    getEmail() {
        return this.email;
    }

    /**
     * getPhone
     * 
     * Este método retorna el número de teléfono del usuario.
     * 
     * @returns {string} El número de teléfono del usuario.
     */
    getPhone() {
        return this.telefono;
    }
}

// Exportar la clase User para que pueda ser utilizada en otros módulos.
module.exports = User;
