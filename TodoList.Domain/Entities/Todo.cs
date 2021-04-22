namespace TodoList.Domain.Entities
{
    public class Todo
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int AssignedUserId { get; set; }
        public bool Completed { get; set; }

        public Todo()
        {}

        public Todo(int id, string text, int assignedUserId, bool completed)
        {
            Id = id;
            Text = text;
            AssignedUserId = assignedUserId;
            Completed = completed;
        }
    }
}
