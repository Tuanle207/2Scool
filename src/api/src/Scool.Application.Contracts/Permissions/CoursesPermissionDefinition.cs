using Scool.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Scool.Application.Contracts.Permissions
{
    public class CoursesAppService : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var group = context.AddGroup(CoursesPermissions.GroupName);

            group.AddPermission(CoursesPermissions.Get, 
                L("Permission:" + CoursesPermissions.Get));

            group.AddPermission(CoursesPermissions.GetAll, 
                L("Permission:" + CoursesPermissions.GetAll));

            group.AddPermission(CoursesPermissions.Create, 
                L("Permission:" + CoursesPermissions.Create));

            group.AddPermission(CoursesPermissions.Update,
                L("Permission:" + CoursesPermissions.Update));

            group.AddPermission(CoursesPermissions.Delete, 
                L("Permission:" + CoursesPermissions.Delete));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ScoolResource>(name);
        }
    }
}