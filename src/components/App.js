import React, { useState, useEffect } from "react";
import Tours from "./Tours";

const data = [
  {
    id: "rec6d6T3q5EBIdCfD",
    name: "Best of Paris in 7 Days Tour",
    info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
    image:
      "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    price: "1,995",
  },
  {
    id: "recIwxrvU9HfJR3B4",
    name: "Best of Ireland in 14 Days Tour",
    info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast.",
    image:
      "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
    price: "3,895",
  },
  {
    id: "recJLWcHScdUtI3ny",
    name: "Best of Salzburg & Vienna in 8 Days Tour",
    info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to Bavaria and Austria's Golden Age.",
    image:
      "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    price: "2,695",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTours(data);
      setLoading(false);
    }, 1000);
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refreshTours = () => {
    setTours(data);
  };

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading</h2>
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <main id="main">
        <h2>No more tours</h2>
        <button className="btn" onClick={refreshTours}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main id="main">
      <h1 className="title">Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;