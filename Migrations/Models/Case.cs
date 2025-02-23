using System.Collections;

public class Case
{
    public int CaseId { get; set; }
    public required string CaseName { get; set; }
    public int UserId { get; set; }
    public required bool IsOngoing { get; set; }
    public required bool IsWon { get; set; }
    public ICollection<Document>? Documents { get; set; }
    public required User User { get; set; }
}

