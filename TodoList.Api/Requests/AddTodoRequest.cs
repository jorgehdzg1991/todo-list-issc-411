namespace TodoList.Api.Requests
{
    public class AddTodoRequest
    {
        public string TodoText { get; set; }
        public int AssignedUserId { get; set; }
    }
}
