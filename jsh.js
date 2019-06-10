<script type="text/javascript">
var Quotation=new Array()
Quotation[0] = "Frase 1.";
Quotation[1] = "Frase 2.";
Quotation[2] = "Frase 3";
Quotation[3] = "Frase 4.";
Quotation[4] = "Frase 5."; 
Quotation[5] = "Frase 6.";
Quotation[6] = "Frase 7.";
Quotation[7] = "Frase 8";
Quotation[8] = "Frase 9.";
Quotation[9] = "Frase 10."; 
Quotation[10] = "Frase 11.";
Quotation[11] = "Frase 12.";
Quotation[12] = "Frase 13";
Quotation[13] = "Frase 14.";
Quotation[14] = "Frase 15.";
var Q = Quotation.length; 

function showQuotation() {var whichQuotation=Math.round(Math.random()*(5-1));
document.write(Quotation[whichQuotation]);} 

function showQuotation2() {var whichQuotation=Math.round(Math.random()*(11-1));
document.write(Quotation[whichQuotation]);} 

function showQuotation3() {var whichQuotation=Math.round(Math.random()*(15-5));
document.write(Quotation[whichQuotation]);} 

</script>