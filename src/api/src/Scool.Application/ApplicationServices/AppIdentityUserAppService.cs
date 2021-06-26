using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Scool.Application.ObjectExtentions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.Domain.Repositories;
using Scool.Domain.Common;
using Scool.AppConsts;

namespace Scool.ApplicationServices
{
    [Dependency(ReplaceServices = true)]
    [ExposeServices(typeof(IIdentityUserAppService), typeof(IdentityUserAppService), typeof(AppIdentityUserAppService))]
    public class AppIdentityUserAppService : IdentityUserAppService
    {
        private readonly IRepository<UserProfile, Guid> _userProfilesRepository;

        public AppIdentityUserAppService(IdentityUserManager userManager, IIdentityUserRepository userRepository,
            IIdentityRoleRepository roleRepository, IOptions<IdentityOptions> identityOptions,
                IRepository<UserProfile, Guid> userProfilesRepository)
                : base(userManager, userRepository, roleRepository, identityOptions)
        {
            _userProfilesRepository = userProfilesRepository;
        }

        public async override Task<IdentityUserDto> CreateAsync(IdentityUserCreateDto input)
        {
            var classIdRaw = input.ExtraProperties.GetOrDefault(IdentityUserCreateDtoExt.ClassId).ToString();

            if (classIdRaw != null)
            {
                string[] roles = { AppRole.DcpReporterStudent, AppRole.LessonsRegisterReporter };
                input.RoleNames = roles;
            }

            var result = await base.CreateAsync(input);
            await CurrentUnitOfWork.SaveChangesAsync();

            var userProfile = new UserProfile
            {
                UserId = result.Id,
                DisplayName = input.Name,
                PhoneNo = input.PhoneNumber,
                ClassId = new Guid(classIdRaw),
                Dob = input.ExtraProperties.GetOrDefault(IdentityUserCreateDtoExt.Dob) as DateTime?
            };

            await _userProfilesRepository.InsertAsync(userProfile);

            return result;
        }
    }
}
