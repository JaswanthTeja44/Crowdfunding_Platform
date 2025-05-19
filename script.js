    function validateInputs(title, description, goal) {
      let isValid = true;
      document.getElementById('error-title').textContent = '';
      document.getElementById('error-description').textContent = '';
      document.getElementById('error-goal').textContent = '';

      if (!title.trim()) {
        document.getElementById('error-title').textContent = 'Title is required';
        isValid = false;
      }
      if (!description.trim()) {
        document.getElementById('error-description').textContent = 'Description is required';
        isValid = false;
      }
      if (!goal || isNaN(goal) || goal <= 0) {
        document.getElementById('error-goal').textContent = 'Enter a valid funding goal';
        isValid = false;
      }

      return isValid;
    }

    function submitProject() {
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const goal = document.getElementById('goal').value;

      if (!validateInputs(title, description, goal)) return;

      const projectList = document.getElementById('project-list');
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';
      projectDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <strong>Goal: $${goal}</strong>
      `;

      projectList.prepend(projectDiv);

      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      document.getElementById('goal').value = '';
    }