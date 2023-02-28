function calculateTip(){
    const amount= document.getElementById("Amount");
    const guest= document.getElementById("NoOfGuests");
    const quality=document.getElementById("quality");
    const tipAmount=document.getElementById("Tip-Amount");
    const tip=((amount.value * quality.value)/(guest.value)).toFixed(2);
    amount.value='';
    guest.value='';
    quality.value='';
    if(tip=="NaN"){
        tipAmount.innerHTML="Tip $0 each";
        showtip();
    }
    else{
        tipAmount.innerHTML="Tip $"+tip+" each";
        showtip();
    }
    function showtip(){
        var x=tipAmount;
        x.className="show"; 
        setTimeout(function(){x.className = x.className.replace('show','');},3000);
    } 
}