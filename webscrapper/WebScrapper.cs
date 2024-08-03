using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

namespace WebScrapper2
{
    class Program
    {
        static async Task Main(string[] args)
        {
            int startingIndex = 1;
            int endingIndex = 150;
            string baseUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
            string saveDirectory = "C:\\Users\\tom_b\\Documents\\code\\javascript\\trading-card-game\\assets\\images";

            // Ensure the directory exists
            Directory.CreateDirectory(saveDirectory);

            using (var httpClient = new HttpClient())
            {
                for (int i = startingIndex; i <= endingIndex; i++)
                {
                    string imageUrl = $"{baseUrl}{i:D3}.png";
                    string localFilePath = Path.Combine(saveDirectory, $"{i:D3}.png");

                    try
                    {
                        byte[] imageBytes = await httpClient.GetByteArrayAsync(imageUrl);
                        await File.WriteAllBytesAsync(localFilePath, imageBytes);
                        Console.WriteLine($"Downloaded {imageUrl} to {localFilePath}");
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error downloading {imageUrl}: {ex.Message}");
                    }
                }
            }

            Console.WriteLine("Download completed.");
            Console.ReadLine();
        }
    }
}
