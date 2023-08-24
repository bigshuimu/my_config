var autoproxy_host = {
    "google.com": 1,
    "twitter.com": 1,

    "rsshub.app": 1

};
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (autoproxy_host.hasOwnProperty(host)) {
            return 'SOCKS5 127.0.0.1:7890';
        }
        
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return 'DIRECT';
}
