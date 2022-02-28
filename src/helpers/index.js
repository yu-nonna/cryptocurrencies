

export function numberWithString(number){
    let parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


export function renderChangePercent(percent){
    if (percent > 0) {
        return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
        return <span className="percent-fallen">{percent}% &darr;</span>
    } else {
        return <span>{percent}</span>
    }
}
 

export function handleResponse(response){
    if(response){
        return response.json()

    }
}