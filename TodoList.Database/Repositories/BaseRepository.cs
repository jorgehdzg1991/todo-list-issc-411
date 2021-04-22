using MySql.Data.MySqlClient;
using System.Configuration;

namespace TodoList.Database.Repositories
{
    public class BaseRepository
    {
        private readonly string _connectionString =
            ConfigurationManager.ConnectionStrings["todo_list"].ToString();

        public MySqlConnection CreateConnection()
        {
            return new MySqlConnection(_connectionString);
        }
    }
}
