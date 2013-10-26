var request_beer = function(callback){
    var beer = "brooklyn lager";
    return callback(beer);
}

var sixpack = function(beer){
    console.log("I'll take a sixpack of "+ beer);
}

request_beer(function(beer){
    console.log("I'll take a botte of "+ beer);
});

request_beer(sixpack);