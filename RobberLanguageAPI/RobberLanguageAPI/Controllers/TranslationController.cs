using System.Runtime.ConstrainedExecution;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;
using RobberLanguageAPI.Data;
using RobberLanguageAPI.Models;

namespace RobberLanguageAPI.Controllers
{
    [ApiController]
    [Route("api/RobberLanguage")]
    public class TranslationController : ControllerBase
    {
        private char[] _vowels = {'A','O','U','Å','E','I','Y','Ä','Ö'};
        private RobberTranslationDBContext _ctx;

        public TranslationController(RobberTranslationDBContext context)
        {
            _ctx = context;
        }

        [HttpPost]
        [Route("CreateNewTranslation")]
        public async Task<ActionResult<Translation>> ToRobberLanguage(Translation originalText)
        {
            if (string.IsNullOrWhiteSpace(originalText.OriginalSentence))
            {
                return BadRequest();
            }

            string textToTranslate = originalText.OriginalSentence;
            string translatedText = "";
            foreach (var c in textToTranslate)
            {
                if (_vowels.Contains(char.Parse(c.ToString().ToUpper())))
                {
                    translatedText += c;
                }
                else
                {
                    translatedText += c + "o" + c.ToString().ToLower();
                }
            }

            Translation translation = new Translation()
            {
                OriginalSentence = textToTranslate, 
                TranslatedSentence = translatedText,
                CreationDate = DateTime.Now,
                ModificatinDate = DateTime.Now
            };

            await SaveTranslation(translation);
            return CreatedAtAction(nameof(), new {id = translation.Id}, translation);
        }

        public async Task SaveTranslation(Translation text)
        {
            await _ctx.Translations.AddAsync(text);
            await _ctx.SaveChangesAsync();
        }
    }
}
