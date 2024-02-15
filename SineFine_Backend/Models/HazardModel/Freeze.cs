// Eriaos

using SineFine_BackEnd.Enums;

namespace SineFine_BackEnd.Models.HazardModel;

public class Freeze : Hazard
{
    public int Name;
    public Season ActiveSeason;
    public int LengthOfHazard;

    internal override void HandleHazard()
    {
        
    }
}