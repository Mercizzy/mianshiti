try { 
    (function (w, d, s, m, u, h, c) { 
        h = d.getElementsByTagName('body')[0]; 
        
        c = d.createElement(s); 
        c.type = "text/javascript"; 
        c.src = u + "/js/xiaomo.js"; 
        my_xm_id = m; 
        my_xm_location = u; 
        my_xm_domain = window.location.host; 
        my_xm_platform = "web"; 
        h.appendChild(c); 
    })(window, document, 'script', 'emotibot_2c928082677dda49016835d1b3ee0000', 'http://172.16.98.133/mapai/chat'); 
} catch (e) { 
    console.log(e); 
}