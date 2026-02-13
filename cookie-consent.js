(function() {
    if (localStorage.getItem('cookieConsent')) return;
    var s = document.createElement('style');
    s.textContent = '.cc-banner{position:fixed;bottom:0;left:0;right:0;background:rgba(5,5,20,0.96);color:#ccc;padding:13px 20px;font-size:0.78rem;z-index:9999;display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,0.08);line-height:1.5}.cc-banner a{color:#63ffff;text-decoration:underline}.cc-banner button{background:#3355ff;color:#fff;border:none;padding:7px 18px;border-radius:7px;cursor:pointer;font-size:0.78rem;white-space:nowrap}.cc-banner button:hover{background:#5577ff}';
    document.head.appendChild(s);
    var b = document.createElement('div');
    b.className = 'cc-banner';
    b.innerHTML = '<span>This site uses cookies and local storage for site functionality and to improve your experience. By continuing, you agree to our <a href="/privacy/">Privacy Policy</a>.</span><button id="ccAccept">Accept</button>';
    document.body.appendChild(b);
    document.getElementById('ccAccept').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', '1');
        b.remove();
    });
})();
