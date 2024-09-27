const jobs = [
    { title: "Frontend Developer", status: "Active", applications: 8 },
    { title: "Backend Developer", status: "Closed", applications: 15 },
    { title: "Full Stack Developer", status: "Active", applications: 12 },
    { title: "Project Manager", status: "Closed", applications: 6 }
];

function loadJobPosts() {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = '';

    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p>Status: ${job.status}</p>
            <p>Applications: ${job.applications}</p>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        jobList.appendChild(jobItem);
    });
}

document.addEventListener('DOMContentLoaded', loadJobPosts);
