using SineFine_BackEnd.Enums;

namespace SineFine_BackEnd.Models.ZoneModel;

public abstract class Zone(Tuple<int> coordinateId, CityState? ownership, Resource[] zoneResources)
{
    public Tuple<int> CoordinateID { get; set; } = coordinateId;

    public CityState? Ownership { get; set; } = ownership;

    public Resource[] ZoneResources { get; set; } = zoneResources;
}