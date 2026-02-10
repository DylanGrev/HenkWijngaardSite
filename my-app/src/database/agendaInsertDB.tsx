export interface Agendadata {
    evenement: string;
    datum: string;
    tijd: string;
    info: string;
    logo: Blob;
}

// Get all agenda data (GET request)
export const giveAPIData = async (): Promise<Agendadata[]> => {
    try {
        const url = 'http://localhost:5170/agenda';
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        // Return all items as array
        const items: Agendadata[] = Array.isArray(result) ? result : [result];
        
        console.log("Fetched agenda data:", items);
        return items;

    } catch (error) {
        console.error("Error fetching agenda data:", error);
        return [];
    }
};

// Insert new agenda data (POST request with file upload)
export const insertAgendaData = async (formData: FormData): Promise<any> => {
    try {
        const url = 'http://localhost:5170/agenda/upload';
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            // Don't set Content-Type header - browser will set it automatically
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Inserted agenda data:", result);
        return result;

    } catch (error) {
        console.error("Error inserting agenda data:", error);
        throw error;
    }
};