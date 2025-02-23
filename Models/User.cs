public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string PasswordHash { get; set; }
    public string Email { get; set; }
    public string PreferredName { get; set; }
    public bool IsActive { get; set; }
    public bool HasActiveCase { get; set; }
    public ICollection<Case> Cases { get; set; }
}
