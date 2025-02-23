using System.ComponentModel.DataAnnotations;

public class Contact
{
    public int ContactId { get; set; }
    [Required(ErrorMessage = "Name is required.")]
    public required string Name { get; set; }
    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid email address.")]
    public required string Email { get; set; }
    [Required(ErrorMessage = "Message is required.")]
    public required string Message { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
}
