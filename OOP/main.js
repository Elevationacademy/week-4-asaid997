class Vehicle{
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        Vehicle.carsSold++;
    }
    

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    } 
    static moneyMade() {
        console.log("Profit is: "+ (Vehicle.carsSold * 30000))
    }
}
Vehicle.carsSold = 0;



Vehicle.getInfo()
const car1 = new Vehicle(2,2,2)
const car2 = new Vehicle(2,2,2)
Vehicle.getInfo()
Vehicle.moneyMade()

