using Dapper;
using System.Collections.Generic;
using System.Data;
using TodoList.Domain.Entities;

namespace TodoList.Database.Repositories
{
    public class UsersRepository : BaseRepository
    {
        public List<User> QueryUsers()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<User>("query_users", commandType: CommandType.StoredProcedure).AsList();
            }
        }

        public User InsertUser(string name)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", dbType: DbType.Int32, direction: ParameterDirection.Output);
                parameters.Add("p_name", name);

                connection.Execute("insert_user", parameters, commandType: CommandType.StoredProcedure);

                var id = parameters.Get<int>("p_id");

                return new User(id, name);
            }
        }

        public void DeleteUser(int id)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", id);

                connection.Execute("delete_user", parameters, commandType: CommandType.StoredProcedure);
            }
        }
    }
}
