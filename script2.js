function calculateDaysLeft() {
    // Set the target date (replace with your specific date)
    var targetDate = new Date('2024-02-14'); 
  
    // Get the current date
    var currentDate = new Date();
  
    // Calculate the difference in milliseconds
    var timeDifference = targetDate.getTime() - currentDate.getTime();
  
    // Convert milliseconds to days
    var daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    // Update the content of the header element
    document.getElementById('daysLeftHeader').innerHTML = daysLeft + " more day left...";
  }

  // Call the function to calculate days left
calculateDaysLeft();