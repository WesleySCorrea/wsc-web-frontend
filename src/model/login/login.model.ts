export interface LoginRequest {
    username: string,
    password: string,
}

export interface LoginResponse {
    accessToken: string,
    refreshToken: string,
    tokenType: string,
    userId: number,
    username: string,
    role: string,
    accessTokenExpiresIn: number,
    refreshTokenExpiresIn: number,
}