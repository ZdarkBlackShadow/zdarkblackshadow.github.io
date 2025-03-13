function filterProjects() {
    const filter = document.getElementById('projectFilter').value;
    const pythonProjects = document.getElementById('pythonProjects');
    const javaProjects = document.getElementById('javaProjects');

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
}
