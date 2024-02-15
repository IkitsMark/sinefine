// Eriaos

using SineFine_BackEnd.Models.ZoneModel;

namespace SineFine_BackEnd.Services.CityService;

public interface IExplore
{
    Task<List<Zone>?> ExploreZones();
    
    Task<Tuple<int>> CalculateWorth();
}