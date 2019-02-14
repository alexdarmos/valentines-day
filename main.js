// Set up variables here
const kitty1    =   {
    id: 'valentine-1',
    name: "Rudy",
    message: " It'd be rude not to say happy Valentine's day!"    
};

const kitty2    =   {
    id: 'valentine-2',
    name: "Pom",
    message: " You da POM! Happy Valentine's Day!"    
};

const kitty3    =   {
    id: 'valentine-3',
    name: "Schmitty",
    message: "We're schmitten with you, our Valentine!"    
};

let valentineArray = [kitty1, kitty2, kitty3];

// Set up function setHTMLValentinesName here
const setHTMLValentinesName = (valentine) => {
    document.getElementById(`${valentine.id}--name`).innerHTML  = valentine.name;
};
// Set up function setHTMLValentinesMessage here
const setHTMLValentinesMessage = (valentine) => {
    document.getElementById(`${valentine.id}--message`).innerHTML  = valentine.message;
};
// Set up function processValentines here
const processValentines = () => {
    for (let i = 0; i < 3; i++)    {
        setHTMLValentinesName(valentineArray[i]);
        setHTMLValentinesMessage(valentineArray[i]);   
    }
};
// Call process Valentines here
processValentines();