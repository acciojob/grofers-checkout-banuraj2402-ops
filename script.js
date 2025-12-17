const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    priceElements.forEach(element => {
        total += parseFloat(element.textContent);
    });


    const table = document.querySelector('table');

    // 4. Create the new row and cell
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');


    totalCell.id = "ans"; 
    totalCell.textContent = total;
 
    totalCell.setAttribute('data-ns-test', 'grandTotal');

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
