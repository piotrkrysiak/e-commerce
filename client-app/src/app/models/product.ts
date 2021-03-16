export interface IProduct{
    id: string;
    storeId: number;
    serialNumber: string;
    name: string;
    mainPhoto: string;
    photo: string;
    producent: string;
    model: string;
    price: number;
    shippingCost: number;
    currency: string;
    description: string;
    discount: number;
    availability: boolean;
    buyersAmount: number;
    feedbackAmount: number;
    label: string;
    rating: number;
    addedDate: string;
    endDate: string;
}