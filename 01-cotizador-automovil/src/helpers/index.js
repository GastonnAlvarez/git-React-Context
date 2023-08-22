export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case "1":
            incremento = 1.30;
            break;
        case "2":
            incremento = 1.15;
            break;
        case "3":
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

export function calcularPlan(plan) {
    let aumento;
    switch (plan) {
        case '1':
            aumento = 1.20
            break;
        case '2':
            aumento = 1.50
            break;
    }

    return aumento;
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('en-US',{
        style:'currency',
        currency:'USD'
    })
}