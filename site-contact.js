document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('footer .foot').forEach((footer) => {
    const columns = footer.querySelectorAll(':scope > div');
    const contactColumn = columns[columns.length - 1];
    if (!contactColumn || contactColumn.querySelector('a[href^="mailto:"]')) return;

    const email = document.createElement('a');
    email.href = 'mailto:info@planninggainspecialistltd.co.uk';
    email.textContent = 'info@planninggainspecialistltd.co.uk';
    const companyNumber = contactColumn.querySelector('p:last-child');
    contactColumn.insertBefore(email, companyNumber || null);
  });
});
