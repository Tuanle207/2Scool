export namespace ReqBody {
  
  export interface PagingFilter {
    key: string;
    comparison: string;
    value: string;
  }

  export interface PagingInfo {
    pageIndex?: number;
    pageSize?: number;
    sortName?: string;
    ascend?: boolean;
    filter?: Array<PagingFilter>;
  }

  export interface Login {
    username: string;
    password: string;
  }

  export interface UpdateProfile {
    userName: string;
    email: string;
    name: string;
    surname: string;
    phoneNumber: string;
  }
}