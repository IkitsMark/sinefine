// 

using SineFine_BackEnd.Models.ZoneModel;

namespace SineFine_BackEnd.Services.CityService;

public class CityService : IExplore,IExpand,IHarvest,IGrow
{
    public Task<List<Zone>?> GrowPopulation()
    {
        throw new NotImplementedException();
    }

    public Task<List<Zone>?> GrowEconomy()
    {
        throw new NotImplementedException();
    }

    public Task<List<Zone>?> ExploreZones()
    {
        throw new NotImplementedException();
    }

    public Task<Tuple<int>> CalculateWorth()
    {
        throw new NotImplementedException();
    }

    public Task<Zone> AttemptToTakeTerritory()
    {
        throw new NotImplementedException();
    }

    public Task<Zone> Colonize()
    {
        throw new NotImplementedException();
    }

    public Task<Zone> WageWar()
    {
        throw new NotImplementedException();
    }

    public Task<int> HarvestResources()
    {
        throw new NotImplementedException();
    }
}