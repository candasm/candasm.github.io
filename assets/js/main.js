var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28839933-1']);
_gaq.push(['_setDomainName', 'candasminareci.com']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
$('a').attr("target","_blank").click(function(){
    var linkTitle= $(this).attr('title');
    _gaq.push(['_trackEvent', 'Link', 'click', linkTitle]);
});
$(".aboutMe").fadeIn();