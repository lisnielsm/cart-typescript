export interface ItemDescription {
	name: string;
	details: string;
}

export interface Item {
	name: string;
	image: any;
	quantity: number;
	price: number;
	isPack: boolean;
	packDescription?: ItemDescription[];
}

export interface Order {
	numberItems: number;
	total: number;
}