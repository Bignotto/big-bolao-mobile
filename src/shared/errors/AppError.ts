export class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  //TODO: translate supabase errors
  constructor(message: string, statusCode = 400) {
    this.statusCode = statusCode;
    if (message === "Invalid login credentials")
      //not working
      this.message = "E-Mail e senha não batem.";
    else if (
      message ===
      "You must provide either an email, phone number, a third-party provider or OpenID Connect."
    )
      this.message = "Você precisa informar um endereço de e-mail.";
    else if (message === "User already registered")
      this.message = "Já existe uma conta para este endereço de e-mail.";
    else if (
      message === "A user with this email address has already been registered"
    )
      this.message = "Este endereço de e-mail já está em uso.";
    else this.message = message;
  }
}
