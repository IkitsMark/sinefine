// Eriaos

using SineFine_BackEnd.Models.ZoneModel;

namespace SineFine_BackEnd.Services.CityService;

public interface IGrow
{
    Task<List<Zone>?> GrowPopulation();

    //This should check if a zone can grow and increase the Yield on that zone, then return a list of Zones that grow, or null
    Task<List<Zone>?> GrowEconomy();
    
    
}