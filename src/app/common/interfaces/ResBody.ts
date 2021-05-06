
export namespace ResBody {

  export interface PagingModel<T> {
    items: Array<T>;
    totalCount: number;
    pageIndex: number;
    pageSize: number; 
  }

  export interface Login {
    access_token: string;
    expires_in: number;
    refresh_token: string;
  }

  export interface Course {
    id: string;
    name: string;
    description?: string;
    startTime: Date;
    finishTime: Date;
  }

}