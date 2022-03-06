 MinecraftAPI.getServerStatus('174.16.204.134', {
        port: 32479 // optional, only if you need a custom port
    }, function (err, status) {
        if (err) {
            return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        // you can change these to your own message!
        document.querySelector('.server-online').innerHTML = status.online ? 'up' : 'down';


    });