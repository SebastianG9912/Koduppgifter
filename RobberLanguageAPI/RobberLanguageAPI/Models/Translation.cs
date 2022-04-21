using System.ComponentModel.DataAnnotations;

namespace RobberLanguageAPI.Models
{
    public class Translation
    {
        [Key] 
        public int Id { get; set; }
        public string OriginalSentence { get; set; }
        public string TranslatedSentence { get; set;}
        public DateTime CreationDate { get; set; }
        public DateTime ModificatinDate { get; set; }
    }
}
