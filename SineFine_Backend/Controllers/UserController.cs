// Eriaos

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using SineFine_BackEnd.Services.CityService;
using SineFine_BackEnd.Services.MapService;
using Microsoft.AspNetCore.Mvc;

namespace SineFine_BackEnd.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(Roles = "User, Premium")]
public class UserController(
        IExpand expandService,
        IExplore exploreService,
        IHarvest harvestService,
        IGrow growService,
        ITurn turnService,
        IRender renderService)
{
    private readonly IExpand _expandService = expandService;
    private readonly IExplore _exploreService = exploreService;
    private readonly IHarvest _harvestService = harvestService;
    private readonly IGrow _growService = growService;
    private readonly ITurn _turnService = turnService;
    private readonly IRender _renderService = renderService;

    [HttpGet("GetMaps")]
    public async Task<IActionResult> GetMaps()
    {
        try
        {
            var result = await _renderService.GetMapsForUser();
            
            
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
    
}