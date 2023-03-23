const names = ["Mario" , "Luigi" , "Marcello" , "Maria" , "Anna" , "Gianmarco" , "Gianfranco", "Goku" ]

export function getRandomName(){
    const randomIndex =  Math.floor(Math.random() * names.length - 1);
    const randomName = names[randomIndex];
    return randomName;
}
    