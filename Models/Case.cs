using System.Collections;

public class Case
{
    public int CaseId { get; set; }
    public string CaseName { get; set; }
    public int UserId { get; set; }
    public bool IsOngoing { get; set; }
    public bool IsWon { get; set; }
    public ICollection<Document> Documents { get; set; }
    public User User { get; set; }
}

