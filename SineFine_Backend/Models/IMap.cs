// Eriaos

using SineFine_BackEnd.Enums;
using SineFine_BackEnd.Models.ZoneModel;

namespace SineFine_BackEnd.Models;

public interface IMap
{
    public int Id { get; set; }
    
    public string MapName { get; set; }
    
    public Zone[] MapZones { get; set; }
    
    public Season CurrentSeason { get; set; }

}