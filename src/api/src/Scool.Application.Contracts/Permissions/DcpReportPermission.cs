using Scool.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Scool.Application.Permissions
{
    internal class DcpReportPermission : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            PermissionGroupDefinition group = context.GetGroupOrNull(PermissionGroupsConst.DcpReports);
            string prefix = $"Permission:{PermissionGroupsConst.DcpReports}";

            if (group == null)
            {
                group = context.AddGroup(PermissionGroupsConst.DcpReports, L(prefix));
            }

            prefix += ":";

            var coursePermission = group.AddPermission(DcpReportsPermissions.Permission,
                L(prefix + DcpReportsPermissions.Permission));

            coursePermission.AddChild(DcpReportsPermissions.Get, 
                L(prefix + DcpReportsPermissions.Get));

            coursePermission.AddChild(DcpReportsPermissions.GetAll, 
                L(prefix + DcpReportsPermissions.GetAll));

            coursePermission.AddChild(DcpReportsPermissions.Create, 
                L(prefix + DcpReportsPermissions.Create));

            coursePermission.AddChild(DcpReportsPermissions.Update,
                L(prefix + DcpReportsPermissions.Update));

            coursePermission.AddChild(DcpReportsPermissions.Delete, 
                L(prefix + DcpReportsPermissions.Delete));

            coursePermission.AddChild(DcpReportsPermissions.AcceptReject,
                L(prefix + DcpReportsPermissions.AcceptReject));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ScoolResource>(name);
        }
    }

    public static class DcpReportsPermissions
    {
        public const string Permission = "DcpReports";
        public const string Get = Permission + ".Get";
        public const string GetAll = Permission + ".GetAll";
        public const string Create = Permission + ".Create";
        public const string Update = Permission + ".Update";
        public const string Delete = Permission + ".Delete";
        public const string AcceptReject = Permission + ".AcceptReject";

    }
}