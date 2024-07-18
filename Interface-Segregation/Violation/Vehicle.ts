export interface Vehicle {
	setColor(color: string): void;
	setPrice(price: number): void;

	start(): void;
	stop(): void;
	fly(): void;
}
