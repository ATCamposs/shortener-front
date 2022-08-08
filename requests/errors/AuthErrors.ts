export class UserAlreadyExistsByEmailException extends Error {
  constructor (msg: string) {
    super(msg)
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UserAlreadyExistsByEmailException.prototype)
  }
}
