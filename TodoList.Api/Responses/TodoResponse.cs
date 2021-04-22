namespace TodoList.Api.Responses
{
    public class TodoResponse
    {
        public int Id { get; set; }
        public string What { get; set; }
        public string ByWho { get; set; }
        public bool Completed { get; set; }

        public TodoResponse(int id, string what, string byWho, bool completed)
        {
            Id = id;
            What = what;
            ByWho = byWho;
            Completed = completed;
        }
    }
}
