class User extends Account {
  constructor(name, document, email, password) {
    super(name, document);
    this.email = email;
    this.password = password;
  }

  printDataUser = () => {
    console.log(`Nombre: ${this.name}`)
    console.log(`Documento: ${this.document}`)
    console.log(`Email: ${this.email}`)
    console.log(`Password: ${this.password}`)
  }
}