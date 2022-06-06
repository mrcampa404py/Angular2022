let ability:number[] = new Array(1,3); 
let abilityExample:(number | string | number)[] = new Array(1,1);
let abilityString: string[] = ['bash','counter','healing']; 

abilityExample.push("new");  
abilityString.push("cow"); 

console.log(ability); 
console.log(abilityExample);   

interface Personage {
    name: string; 
    hp: number; 
    ability: string[]; 
    hometown?: string; 
}

const personage:Personage = {
    name: 'Strider', 
    hp: 100, 
    ability: ['Bash','Counter','Healing']
}

personage.hometown = "Pallet Town";  
console.table(personage);  

