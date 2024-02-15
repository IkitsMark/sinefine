// Eriaos

using SineFine_BackEnd.Models;

namespace SineFine_BackEnd.Services.MapService;

public interface IRender
{
    Task<List<Map>> GetMapsForUser();

    Task<Map> RenderSelectedMapForUser();

    Task<Map> DeleteMapForUser();
}