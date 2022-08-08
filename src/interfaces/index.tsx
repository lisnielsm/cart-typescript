export interface ItemDescription {
	name: string;
	details: string;
}

export interface Item {
	id: number;
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

export interface LikeProd {
	img: string;
	name: string;
	minPrice: number;
	maxPrice: number;
	minQuantity: number;
}
