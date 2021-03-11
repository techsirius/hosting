function explode(delimiter, str){
    return str.split(delimiter);
}
function implode(delimiter, arr){
    var imploded_data = '';
    for(var i=0;i<arr.length;i++){
        imploded_data += arr[i];
        if(i < (arr.length-1)){
            imploded_data += delimiter;
        }
    }
    return imploded_data;
}
function redirect_to(url){
    top.location.href = url;
}
function remove(id){
    $('#'+id).remove();
}
function pagination(action, page, p){
    page = parseInt(page);
    page = (action == 'next')?page+1:page-1;
    window.top.location.href = "index.php?p="+p+"&page_no="+page;
}
function show_hide_preloader(action, msg){
    $('#preloader_msg').html(msg);
    if(action == 'show'){
        $('#preloader_bg').fadeIn('slow');
        $('#preloader_content').fadeIn('slow');
    }
    else{
        $('#preloader_content').fadeOut('slow');
        $('#preloader_bg').fadeOut('slow');
    }
}
function select_all(){
    if(document.getElementById('sa_checkbox').checked){
        $('.select_checkbox').attr('checked', true);
    }
    else{
        $('.select_checkbox').attr('checked', false);
    }
}
function warnB4Action(msg){
    if(confirm(msg)){
        return true;
    }
    else{
        return false;
    }
}
function go_2_page(p, curr_page){
    var url = 'index.php?p='+p;
    if(curr_page != '')
        url += '&page='+curr_page;
    top.location.href = url;
}
function displayMsg(msg, time){
    $('#msgbox').fadeTo('', 1);
    $('#msgbox p').html(msg);
    
    time = parseInt(time)*1000;
    
    $('#msgbox p').fadeTo(time , 0.01);
}
function popMsg(action, msg){
    $('#pop_msg_container .msg').html(msg);
    if(action == 'show'){
        $('#pop_msg_bg').fadeIn('slow');
        $('#pop_msg_container').fadeIn('slow');
    }
    else{
        $('#pop_msg_bg').fadeOut('slow');
        $('#pop_msg_container').fadeOut('slow');
    }
}
$(document).ready(function(){
    $('#pop_msg_bg').click(function(){
        popMsg('hide', '');
    });
});