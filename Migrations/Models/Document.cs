public class Document
{
    public int DocumentId { get; set; }
    public string? FilePath { get; set; }
    public int? CaseId { get; set; }
    public Case? Case { get; set; }
}