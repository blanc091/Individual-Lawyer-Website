using Microsoft.AspNetCore.Identity;

public class User : IdentityUser
{
    public override required string Id { get; set; }
    public required string Username { get; set; }
    public override required string PasswordHash { get; set; }
    public override required string Email { get; set; }
    public required string PreferredName { get; set; }
    public bool IsActive { get; set; }
    public bool HasActiveCase { get; set; }
    public ICollection<Case>? Cases { get; set; }
}
