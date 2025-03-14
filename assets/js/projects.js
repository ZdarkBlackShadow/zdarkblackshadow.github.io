function filterProjects() {
    const filter = document.querySelector('#projectFilter').value;
    const pythonProjects = document.querySelector('#pythonProjects');
    const javaProjects = document.querySelector('#javaProjects');

    if (filter === 'python') {
        pythonProjects.classList.remove('hidden');
        javaProjects.classList.add('hidden');
    } else if (filter === 'java') {
        pythonProjects.classList.add('hidden');
        javaProjects.classList.remove('hidden');
    } else {
        pythonProjects.classList.remove('hidden');
        javaProjects.classList.remove('hidden');
    }

    window.location.hash = filter;
}

document.querySelectorAll('li span').forEach(span => {
    span.addEventListener('click', () => {
        const filter = span.textContent.substring(1); // Remove the '#' character
        document.querySelector('#projectFilter').value = filter;
        filterProjects();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        document.querySelector('#projectFilter').value = hash;
        filterProjects();
    }
});

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    document.querySelector('#projectFilter').value = hash;
    filterProjects();
});