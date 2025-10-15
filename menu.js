// Simple JS example: toggle sections open/close
document.querySelectorAll('.menu-category h2').forEach(header => {
  header.addEventListener('click', () => {
    header.parentElement.classList.toggle('collapsed');
  });
});

// Add CSS for collapsing
const style = document.createElement('style');
style.textContent = `
  .collapsed ul { display: none; }
  .menu-category h2 { cursor: pointer; }
`;
document.head.appendChild(style);
