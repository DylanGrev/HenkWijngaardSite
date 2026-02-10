export interface AgendaItem {
    id: string;
    evenement: string;
    datum: string;
    tijd: string;
    info: string;
    img:  string;
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
        
        const formattedItems = items.map(item => ({
            ...item,
            datum: formatDutchDate(item.datum)
        }));

        console.log("Fetched agenda data:", formattedItems);
        return formattedItems;

    } catch (error) {
        console.error("Error fetching agenda data:", error);
        return [];
    }
};

const formatDutchDate = (isoDateString: string): string => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('nl-NL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }); // Returns "10 februari 2026"
};