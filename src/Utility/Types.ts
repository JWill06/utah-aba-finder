export interface Provider {
    name: string;
    website: string;
    phone: string;
    address: string;
    email: string;
    insurances: string;
    locations: string;
    rates: string;
    ages: string;
    waitlist: string;
    telehealth: string;
    spanish: string;
}

export interface user {
    admin: boolean;
    email: string;
    password: string;
}

export interface filterOption {
    name: string;
    value: string;
    label?: string;
}

export interface providerFilterOption extends filterOption , Pick<Provider, 'insurances'> {

}