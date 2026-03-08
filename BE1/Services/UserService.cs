using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE1.Config;
using BE1.DTOs;
using BE1.Models;
using BE1.Services.Interface;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BE1.Services
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> _usersCollection;
        public UserService(IOptions<MongoDbSettings> mongoDbSettings)
        {
            var client = new MongoClient(mongoDbSettings.Value.ConnectionString);
            var database = client.GetDatabase(mongoDbSettings.Value.DatabaseName);
            _usersCollection = database.GetCollection<User>(mongoDbSettings.Value.UsersCollectionName);
        }
        public async Task<List<User>> GetAllUsers()
        {
            return await _usersCollection.Find(user => true).ToListAsync();
        }
        public async Task<User> CreateUser(UserDto userDto)
        {
            var user = new User { Name = userDto.Name };
            await _usersCollection.InsertOneAsync(user);
            return user;
        }
        public async Task<bool> DeleteUser(string id)
        {
            var result = await _usersCollection.DeleteOneAsync(user => user.Id == id);
            return result.DeletedCount > 0;
        }

        public async Task<User> GetUserById(string id)
        {
            var user = await _usersCollection.Find(user => user.Id == id).FirstOrDefaultAsync();
            return user;
        }
        public async Task<bool> UpdateUser(string id, UserDto userDto)
        {
            var update = Builders<User>.Update.Set(u => u.Name, userDto.Name);
            var result = await _usersCollection.UpdateOneAsync(u => u.Id == id, update);
            return result.ModifiedCount > 0;
        }
    }
}