using SineFine_BackEnd.Enums;

namespace SineFine_BackEnd.Models.ZoneModel;

public class Water(Tuple<int> coordinateId, CityState? ownership, Resource[] zoneResources) : Zone(coordinateId, ownership, zoneResources)
{
    public Tuple<int> CoordinateID { get; set; }
    
    public CityState? Ownership { get; set; }
    
    public Resource[] ZoneResources { get; set; }
}