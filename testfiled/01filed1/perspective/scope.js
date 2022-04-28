function bookHotel (city) {
    var availableHotel = 'None';
    for ( var i =0; i <hotels.length; i++ ) {
        var hotel = hotels[i];
        if (hotel.city == city && hotel.hasRoom) {
            availableHotel = hotel.name;
            break;
        }
    }

    console.log('Checked ' + (i+1) + 'recod(s)') //checked 2recored
    console.log('Last checked ' + hotel.name);      // Last checked Hotel B
    {
        function placeOrder() {
            var totalAmout = 200;
            console.log('Order placed to ' + availableHotel);
        }
    }
    placeOrder();
    return availableHotel;
}

var hotels = [{name: 'Hotel A', hasRoom:false , city: 'Sanya'},{name: 'Hotel B', hasRoom:true , city: 'soul'}];
console.log(bookHotel('soul')); // Hotal B
