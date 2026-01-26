export interface AgendaItem {
    id: string;
    evenement: string;
    datum: string;
    tijd: string;
    info: string;
}

export const getAPIData = async (): Promise<AgendaItem[]> => {
    try {
        const url = 'http://localhost:5170/agenda';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        // Return all items as array
        const items: AgendaItem[] = Array.isArray(result) ? result : [result];
        
        console.log("Fetched agenda data:", items);
        return items;

    } catch (error) {
        console.error("Error fetching agenda data:", error);
        return [];
    }
};