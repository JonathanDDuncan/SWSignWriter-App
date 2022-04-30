export interface IsUserSubscribedResponse {
    Sub: string;
    IsSubscribed: boolean;
    Type: string; 
    CancelAtPeriodEnd: boolean;
    SubscriptionEndDate: string;
}