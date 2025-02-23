using System.Collections;

public class Case
{
    public int CaseId { get; set; }
    public required string CaseName { get; set; }
    public required string UserId { get; set; }
    public required bool IsOngoing { get; set; }
    public required bool IsWon { get; set; }
    public virtual  ICollection<Document>? Documents { get; set; }
    public virtual required User User { get; set; }
}

