// self destroying serviceworker
// the previous version of the site used a serviceworker to cache things
// the new version does not.
// this only gets loaded and executed on clients who have my old serviceworker

self.addEventListener('install', () => {
    self.skipWaiting()
})

self.addEventListener('activate', () => {
    self.registration
        .unregister()
        .then(() => self.clients.matchAll())
        .then((clients) => {
            clients.forEach(client => client.navigate(client.url))
        })
})
