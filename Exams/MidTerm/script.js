document.addEventListener('DOMContentLoaded', function () {
    
    const navbarNav = document.querySelector('#navbarNav .navbar-nav');
    
    const newMenuItem = document.createElement('li');
    newMenuItem.classList.add('nav-item', 'dropdown'); 
    
    const newMenuLink = document.createElement('a');
    newMenuLink.classList.add('nav-link', 'dropdown-toggle');
    newMenuLink.href = '#'; 
    newMenuLink.textContent = 'Assignments'; 
    newMenuLink.setAttribute('data-bs-toggle', 'dropdown');
    newMenuLink.setAttribute('aria-expanded', 'false');  
    newMenuItem.appendChild(newMenuLink);
    
    
    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdown-menu');
    
    const tasks = [
        { title: 'Assignment 1', description: 'This is the first assignment.', link: 'Assignment_1/index.html' },
        { title: 'Assignment 2', description: 'This is the second assignment.', link: 'Assignment_2/index.html' },
        { title: 'Lab Task 1', description: 'This is the first lab task.', link: 'Lab_Task_1/index.html' },
        { title: 'Lab Task 2', description: 'This is the second lab task.', link: 'Lab_Task_2/index.html' }
    ];
    
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        const taskLink = document.createElement('a');
        
        // Create title (anchor tag)
        taskLink.classList.add('dropdown-item');
        taskLink.href = task.link;
        taskLink.target = '_blank'; 
        taskLink.textContent = task.title;
        
        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.textContent = task.description;  
        
        taskItem.appendChild(taskLink);
        taskItem.appendChild(taskDescription);
        
        dropdownMenu.appendChild(taskItem);
    });
    
   
    newMenuItem.appendChild(dropdownMenu);
    
    navbarNav.appendChild(newMenuItem);

    newMenuLink.addEventListener('click', function(event) {
        event.preventDefault();  

        const isOpen = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isOpen ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!newMenuItem.contains(event.target)) {
            dropdownMenu.style.display = 'none';  
        }
    });
});
