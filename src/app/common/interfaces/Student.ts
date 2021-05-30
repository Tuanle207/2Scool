import { Class } from '.';

export namespace Student {
  
  export interface StudentDto {
    id: string;
    name: string;
    classId: string;
    class: Class.ClassForStudentDto;
    dob: Date;
    parentPhoneNumber: string;
  }

  export interface CreateUpdateStudentDto {
    name: string;
    classId: string;
    dob: Date;
    parentPhoneNumber: string;
  }
}