const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');

const normalize = s => (s || '').trim().toLowerCase();

// Скрытие делаем скриптом, а не CSS: inline-стиль надёжнее перекрывается при показе
products.forEach(product => {
  if (product.hasAttribute('data-extra')) {
    product.style.display = 'none';
  }
});

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const value = normalize(button.dataset.filter);

    products.forEach(product => {
      const match = value === 'all'
        ? !product.hasAttribute('data-extra')
        : normalize(product.dataset.category) === value;

      product.style.display = match ? 'flex' : 'none';
    });
  });
});
