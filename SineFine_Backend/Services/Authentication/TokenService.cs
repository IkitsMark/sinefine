// Eriaos

using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;

namespace SineFine_BackEnd.Services.Authentication;

public class TokenService : ITokenService
{
    public string CreateToken(IdentityUser user, string? role)
    {
        throw new NotImplementedException();
    }
}