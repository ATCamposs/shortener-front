export interface UserRegisterRequest {
    username: string,
    email: string,
    password: string,
    repeatPassword: string
}

export interface ValidationErrors {
    username: Array<string>
    email: Array<string>
    password: Array<string>
    repeatPassword: Array<string>
    afterRequest: Array<string>
}
