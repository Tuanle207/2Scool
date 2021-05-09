
export namespace Course {
  
  export interface Course {
    id: string;
    name: string;
    description?: string;
    startTime: Date;
    finishTime: Date;
  }
  
  export interface CreateOrUpdateCourseDto {
    name: string;
    description: string;
    startTime: Date;
    finishTime: Date;
  }
}

