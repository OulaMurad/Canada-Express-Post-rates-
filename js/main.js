import ShippingCost from "./ShippingCost.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";
import "https://code.jquery.com/jquery-1.12.4.min.js";


$(document).ready(()=>{
    $("#calculate").submit((evt)=>{
        evt.preventDefault();
        const nAmount = $("#kg").val();
        const oShippingCost = new ShippingCost();
        $("#amount").html(nAmount);

        try{
                  $("#shippingcost").html(oShippingCost.calculate(nAmount, $("#province").val()));
                  $("#goodMessage").show();
                  $("#errorMessage").hide();
                
                }
                  catch(e){
                      $("#errorMessage").html(`Error:${e}`);
                      $("#errorMessage").show();
                      $("#goodMessage").hide();
                  }
  
    })
    $('body').on('keydown', 'input, select', function(e) {
        if (e.key === "Enter") {
            var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
            focusable = form.find('input,select').filter(':visible');
            next = focusable.eq(focusable.index(this)+1);
            if (next.length) {
                next.focus();
            } else {
                form.submit();
            }
            return false;
        }
    });
    
});


