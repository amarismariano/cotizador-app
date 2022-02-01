export const calculateTotal = (entry, term) => {
    let total;
    if(entry <= 1000){
        total = entry * .25;
    } else if (entry > 1000 && entry <= 5000){
        total = entry * .20;
    } else if (entry > 5000 && entry <= 10000){
        total = entry * .15;
    } else {
        total = total * .10;
    }
    
    // Calcular plazo
    let totalTerm = 0;
    switch (term) {
        case "3":
            totalTerm = entry * .05;
            break;
        case "6":
            totalTerm = entry * .10;
            break;  
        case "12":
            totalTerm = entry * .15;
            break; 
        case "24":
            totalTerm = entry * .20;
            break;  
        default:
            break;
    }
    return parseInt(total) + parseInt(totalTerm) + parseInt(entry);
}