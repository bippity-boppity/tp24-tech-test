const apiUrl = 'http://localhost:3000';

async function getSummary() {
  try {
    const response = await fetch(`${apiUrl}/summary`);
    if (!response.ok) {
      toggleAlert('div_alert_summary', 'block');
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    toggleAlert('div_alert_summary', 'none');
    setTimeout(() => { 
      displaySummary(data);
    }, 1000);
  } catch (error) {
    toggleAlert('div_alert_summary', 'block');
    console.error(error.message);
  }
}

function toggleAlert(id, display) {
  document.getElementById(id).style.display = display;
}

function displaySummary(data) {
  const summaryContainer = document.createElement('div');
  summaryContainer.innerHTML = `
    <div class="bg-white rounded shadow p-3">
      <h2 class="border-2 border-bottom border-primary mb-4 pb-3">Summary Statistics</h2>
      <p class="mb-0">Open Invoices: $${data.openInvoices}</p>
      <p class="mb-0">Closed Invoices: $${data.closedInvoices}</p>
    </div>
  `;
  document.querySelector('#div_content').innerHTML = summaryContainer.innerHTML;
}

function initValidation() {
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });
}

function showLoader() {
  const loader = document.createElement('div')
  loader.innerHTML = `
    <div class="bg-white rounded shadow p-3 text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `;
  document.querySelector('#div_content').innerHTML = loader.innerHTML;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  showLoader();
  const formData = new FormData(form);

  const receivableData = {};
  formData.forEach((value, key) => {
    receivableData[key] = value;
  });

  fetch('http://localhost:3000/receivables', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(receivableData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Receivable data successfully sent to the backend:', data);
      getSummary();
      form.classList.remove('was-validated');
      form.reset();
      toggleAlert('div_alert_receivable', 'none');
    })
    .catch((error) => {
      toggleAlert('div_alert_receivable', 'block');
      console.error('Error sending receivable data:', error);
      getSummary();
    });
}

document.addEventListener('DOMContentLoaded', () => {
  getSummary();
  initValidation();
  const form = document.querySelector('#receivable-form');

  form.addEventListener('submit', handleFormSubmit);
});


