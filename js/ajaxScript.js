if (typeof console  != "undefined")
    if (typeof console.log != 'undefined')
        console.olog = console.log;
    else
        console.olog = function() {};

console.log = function(message) {
    console.olog(message);
    if(console.textarea) {
        console.textarea.val(console.textarea.val() + JSON.stringify(message) + "\n");
    }
};

console.error = console.debug = console.info =  console.log;

$(function(){
    $('pre').each(function(){
        var src = $(this).attr("data-src");
        var button = $(this).parent().parent().find('button');
        var textarea = $(this).parent().parent().find('textarea');
        button.click(function(){
            $.getScript(src, function(data, textStatus, jqxhr){
                console.textarea = textarea;
                console.textarea.val("");
                eval(data);
            });
        });
    })
});