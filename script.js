
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    priceElements.forEach(element => {
        const value = parseFloat(element.textContent);
        if (!isNaN(value)) {
            total += value;
        }
    });

    const table = document.querySelector('table');

    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    totalCell.textContent = total;
    totalCell.setAttribute('data-ns-test', 'grandTotal');
    totalCell.id = "ans";

    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);