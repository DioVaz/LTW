function submit_product_form()
{
$.getJSON("./getProduct.php?number=" + $("#form_product_number").val(), function(data){
	
$("#product_list").append('<div class="produto"><div>Codigo:' + data[0].ProductCode + '</div>' +
'<div>Descrição:' + data[0].ProductDescription + '</div>' +
'<div>Unidade de medida:' + data[0].UnitOfMeasure + '</div>' +
'<div>Preço:' + data[0].UnitPrice + '</div>');
});
}

function submit_customer_form()
{
$.getJSON("./getCustomer.php?number=" + $("#form_customer_number").val(), function(data){
	
$("#customer_list").append('<div class="cliente"><div>Codigo:' + data[0].CustomerID + '</div>' +
'<div>Taxa:' + data[0].CustomerTaxID + '</div>' +
'<div>Companhia:' + data[0].CompanyName + '</div>' +
'<div>E-mail:' + data[0].Email + '</div>' +
'<div>BillingAddressID :' + data[0].BillingAddressID  + '</div>');
});
}

function submit_invoice_form()
{
$.getJSON("./getInvoice.php?number=" + $("#form_invoice_number").val(), function(data){
	
$("#invoice_list").append('<div class="invoice"><div>Codigo:' + data[0].InvoiceNo + '</div>' +
'<div>Data:' + data[0].InvoiceDate + '</div>' +
'<div>CostumorID:' + data[0].CustomerID + '</div>' +
'<div>LineNumber:' + data[0].LineNumber + '</div>');
});
}

function submit_search_invoice_form()
{
$.getJSON("./searchInvoiceByField.php?text=" + $("#form_invoice_camp").val() + "&?number=" + $("#form_invoice_number").val(), function(data){
	
$("#invoice_list").append('<div class="invoice"><div>Codigo:' + data[0].InvoiceNo + '</div>' +
'<div>Data:' + data[0].InvoiceDate + '</div>' +
'<div>CostumorID:' + data[0].CustomerID + '</div>' +
'<div>LineNumber:' + data[0].LineNumber + '</div>');
});
}

function submit_search_costumer_form()
{
$.getJSON("./searchCostumerByField.php?text=" + $("#form_costumer_camp").val() + "&?number=" + $("#form_costumer_number").val(), function(data){
	
$("#customer_list").append('<div class="cliente"><div>Codigo:' + data[0].CustomerID + '</div>' +
'<div>Taxa:' + data[0].CustomerTaxID + '</div>' +
'<div>Companhia:' + data[0].CompanyName + '</div>' +
'<div>E-mail:' + data[0].Email + '</div>' +
'<div>BillingAddressID :' + data[0].BillingAddressID  + '</div>');
});
}

function submit_search_product_form()
{
$.getJSON("./searchProductByField.php?text=" + $("#form_product_camp").val() + "&?number=" + $("#form_product_number").val(), function(data){
	
$("#product_list").append('<div class="produto"><div>Codigo:' + data[0].ProductCode + '</div>' +
'<div>Descrição:' + data[0].ProductDescription + '</div>' +
'<div>Unidade de medida:' + data[0].UnitOfMeasure + '</div>' +
'<div>Preço:' + data[0].UnitPrice + '</div>');
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
$("#submit_button5").click(submit_search_costumer_form);
})

$(document).ready(function(){
$("#submit_button6").click(submit_search_product_form);
});