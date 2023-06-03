using HtmlAgilityPack;
using System.Xml.Linq;

// This progream collects a list of people from a website
// Narrows down to get each members name and an image url
// The adds items to a Dictionary
namespace WebScrapper2
{
     class Program
    {
        static void Main(string[] args)
        {

            // Where to get data from
            String url = "https://www.parallelparliament.co.uk/MPs";
            String srcUrl = "https://www.parallelparliament.co.uk";

            int startingIndex = 1;
            // Create a client object
            var httpClient = new HttpClient();

            // use get string to create a get request
            // .result will give us a field
            var html = httpClient.GetStringAsync(url).Result;
            // Console.WriteLine("HTML: " + html); // This will display all html

            // Convert to a format
            var htmlDocument = new HtmlDocument();
            htmlDocument.LoadHtml(html);

            HtmlNode[] nodes = htmlDocument.DocumentNode.SelectNodes("/html/body/div[3]/div[3]/div/div/div[2]/div/div[1]/div[1]/div[1]").ToArray();

            List<string> nameList = new List<string>();

            Dictionary<int, MemberCard> cards = new Dictionary<int, MemberCard>();

            foreach (HtmlNode item in nodes)
            {
                Console.WriteLine("ITEM" + item.InnerHtml);

                var img = item.SelectSingleNode("a/img");
                Console.WriteLine(img.Attributes["src"].Value);

                var src = img.Attributes["src"].Value;
                Console.WriteLine("IMage src" + src);

                var fullSrcUrl = srcUrl + src;
                Console.WriteLine("Full " + fullSrcUrl);

                // Get name
                var _name = item.SelectSingleNode("div/a/h3");
                var nome = _name.InnerText;
                Console.WriteLine($"_NAME {_name}");
                Console.WriteLine($"NOME {nome}");

                cards.Add(startingIndex, new MemberCard() { Name = nome, ImageURL = fullSrcUrl });
                startingIndex++;
            }

            foreach (MemberCard card in cards.Values)
            {
                Console.WriteLine("FOUND " + card.Name);
                Console.WriteLine("FOUND " + card.ImageURL);
            }

            Console.ReadLine();
        }
    }

    class MemberCard
    {
        public string Name { get; set; }
        public string ImageURL { get; set; }

    }
    
}