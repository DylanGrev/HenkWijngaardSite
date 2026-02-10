import './agenda.css'
import { useEffect, useState } from 'react';
import { getAPIData, type AgendaItem } from '../database/agendaDB';

export default function Agenda() {
    const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        getAPIData().then((items) => {
            // Sort by ID descending (highest first)
            const sortedItems = items.sort((a, b) => {
                return parseInt(b.id) - parseInt(a.id);
            });
            setAgendaItems(sortedItems);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div className="contentContainer">Loading...</div>;
    }


    
    return (
        <div className="contentContainer">
            {agendaItems.length === 0 ? (
                <div className="agendaBlock">
                    <p>Geen agenda items gevonden.</p>
                </div>
            ) : (
                agendaItems.map((item) => (
                    <div key={item.id} className="agendaBlock">
                        <div className="agendaTextContainer">
                            <div className="agendaTitle">{item.evenement}</div>
                            <div className='agendaDate'>{item.datum} - {item.tijd}</div>
                            <div className="agendaInfo">{item.info}</div>
                        </div>
                        <div className="agendaImageWrapper">
                            <img className="agendaImage" src={`http://localhost:5170/uploads/${item.img}`} alt={`${item.evenement} logo`}/>
                    
                        </div>
                    </div>
                    
                ))
            )}
        </div>
    )
}