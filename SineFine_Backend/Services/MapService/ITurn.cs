// Eriaos

using SineFine_BackEnd.Models;
using SineFine_BackEnd.Models.HazardModel;

namespace SineFine_BackEnd.Services.MapService;

public interface ITurn
{
    Task<int> PassTime();

    Task<CityState[]> CreateTurnOrder();

    Task<Hazard?> ChooseHazard();

    Task<Hazard> HandleHazard(Hazard hazard);

}
