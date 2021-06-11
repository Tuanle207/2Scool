import { Course, Grade } from '.';
import { Criteria } from './Criteria';
import { Teacher } from './Teacher';

export namespace Regulation {

  export interface RegulationDto {
    id: string;
    name: string;
    point: number;
    criteriaId: string;
    criteria: Criteria.CriteriaDto;
  }

  export interface ClassForListDto {
    id: string;
    name: string;
    courseId: string;
    course: Course.CourseDto;
    gradeId: string;
    grade: Grade.GradeDto;
    formTeacherId: string;
    formTeacher: Teacher.TeacherDto;
    noStudents: number;
  }

  export interface ClassForStudentDto {
    id: string;
    name: string;
    courseId: string;
    formTeacherId: string;
  }

  export interface CreateUpdateClassDto {
    name: string;
    courseId: string;
    gradeId: string;
    formTeacherId: string;
  }

  export interface ClassForHomeDto {
    id: string;
    name: string;
  }
}