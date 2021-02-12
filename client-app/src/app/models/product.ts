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
    discryption: string;
    discount: number;
    availabity: boolean;
    buyersAmount: number;
    feedbackAmount: number;
    labael: string;
    rating: number;
    addedDate: string;
    endDate: string;
}