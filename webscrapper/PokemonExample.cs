using HtmlAgilityPack; 
using CsvHelper; 
using System.Globalization; 
 
namespace SimpleWebScraper 
{ 
	public class Program 
	{ 
		// defining a custom class to store the scraped data 
		public class PokemonProduct 
		{ 
			public string? Url { get; set; } 
			public string? Image { get; set; } 
			public string? Name { get; set; } 
			public string? Price { get; set; } 
		} 
 
		public static void Main() 
		{ 
			// creating the list that will keep the scraped data 
			var pokemonProducts = new List<PokemonProduct>(); 
 
			// creating the HAP object 
			var web = new HtmlWeb(); 
 
			// visiting the target web page 
			var document = web.Load("https://scrapeme.live/shop/"); 
 
			// getting the list of HTML product nodes 
			var productHTMLElements = document.DocumentNode.QuerySelectorAll("li.product"); 
			// iterating over the list of product HTML elements 
			foreach (var productHTMLElement in productHTMLElements) 
			{ 
				// scraping logic 
				var url = HtmlEntity.DeEntitize(productHTMLElement.QuerySelector("a").Attributes["href"].Value); 
				var image = HtmlEntity.DeEntitize(productHTMLElement.QuerySelector("img").Attributes["src"].Value); 
				var name = HtmlEntity.DeEntitize(productHTMLElement.QuerySelector("h2").InnerText); 
				var price = HtmlEntity.DeEntitize(productHTMLElement.QuerySelector(".price").InnerText); 
 
				var pokemonProduct = new PokemonProduct() { Url = url, Image = image, Name = name, Price = price }; 
				pokemonProducts.Add(pokemonProduct); 
			} 
 
			// crating the CSV output file 
			using (var writer = new StreamWriter("pokemon-products.csv")) 
			using (var csv = new CsvWriter(writer, CultureInfo.InvariantCulture)) 
			{ 
				// populating the CSV file 
				csv.WriteRecords(pokemonProducts); 
			} 
		} 
	} 
}