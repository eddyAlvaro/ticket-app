export interface EventData {
    _embedded: {
        events: {
            name: string;
            id: string,
            info?: string;
            test: boolean;
            images: {
                url: string;
            }[];
        }[];
    };
}