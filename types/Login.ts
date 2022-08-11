export interface UserLoginRequest {
    email: string,
    password: string
}

export interface UserLoginValidationErrors {
    email: Array<string>
    password: Array<string>
    afterRequest: Array<string>
}
