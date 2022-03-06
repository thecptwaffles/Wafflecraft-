MinecraftAPI.getServerStatus('71.218.138.226', {
        port: 32479 // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        // you can change these to your own message!
        document.querySelector('.server-online').innerHTML = status.online ? 'is up' : 'is down';
    });