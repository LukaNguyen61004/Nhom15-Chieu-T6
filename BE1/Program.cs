using System.Reflection;
using BE1.Config;
using BE1.Services;
using BE1.Services.Interface;

var builder = WebApplication.CreateBuilder(args);

var mongoUri = Environment.GetEnvironmentVariable("MONGODB_URI");
if (!string.IsNullOrEmpty(mongoUri))
    builder.Configuration["MongoDbSettings:ConnectionString"] = mongoUri;

builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "User API",
        Version = "v1",
        Description = "CRUD API cho collection Users trên MongoDB Atlas"
    });

    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    if (File.Exists(xmlPath))
        options.IncludeXmlComments(xmlPath);
});

var app = builder.Build();

// ─── Middleware ───────────────────────────────────────────────────────────────
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "User API v1");
    c.RoutePrefix = string.Empty; // Swagger tại http://localhost:5000
});

app.UseAuthorization();
app.MapControllers();

app.Run();