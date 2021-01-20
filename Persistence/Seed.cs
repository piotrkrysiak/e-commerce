using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.ProductsDb.Any())
            {
                var products = new List<Product>{
                    new Product
                    {
                        StoreId = 1,
                        SerialNumber = "CT250P2SSD8",
                        Name = "Crucial 250GB M.2 PCIe NVMe P2",
                        MainPhoto = "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/4/pr_2020_4_9_13_38_6_587_00.jpg",
                        Photo = "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/CRUCIAL/CT250P2SSD8/a2-dysk-ssd-crucial-p2-250gb-m.2-nvme.jpg",
                        Producent = "Crucial",
                        Model = "M.2 2280",
                        Price = 199.00,
                        ShippingCost = 0.00,
                        Currency = "zł",
                        Discryption = "Crucial P2 to szybki dysk M.2 NVMe o pojemności 250 GB, na którym możesz polegać. Długi czas oczekiwania na start komputera może być frustrujący bez względu na to, czy pracujesz, czy zasiadasz do gry komputerowej. Z pomocą przychodzi dysk Crucial P2, który dzięki technologii NVMe, znacznie przyspiesza działanie komputera w wielu sytuacjach.",
                        Discount = 20.00,
                        Availabity = true,
                        BuyersAmount = 5,
                        FeedbackAmount = 4,
                        Labael = "Promocja",
                        Rating = 4.0,
                    },
                    new Product
                    {
                        StoreId = 2,
                        SerialNumber = "CT250P2SSD8",
                        Name = "Crucial 250GB M.2 PCIe NVMe P2",
                        MainPhoto = "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/4/pr_2020_4_9_13_38_6_587_00.jpg",
                        Photo = "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/CRUCIAL/CT250P2SSD8/a2-dysk-ssd-crucial-p2-250gb-m.2-nvme.jpg",
                        Producent = "Crucial",
                        Model = "M.2 2280",
                        Price = 199.00,
                        ShippingCost = 0.00,
                        Currency = "zł",
                        Discryption = "Crucial P2 to szybki dysk M.2 NVMe o pojemności 250 GB, na którym możesz polegać. Długi czas oczekiwania na start komputera może być frustrujący bez względu na to, czy pracujesz, czy zasiadasz do gry komputerowej. Z pomocą przychodzi dysk Crucial P2, który dzięki technologii NVMe, znacznie przyspiesza działanie komputera w wielu sytuacjach.",
                        Discount = 20.00,
                        Availabity = true,
                        BuyersAmount = 5,
                        FeedbackAmount = 4,
                        Labael = "Promocja",
                        Rating = 4.0,
                    },
                    new Product
                    {
                        StoreId = 3,
                        SerialNumber = "81RS0040PB",
                        Name = "Lenovo Yoga S740-14 i5-1035G4/8GB/512/Win10",
                        MainPhoto = "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2020/2/pr_2020_2_20_13_56_20_910_06.jpg",
                        Photo = "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/LENOVO/yoga-s740/14/02-lifestyle.jpg",
                        Producent = "Lenovo",
                        Model = "Yoga S740",
                        Price = 3299.00,
                        ShippingCost = 0.00,
                        Currency = "zł",
                        Discryption = "Elegancko wykończony, efektowny, a jednocześnie minimalistyczny. Lenovo Yoga S740-14 to laptop, który otwiera przed Tobą mobilne wrota, za którymi mnożą się nieskończone możliwości. Pracuj, oglądaj ulubione filmy i seriale, dziel się wrażeniami ze swoimi przyjaciółmi.",
                        Discount = 0.00,
                        Availabity = true,
                        BuyersAmount = 5,
                        FeedbackAmount = 4,
                        Labael = "Bestseller",
                        Rating = 4.5,
                    },
                    new Product
                    {
                        StoreId = 4,
                        SerialNumber = "Note94128EUPL",
                        Name = "Xiaomi Redmi Note 9 4/128GB Black",
                        MainPhoto = "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2020/9/pr_2020_9_30_14_9_13_451_00.jpg",
                        Photo = "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/XIAOMI/Redmi-Note-9/02-4-aparaty-xiaomi.jpg",
                        Producent = "Xiaomi",
                        Model = "Note 9",
                        Price = 999.00,
                        ShippingCost = 0.00,
                        Currency = "zł",
                        Discryption = "Masz także do dyspozycji wydajną baterię 5020 mAh oraz wyselekcjonowane podzespoły, które zagwarantują Ci płynną pracę każdego dnia.",
                        Discount = 30.00,
                        Availabity = true,
                        BuyersAmount = 5,
                        FeedbackAmount = 4,
                        Labael = "Promocja",
                        Rating = 4.5,
                    },
                };
                context.ProductsDb.AddRange(products);
                context.SaveChanges();
            }
        }
    }
}