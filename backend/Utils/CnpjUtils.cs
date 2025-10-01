using System.Text.RegularExpressions;

namespace ClientOnApplication.Utils
{
    public static class  CnpjUtils
    {
        private static readonly Regex _numbersOnlyRegex = new(@"[^\d]", RegexOptions.Compiled);
        public static string GetNumbersOnly(string cnpj)
        {
            if (string.IsNullOrWhiteSpace(cnpj)) { return string.Empty; }

            return _numbersOnlyRegex.Replace(cnpj, "");
        }

        public static bool IsValid(string cnpj)
        {
            var cleanedCnpj = GetNumbersOnly(cnpj);
            return cleanedCnpj.Length == 14;
        }
    }
}
