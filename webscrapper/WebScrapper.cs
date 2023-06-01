using HtmlAgilityPack;
using System;
using System.Net.Http;

namespace WebScrapper
{
     class Program
    {
        // Main method to run program
        static void Main(string[] args)
        {
            // Where to get data from
            String url = "https://weather.com/en-GB/weather/today/l/UKXX0085:1:UK";

            // Create a client object
            var httpClient = new HttpClient();
            // use get string to create a get request
            // .result will give us a field
            var html = httpClient.GetStringAsync(url).Result;
            // Console.WriteLine(html); // This will display all html

            // Convert to a format
            var htmlDocument = new HtmlDocument();
            htmlDocument.LoadHtml(html);

            // Get temperature
            // Get all elements in the html script from our document that match our needs
            var temperatureElement = htmlDocument.DocumentNode.SelectSingleNode("//span[@class='CurrentConditions--tempValue--MHmYY']");
            Console.WriteLine("temp e = " + temperatureElement);
            var temperature = temperatureElement.InnerText.Trim();
            Console.WriteLine("temp inner = " + temperature);
            // Get conditions

            // Get location

            // Console.WriteLine(htmlDocument);
            Console.ReadLine();
        }
    }
}