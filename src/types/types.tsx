export interface IAddress {
    city: string;
    street: string;
    zipcode: string
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}