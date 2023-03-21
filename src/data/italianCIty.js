 const italianCities = [
    "Rome",
    "Milan",
    "Naples",
    "Turin",
    "Palermo",
    "Genoa",
    "Bologna",
    "Florence",
    "Bari",
    "Catania",
    "Venice",
    "Verona",
    "Messina",
    "Padua",
    "Trieste",
    "Brescia",
    "Taranto",
    "Prato",
    "Reggio Calabria",
    "Modena",
    "Livorno",
    "Cagliari",
    "Mestre",
    "Parma",
    "Foggia",
    "Perugia",
    "Ravenna",
    "Rimini",
    "Salerno",
    "Ferrara"
  ];

export function getRandomCity(){

    const randomIndex =  Math.floor(Math.random() * italianCities.length - 1);
    const randomCity = italianCities[randomIndex];
    return randomCity;
}
