const Endpoint = {
  GetClassById: (id: string) =>
    `/api/app/classes/${id}`,
  GetAllClasss: () => 
    `/api/app/classes/paging`,
  GetClasses: () =>
   `/api/app/classes/simple-list`,
  CreateClass: () =>
    `/api/app/classes`,
  UpdateClass: (id: string) =>
    `/api/app/classes/${id}`,
  RemoveClass: (id: string) =>
    `/api/app/classes/${id}`,
}

export default Endpoint;