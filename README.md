<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Job Post</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css"> 
</head>
<body>

<div class="container">
    <h2>Create a Job Post</h2>
    <form id="jobPostForm" novalidate>
        <div class="mb-3">
            <label for="jobTitle" class="form-label">Job Title</label>
            <input type="text" class="form-control" id="jobTitle" required>
            <div class="error" id="jobTitleError"></div>
        </div>
        
        <div class="mb-3">
            <label for="companyName" class="form-label">Company Name</label>
            <input type="text" class="form-control" id="companyName" required>
            <div class="error" id="companyNameError"></div>
        </div>

        <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input type="text" class="form-control" id="location" required>
            <div class="error" id="locationError"></div>
        </div>
        

        <div class="mb-3">
            <label for="jobdescription" class="form-label">Job Description</label> 
            <input type="text" class="form-control" id="jobLocation" required> 
            <div class="error" id="jobLocationError"></div> 
        </div>
        

        <div class="mb-3">
            <label for="salary" class="form-label">Salary (Optional)</label>
            <input type="number" class="form-control" id="salary">
        </div>

        <div class="mb-3">
            <label for="jobType" class="form-label">Job Type</label>
            <select class="form-select" id="jobType" required>
                <option value="">Select job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
            </select>
            <div class="error" id="jobTypeError"></div>
        </div>

        <button type="submit" class="btn btn-primary">Create Job Post</button>
    </form>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="script.js"></script> 
</body>
</html>
