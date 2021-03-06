const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange',() => {
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if(request.readyState === 4){
            callback('could not fetch data',undefined);
        }
    });
    
    request.open('GET', resource);
    request.send();

};


getTodos('todos/luigi.json',(error, data) => {
    console.log('callback fired');
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});



