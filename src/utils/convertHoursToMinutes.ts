export default function convertHourToMinutes(time: string) {
    //'8:00' =>Valor inicial
    //Depois do split => '8','00'
    //Depois do map(Number) => 8,0 => retornando dois numeros
    //Como definido na consatate, ira colocar esses valor em um array => [8,0]
    
    const [hour, minutes] = time.split(':').map(Number)
    const timeInMinutes =  (hour * 60) + minutes
    //Depois sera calculado conforme a constante timeInMinutes = (8 * 60) + 0 = 480

    return timeInMinutes
}