using System.ComponentModel.DataAnnotations;
using System.Drawing;
using SineFine_BackEnd.Enums;

namespace SineFine_BackEnd.Models;

public class CityState : ICityState
{
    [Key]
    public Guid Id { get; set; }
    public string StateName { get; set; }
    public Tuple<int> CityPos { get; set; }
    public Tuple<int>[] StateDomain { get; set; }
    public Dictionary<Resource, int> Stock { get; set; }
    public Color Color { get; set; }
}
