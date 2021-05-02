/**
   * Ultilities Interface
   */
export namespace Util {
  
  export interface IObject { [key: string]: any; }

  export interface BaseAction {
    type: string,
    payload?: any
  }
}