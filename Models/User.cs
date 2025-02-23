using Microsoft.AspNetCore.Identity;

public class User : IdentityUser
{
    public override required string PasswordHash { get; set; }
    public override required string Email { get; set; }
    public required string PreferredName { get; set; }
    public required bool IsActive { get; set; }
    public required bool HasActiveCase { get; set; }
    public virtual ICollection<Case>? Cases { get; set; }
}
