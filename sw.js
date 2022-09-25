self.addEventListener('install', (event) =>{
    console.log('SW: Intall');
});

self.addEventListener('fetch', (event) =>{
   if(event.request.url.includes('.png')){
        console.log("Hola");
        event.respondWith(fetch('images/cat.png'));
   }

});