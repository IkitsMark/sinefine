// Eriaos

using System.Drawing;
using SineFine_BackEnd.Enums;

namespace SineFine_BackEnd.Models;

public interface ICityState
{
    public Guid Id { get; set; }
    
    public string StateName { get; set; }
    
    public Tuple<int> CityPos { get; set; }
    
    //Probably should save an array of positions, instead of Zones
    public Tuple<int>[] StateDomain { get; set; }
    
    public Dictionary<Resource,int> Stock { get; set; }
    
    public Color Color { get; set; }
 
    
    
}