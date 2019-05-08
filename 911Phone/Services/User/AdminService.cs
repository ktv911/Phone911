﻿using Phone.Data.Entities.User;
using Phone.Repositories.User.Interfaces;
using Phone.Services.User.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Phone.Services.User
{
    public class AdminService : IUserAdminService
    {
        private IUserAdminRepository userRepository;

        public AdminService(IUserAdminRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        /// <summary>
        /// Method return list user with role admin
        /// <summary>
        /// <returns>IList<ApplicationUser></returns>
        public async Task<IList<ApplicationUser>> ListAdminsAsync()
        {
            return await userRepository.ListAdminsAsync();
        }

        /// <summary>
        /// Method return single user with role admin
        /// <summary>
        /// <param name="userId">string</param>
        /// <returns>ApplicationUser</returns>
        public async Task<ApplicationUser> GetAdminAsync(string userId)
        {
            return await userRepository.GetAdminAsync(userId); 
        }

        /// <summary>
        /// Method return role  by user
        /// <summary>
        /// <param name="user">ApplicationUser</param>
        /// <returns>string</returns>
        public async Task<string> GetRoleByUserId(ApplicationUser user)
        {
            return await userRepository.GetRoleByUserId(user);
        }

        /// <summary>
        /// Method create user and returned id
        /// <summary>
        /// <param name="user">ApplicationUser</param>
        /// <returns>IList<ApplicationUser></returns>
        public async Task CreateUserAsync(ApplicationUser user)
        {
            await userRepository.CreateUserAsync(user);
        }
    }
}
