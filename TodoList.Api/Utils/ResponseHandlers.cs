using System;
using System.Net;
using System.Net.Http;

namespace TodoList.Api.Utils
{
    public class ResponseHandlers
    {
        public static HttpResponseMessage HandleInternalServerError(HttpRequestMessage request, Exception e)
        {
            Console.WriteLine(e.Message);
            return request.CreateResponse(HttpStatusCode.InternalServerError);
        }
    }
}