using System;

namespace Domain
{
    public class Product
    {
        public Guid Id { get; set; }
        public int StoreId { get; set; }
        public string SerialNumber { get; set; }
        public string Name { get; set; }
        public string MainPhoto { get; set; }
        public string Photo { get; set; }
        public string Producent { get; set; }
        public string Model { get; set; }
        public double Price { get; set; }
        public double ShippingCost { get; set; }
        public string Currency { get; set; }
        public string Description { get; set; }
        public double Discount { get; set; }
        public bool Availability { get; set; }
        public int BuyersAmount { get; set; }
        public int FeedbackAmount { get; set; }
        public string Label { get; set; }
        public double Rating { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}