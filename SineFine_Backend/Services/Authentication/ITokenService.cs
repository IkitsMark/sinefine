using Microsoft.AspNetCore.Identity;

namespace SineFine_BackEnd.Services.Authentication;

public interface ITokenService
{
        string CreateToken(IdentityUser user, string? role);
}