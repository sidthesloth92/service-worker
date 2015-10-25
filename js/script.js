if (navigator.serviceWorker) {
    console.log("ServiceWorkers are supported");


    navigator.serviceWorker.register('../sw.js')
        .then(function(reg) {
            console.log("ServiceWorker registered ◕‿◕");
            console.dir(reg);
        })
        .catch(function(error) {
            console.log("Failed to register ServiceWorker ಠ_ಠ");
            console.dir(error);
        });
}
