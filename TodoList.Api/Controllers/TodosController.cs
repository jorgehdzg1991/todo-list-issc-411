using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TodoList.Api.Requests;
using TodoList.Api.Utils;
using TodoList.Database.Exceptions;
using TodoList.Database.Repositories;

namespace TodoList.Api.Controllers
{
    [RoutePrefix("api/todos")]
    [EnableCors("*", "*", "*")]
    public class TodosController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetTodos()
        {
            try
            {
                var todos = new TodosRepository().QueryTodos();
                return Request.CreateResponse(HttpStatusCode.OK, todos);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpPost]
        public HttpResponseMessage AddTodo(AddTodoRequest request)
        {
            try
            {
                var todo = new TodosRepository().InsertTodo(request.TodoText, request.AssignedUserId);
                return Request.CreateResponse(HttpStatusCode.OK, todo);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpPut]
        [Route("{id}")]
        public HttpResponseMessage UpdateTodoCompletedStatus([FromUri] int id, [FromBody] UpdateTodoCompletedStatusRequest request)
        {
            try
            {
                var todosRepository = new TodosRepository();

                var todo = todosRepository.QueryTodoById(id);
                var updatedTodo = todosRepository.UpdateTodoCompletedStatus(todo, request.Status);

                return Request.CreateResponse(HttpStatusCode.OK, updatedTodo);
            }
            catch (EntityNotFoundException)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public HttpResponseMessage DeleteTodo(int id)
        {
            try
            {
                new TodosRepository().DeleteTodo(id);

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }
    }
}
