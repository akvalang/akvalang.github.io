/**
 * Created by nastya.done on 16.12.15.
 */
$(function()
{
    $('#demo-htmlselect-basic').ddslick(
        {
            onSelected: function() {}
        });
    $('#make-it-custom').on('click', function()
    {

        $('#demo-htmlselect').ddslick(
            {
                onSelected: function(data)
                {

                    $("#demo-htmlselect").find(":selected").remove();
                    displaySelectedData("Callback Function on Dropdown Selection" , data);
                }
            });
    });

});




