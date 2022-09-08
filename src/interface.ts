export interface TodoState {
    items: {
        completed: (string | undefined)[];
        inProgress: (string | undefined)[];
        removed: (string | undefined)[];
    },
    newItems: string | undefined;
    views: {
        open: boolean;
        selected: string;
    }
}