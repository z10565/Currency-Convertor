document.addEventListener("DOMContentLoaded", function() {
    const moneyInput = document.querySelector("[name='money']");
    const newSumInput = document.querySelector("[name='new_sum']");

    moneyInput.addEventListener("input", function() {
        const x = parseFloat(moneyInput.value) || 0; 
        const userPrice = x * 12.47530;
        newSumInput.value = userPrice.toFixed(2); 
    });
});
// later implement dynamic rate fetching from a reliable API
