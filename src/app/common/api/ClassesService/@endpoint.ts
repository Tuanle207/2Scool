const Endpoint = {
  GetClassById: (id: string) =>
    `/api/app/classes/${id}`,
  GetAllClasss: () => 
    `/api/app/classes/paging`,
  CreateClass: () =>
    `/api/app/classes`,
  UpdateClass: (id: string) =>
    `/api/app/classes/${id}`,
  RemoveClass: (id: string) =>
    `/api/app/classes/${id}`,
}

export default Endpoint;