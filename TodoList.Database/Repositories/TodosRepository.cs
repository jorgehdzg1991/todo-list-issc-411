using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using TodoList.Database.Exceptions;
using TodoList.Domain.Entities;

namespace TodoList.Database.Repositories
{
    public class TodosRepository : BaseRepository
    {
        public List<Todo> QueryTodos()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<Todo>("query_todos", commandType: CommandType.StoredProcedure).AsList();
            }
        }

        public Todo QueryTodoById(int id)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", id);

                var todo = connection
                    .Query<Todo>("query_todo_by_id", parameters, commandType: CommandType.StoredProcedure)
                    .FirstOrDefault();

                if (todo == null)
                {
                    throw new EntityNotFoundException();
                }

                return todo;
            }
        }

        public Todo InsertTodo(string todoText, int assignedUserId)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", dbType: DbType.Int32, direction: ParameterDirection.Output);
                parameters.Add("p_text", todoText);
                parameters.Add("p_assigned_user_id", assignedUserId);

                connection.Execute("insert_todo", parameters, commandType: CommandType.StoredProcedure);

                var id = parameters.Get<int>("p_id");

                return new Todo(id, todoText, assignedUserId, false);
            }
        }

        public Todo UpdateTodoCompletedStatus(Todo todo, bool newCompletedStatus)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", todo.Id);
                parameters.Add("p_completed", newCompletedStatus);

                connection.Execute("update_todo_completed_status", parameters, commandType: CommandType.StoredProcedure);

                return new Todo(todo.Id, todo.Text, todo.AssignedUserId, newCompletedStatus);
            }
        }

        public void DeleteTodo(int id)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("p_id", id);

                connection.Execute("delete_todo", parameters, commandType: CommandType.StoredProcedure);
            }
        }
    }
}
