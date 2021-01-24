export interface IProduct{
    id: number;
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
    discryption: string;
    discount: number;
    avalibity: boolean;
    buyersAmount: number;
    feedbackAmount: number;
    labael: string;
    rating: number;
    addedDate: string;
    endDate: string;
}