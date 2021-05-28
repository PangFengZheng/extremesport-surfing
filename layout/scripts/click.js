document.querySelector('h3').addEventListener( 'click', showMessage );
$('button').click(fliterItems);
function fliterItems(){
    let button=this;
    let selector=$(button).data('filter');
    console.log(selector);
    $('#products img').not(selector).hide(0);
    $(selector).show();
    swal("Well done!", "You clicked the "+selector+" button!", "success");
}