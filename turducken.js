var turkey = function(callback){
    return callback("turkey");
}

var duck = function(callback){
    return callback("duck");
}

var chicken = function(callback){
    return callback("chicken");
}

var turducken = function(callback){
    turkey(function(turkey_text){
        duck(function(duck_text){
            chicken(function(chicken_text){
                var what_i_am = "I am a ";
                what_i_am += chicken_text + " inside a ";
                what_i_am += duck_text + " inside a ";
                what_i_am += turkey_text;
                what_i_am += ", and I'm delicious!";
                return callback(what_i_am);
            });
        });
    });
}

turducken(function(what_i_am){
    console.log(what_i_am);
});