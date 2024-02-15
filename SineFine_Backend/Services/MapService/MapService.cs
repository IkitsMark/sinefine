// 

using SineFine_BackEnd.Models;
using SineFine_BackEnd.Models.HazardModel;

namespace SineFine_BackEnd.Services.MapService;

public class MapService : IRender, ITurn
{
    public Task<List<Map>> GetMapsForUser()
    {
        throw new NotImplementedException();
    }

    public Task<Map> RenderSelectedMapForUser()
    {
        throw new NotImplementedException();
    }

    public Task<Map> DeleteMapForUser()
    {
        throw new NotImplementedException();
    }

    public Task<int> PassTime()
    {
        throw new NotImplementedException();
    }

    public Task<CityState[]> CreateTurnOrder()
    {
        throw new NotImplementedException();
    }

    public Task<Hazard?> ChooseHazard()
    {
        throw new NotImplementedException();
    }

    public Task<Hazard> HandleHazard(Hazard hazard)
    {
        throw new NotImplementedException();
    }
}