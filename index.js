const expenseForm = document.getElementById('expenseFrom')
const expenseList = document.getElementById('expenseList')

let total = 0;
document.getElementById('total').innerHTML = `${total}`
expenseForm.addEventListener('submit',
    function (event) {
        event.preventDefault();

        const description = document.getElementById('description').value;
        const category = document.getElementById('category').value;
        let amount = document.getElementById('amount').value;

        if (description && category && !isNaN(amount)) {
            const newRow = document.createElement('tr')
            
            newRow.innerHTML = `<td>${description}</td>
                    <td>${category}</td>
                    <td style="text-align: right;">${amount}</td>`;

            expenseList.appendChild(newRow)

            total += parseFloat(amount) || 0;
            document.getElementById('total').innerHTML = `${total}`

            document.getElementById('description').value = '';
            document.getElementById('category').value = '';
            document.getElementById('amount').value = '';
        }
    }
)