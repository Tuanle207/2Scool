/**
   * Models Interface
   */
export namespace Model {

  //#region Request params

  //#endregion

  
  //#region Request body

  export interface LoginReqBody {
    username: string,
    password: string
  }

  export interface UpdateProfileReqBody {
    userName: string,
    email: string,
    name: string,
    surname: string,
    phoneNumber: string
  }

  //#region Response body
  
  export interface IUser { [key: string]: any; }
  export interface LoginResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
  }

  //#endregion
}