let investment = document.getElementById('iinvest');
let rate = document.getElementById('irate');
let time = document.getElementById('itime');

let ifButton = document.getElementById('calcButton');
let mainstuff = document.getElementById('divHidden');

let disp1 = document.getElementById('dAmount');
let disp2 = document.getElementById('dInvest');
let disp3 = document.getElementById('dGain');
///weird variables//
let first_time = true;
///weird///

/// calculation variables///
let expected_amount ;
let amount_invested;
let wealth_gained;
/// calculation///
ifButton.addEventListener('click', function(){
    console.log('ji');
    if(isNaN(investment.value))
    alert("Please make sure to enter valid numbers");
    if(isNaN(rate.value))
    alert("Please make sure to enter valid numbers");
    if(isNaN(time.value))
    alert("Please make sure to enter valid numbers");

    let i = ((rate.value/100)/12);
    expected_amount = investment.value * (Math.pow(1+i,(time.value*12))-1) * ((1+i)/i);  // important formula

    expected_amount = Math.round(expected_amount);
    console.log(expected_amount)
    disp1.innerText = expected_amount.toLocaleString();

    amount_invested = (investment.value * (time.value * 12));
    // console.log(Math.round(amount_invested))
    console.log("kk")
    disp2.innerText = amount_invested.toLocaleString();

    wealth_gained = expected_amount-amount_invested;
    disp3.innerText = wealth_gained.toLocaleString();

    if(first_time)
    mainstuff.classList.add('d-block');
    first_time = false;
    window.scrollTo(0,document.body.scrollHeight);
})