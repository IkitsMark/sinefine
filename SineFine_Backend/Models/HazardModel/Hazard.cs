// Eriaos

using SineFine_BackEnd.Enums;

namespace SineFine_BackEnd.Models.HazardModel;

public abstract class Hazard
{
    public int Name;
    public Season ActiveSeason;
    public int LengthOfHazard;

    internal virtual void HandleHazard()
    {
        
    }
}