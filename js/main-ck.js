jQuery(document).ready(function(e){function r(e,n){var r=e.split(/\r\n|\n/);t=s(r);n(t)}function i(t){console.log(t);e("#reason").html(t[n])}function s(e){var t,n,r=e.length;if(r)while(--r){n=Math.floor(Math.random()*(r+1));t=e[n];e[n]=e[r];e[r]=t}return e}var t=new Array,n=0;e.ajax({type:"GET",url:"/reasons.txt",dataType:"text",success:function(e){r(e,i)}});e("#more").click(function(r){n++;if(t.length==n){e("#reason").attr("class","bouncy");e("#reason").throwable({containment:[0,0,100,100],drag:!0,gravity:{x:0,y:2},bounce:2,damping:0,containment:"parent",impulse:{f:10,p:{x:5,y:5}}});e("#reason").removeAttr("id");e("h1").after('<p class="thatsall">That\'s all we have right now. Got more? Why not fork us on Github? =]</p>')}else if(t.length>=n){e("#reason").attr("class","bouncy");e("#reason").throwable({containment:[0,0,100,100],drag:!0,gravity:{x:0,y:2},bounce:2,damping:0,containment:"parent",impulse:{f:10,p:{x:5,y:5}}});e("#reason").removeAttr("id");e("h1").after('<p id="reason">'+t[n]+"</p>")}})});