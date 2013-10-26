var request_beer = function(beer, callback){
    return callback(beer);
}

var sixpack = function(beer){
    console.log("I'll take a sixpack of "+ beer);
}

request_beer("brooklyn lager", function(beer){
    console.log("I'll take a botte of "+ beer);
});

request_beer("pbr", sixpack);