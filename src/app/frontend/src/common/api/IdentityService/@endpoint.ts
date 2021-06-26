const Endpoint = {
  
  GetUserProfile: () =>
    `/api/identity/my-profile`,
  UpdateProfileDetail: () =>
    `/api/identity/my-profile`,
  ChangePassword: () =>
    `/api/identity/my-profile/change-password`,

  // role management
  GetAllRoles: () =>
    `/api/identity/roles/all`,
  GetAllRolesWithFilter: () =>
    `/api/identity/roles`,
  GetRoleById: () =>
    `/api/identity/roles`,
  CreateRole: () =>
    `/api/identity/roles`,
  UpdateRole: (id: string) =>
    `/api/identity/roles/${id}`,
  RemoveRole: (id: string) =>
    `/api/identity/roles/${id}`,
  GetUserRoles: (id: string) =>
    `/api/identity/users/${id}/roles`,
  GetPermissions: () =>
  `/api/permission-management/permissions`,
  UpdatePermissions: () =>
  `/api/permission-management/permissions`,
  
  // user managerment
  GetUsers: () =>
    `/api/identity/users`,
  GetUserById: (id: string) =>
    `/api/identity/users/${id}`,
  GetUserRoleById: (id: string) =>
  `/api/identity/users/${id}/roles`,
  UpdateUserRoleById: (id: string) =>
  `/api/identity/users/${id}/roles`,
  GetAssignableRoles: () =>
  `/api/identity/users/assignable-roles`,
  CreateUser: () =>
    `/api/identity/users`,
  UpdateUser: (id: string) =>
    `/api/identity/users/${id}`,
  RemoveUser: (id: string) =>
    `/api/identity/users/${id}`,
}

export default Endpoint;