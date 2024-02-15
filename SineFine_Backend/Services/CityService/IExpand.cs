// Eriaos

using SineFine_BackEnd.Models.ZoneModel;

namespace SineFine_BackEnd.Services.CityService;

public interface IExpand
{
    Task<Zone> AttemptToTakeTerritory();

    Task<Zone> Colonize();
    
    Task<Zone> WageWar();
}