//your code here!
const list = document.getElementById('list');

function addItems() {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

addItems();

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
    for (let i = 0; i < 2; i++) {
      const li = document.createElement('li');
      li.textContent = `Item ${list.children.length + 1}`;
      list.appendChild(li);
    }
  }
});
