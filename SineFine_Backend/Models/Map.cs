// Eriaos

using System.ComponentModel.DataAnnotations;
using SineFine_BackEnd.Enums;
using SineFine_BackEnd.Models.ZoneModel;
using SineFine_BackEnd.Models.User;

namespace SineFine_BackEnd.Models;

public class Map
{
    [Key]
    public int Id { get; set; }
    
    public User.User user { get; set; }
    
    public string MapName { get; set; }
    
    public Zone[] MapZones { get; set; }
    
    public Season CurrentSeason { get; set; }
    
    
}