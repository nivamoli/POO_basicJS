class Tarjeta extends Payment() {
  constructor(id, franquicia, fechaVencimiento, cvv) {
    super(id);
    this.franquicia = franquicia;
    this.fechaVencimiento = fechaVencimiento;
    this.cvv = cvv;
  }
}