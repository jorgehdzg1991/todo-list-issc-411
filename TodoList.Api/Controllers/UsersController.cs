using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using TodoList.Api.Requests;
using TodoList.Api.Utils;
using TodoList.Database.Repositories;

namespace TodoList.Api.Controllers
{
    [RoutePrefix("api/users")]
    [EnableCors("*", "*", "*")]
    public class UsersController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage GetUsers()
        {
            try
            {
                var users = new UsersRepository().QueryUsers();

                return Request.CreateResponse(HttpStatusCode.OK, users);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpPost]
        public HttpResponseMessage AddUser([FromBody] AddUserRequest request)
        {
            try
            {
                var user = new UsersRepository().InsertUser(request.Name);

                return Request.CreateResponse(HttpStatusCode.OK, user);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public HttpResponseMessage DeleteUser(int id)
        {
            try
            {
                new UsersRepository().DeleteUser(id);
                
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                return ResponseHandlers.HandleInternalServerError(Request, e);
            }
        }
    }
}
