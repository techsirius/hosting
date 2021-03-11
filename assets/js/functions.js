/********** header.html ************/
function head_search(){
    var q = $('#query').val();
    var url = __root+"/index.php?p=home";
    if(q != ''){
        url += "&q="+q;
    }
    window.top.location.href = url;
}
/********* check_fblike.html *********/
$( window ).load(function(){
    if((__page=='check_fblike') && ((window.FB == undefined) || (typeof G_get_cookie('__tc_fb') == 'true'))){
        var download_file = $('#download_file').val();
        window.top.location.href = __root+"/index.php?p=check_email&download_file="+download_file;
    }
    /*if(typeof G_get_cookie('__tc_fb') == 'undefined'){
        showFBLikebox();
    }*/
});
function G_get_cookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for(i=0;i<ARRcookies.length;i++){
        x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x=x.replace(/^\s+|\s+$/g,"");
        if (x==c_name){
            return unescape(y);
        }
    }
}
function G_set_cookie(c_name,value,exdays){
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}
function download_file(){
    var file = $('#download_file').val();
    var send_data = "do=download_file&download_file="+file;
    
    $.ajaxSetup({
        type:"POST",
        url: "index.php?p=ajax_functions"
    });
    $.ajax({
        data: send_data,
        success:function(response){
            if(__page == 'check_fblike'){
                $('.checkfb_main').remove();
                show_hide_preloader('show', 'Please wait...');
                
                window.top.location.href = __root+"/index.php?p=download";
            }
            else{
                var html_data = '<a href="'+__root+'/index.php?p=download" class="font_size30">'+file+'</a>';
                $('.checkeml_box').fadeOut('', function(){
                    $('.checkeml_doenload_link').fadeIn('', function(){
                        $(this).html(html_data);
                    });
                });
            }
        }
    });
}
function checkeml_form_sub(){
    var email = $('#email');
    if(email.val() == ''){
        alert('Please enter your email');
        email.focus();
        return false;
    }
    else{
        window.open('http://feedburner.google.com/fb/a/mailverify?uri=techsirius', 'popupwindow', 'scrollbars=yes,width=1024,height=756')
        download_file();
        return true;
    }
}