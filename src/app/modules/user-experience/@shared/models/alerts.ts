export interface IAlert {
    id: number;
    type: string;
    message: string;
    icon?: string;
    dismissible?: boolean;
    animation?: boolean;
}