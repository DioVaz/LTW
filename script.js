function submit_product_form()
{
$.getJSON("./api/getProduct.php?number=" + $("#form_product_number").val(), function(data){
	
$("#product_list").empty().append('<div class="produto"><div><strong>Codigo: </strong>' + data[0].ProductCode + '</div>' +
'<div><strong>Descrição: </strong>' + data[0].ProductDescription + '</div>' +
'<div><strong>Unidade de medida:</strong>' + data[0].UnitOfMeasure + '</div>' +
'<div><strong>Preço: </strong>' + data[0].UnitPrice + '</div>'+
'<div>__________' + '</div>' );
});
}


function submit_customer_form()
{
$.getJSON("./api/getCustomer.php?number=" + $("#form_customer_number").val(), function(data){
	
$("#customer_list").empty().append('<div class="cliente"><div><strong>Numero de identificação: </strong>' + data[0].CustomerID + '</div>' +
'<div><strong>Taxa: </strong>' + data[0].CustomerTaxID + '</div>' +
'<div><strong>Empresa: </strong>' + data[0].CompanyName + '</div>' +
'<div><strong>E-mail: </strong>' + data[0].Email + '</div></div>');
});

$.getJSON("./api/getAdress.php?number=" + $("#form_customer_number").val(), function(data){
	
$("#customer_list").append('<div class="adress"><div><strong>Morada:</strong>' + data[0].AdressDetail + '</div>'+
'<div>__________' + '</div></div>' );
});
}


function submit_invoice_form()
{
$.getJSON("./api/getInvoice.php?number=" + $("#form_invoice_number").val(), function(data){
	
$("#invoice_list").empty().append('<div class="invoice"><div> <strong>Codigo: </strong>' + data[0].InvoiceNo + '</div>' +
'<div> <strong>Data: </strong>' + data[0].InvoiceDate + '</div>' +
'<div> <strong>CostumorID: </strong>' + data[0].CustomerID + '</div>' +
'<div>__________' + '</div>' );
});
}


function submit_invoice_form()
{
$.getJSON("./api/getInvoice.php?number=" + $("#form_invoice_number").val(), function(data){
	
$("#invoice_list").append('<div class="invoice"><div> <strong>Codigo: </strong>' + data[0].InvoiceNo + '</div>' +
'<div> <strong>Data: </strong>' + data[0].InvoiceDate + '</div>' +
'<div> <strong>CostumorID: </strong>' + data[0].CustomerID + '</div>' +
'<div>__________' + '</div>' );
});
}


function submit_search_invoice_form()
{
$.getJSON("./api/searchInvoicesByField.php?field=" + $("#form_invoice_camp").val() + "&number=" + $("#form_invoice_number2").val(), function(data){
	
$("#invoice_list2").append('<div class="invoice"><div> <strong>Codigo: </strong>' + data[0].InvoiceNo + '</div>' +
'<div> <strong>Data: </strong>' + data[0].InvoiceDate + '</div>' +
'<div> <strong>CostumorID: </strong>' + data[0].CustomerID + '</div>' +
'<div>__________' + '</div>' );
});
}


function submit_search_customer_form()
{
$.getJSON("./api/searchCustomersByField.php?field=" + $("#form_customer_camp").val() + "&number=" + $("#form_customer_number2").val(), function(data){
	
$("#customer_list2").append('<div class="cliente"><div> <strong>Codigo: </strong>' + data[0].CustomerID + '</div>' +
'<div> <strong>Taxa: </strong>' + data[0].CustomerTaxID + '</div>' +
'<div> <strong>Companhia: </strong>' + data[0].CompanyName + '</div>' +
'<div> <strong>E-mail: </strong>' + data[0].Email + '</div>' +
'<div> <strong>BillingAddressID : </strong>' + data[0].BillingAddressID  + '</div>'+
'<div>__________' + '</div>' );
});
}


function submit_search_customer_form2()
{
$.getJSON("./api/searchCustomersByField.php?field=" + $("#form_customer_camp").val() + "&company=" + $("#form_customer_x").val(), function(data){
	
$("#customer_list3").append('<div class="cliente"><div> <strong>Codigo: </strong>' + data[0].CustomerID + '</div>' +
'<div> <strong>Taxa: </strong>' + data[0].CustomerTaxID + '</div>' +
'<div> <strong>Companhia: </strong>' + data[0].CompanyName + '</div>' +
'<div> <strong>E-mail: </strong>' + data[0].Email + '</div>' +
'<div> <strong>BillingAddressID : </strong>' + data[0].BillingAddressID  + '</div>'+
'<div>__________' + '</div>' );
});
}


function submit_search_product_form()
{
$.getJSON("./api/searchProductsByField.php?field=" + $("#form_product_camp").val() + "&number=" + $("#form_product_number2").val(), function(data){
	
$("#product_list2").append('<div class="produto"><div> <strong>Codigo: </strong>' + data[0].ProductCode + '</div>' +
'<div> <strong>Descrição: </strong>' + data[0].ProductDescription + '</div>' +
'<div> <strong>Unidade de medida: </strong>' + data[0].UnitOfMeasure + '</div>' +
'<div> <strong>Preço: </strong>' + data[0].UnitPrice + '</div>'+
'<div>__________' + '</div>' );
});
}



$(document).ready(function(){
$("#submit_button").click(submit_product_form);

})

$(document).ready(function(){
$("#submit_button2").click(submit_customer_form);
})

$(document).ready(function(){
$("#submit_button3").click(submit_invoice_form);
})

$(document).ready(function(){
$("#submit_button4").click(submit_search_invoice_form);
})

$(document).ready(function(){
$("#submit_button5").click(submit_search_customer_form);
})

$(document).ready(function(){
$("#submit_button6").click(submit_search_product_form);
})

$(document).ready(function(){
$("#submit_button7").click(submit_search_customer_form2);
});