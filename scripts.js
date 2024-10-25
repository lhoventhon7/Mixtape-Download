// Search functionality
function searchTracks() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    // Implement search filter here based on input
}

// Announcement Bar Text Change with Fade Effect
function rotateAnnouncements() {
    const messages = [
        "Welcome to our platform! Discover music and blog posts here.",
        "Check out the latest music releases and blog updates!",
        "Explore top trending songs and insightful blogs on our platform."
    ];
    
    let messageIndex = 0;
    setInterval(() => {
        $("#announcement-message").fadeOut(500, function () {
            messageIndex = (messageIndex + 1) % messages.length;
            $(this).text(messages[messageIndex]).fadeIn(500);
        });
    }, 5000); // Adjust timing as needed
}

// Run the announcement text rotation on page load
$(document).ready(function () {
    rotateAnnouncements();
});

// Ad redirection function with countdown
let countdownTime = 7;
let countdownInterval;

function showAd(adLink, targetLink) {
    // Show the modal with the ad iframe
    $('#adModal').modal('show');
    $('#adFrame').attr('src', adLink);
    countdownTime = 7;
    $('#countdown').text(countdownTime);
    $('#closeAdBtn').prop('disabled', true); // Disable close button initially

    // Start the countdown timer
    countdownInterval = setInterval(function () {
        countdownTime--;
        $('#countdown').text(countdownTime);
        
        // Enable close button and redirect when countdown ends
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            $('#closeAdBtn').prop('disabled', false); // Enable close button
            window.location.href = targetLink; // Redirect to the target link
        }
    }, 1000);
}

// Clear interval if the modal is manually closed
$('#adModal').on('hide.bs.modal', function () {
    clearInterval(countdownInterval);
});

function searchTracks() {
    let input = document.getElementById("searchBox").value.toLowerCase();

    // Function to highlight text
    function highlightText(element, query) {
        let originalText = element.getAttribute("data-original");
        
        // Set the content back to the original before highlighting
        element.innerHTML = originalText;

        if (query) {
            let regex = new RegExp(`(${query})`, "gi");
            element.innerHTML = originalText.replace(regex, "<span style='color: red; font-weight: bold;'>$1</span>");
        }
    }

    // Search through blog posts
    let blogPosts = document.querySelectorAll(".blog-post-box");
    blogPosts.forEach(post => {
        let titleElement = post.querySelector("h4");

        // Store original content if not already done
        if (!titleElement.getAttribute("data-original")) {
            titleElement.setAttribute("data-original", titleElement.innerHTML);
        }

        let title = titleElement.getAttribute("data-original").toLowerCase();

        if (title.includes(input)) {
            post.style.display = "flex";
            highlightText(titleElement, input);
        } else {
            post.style.display = "none";
        }
    });

    // Search through music items
    let musicItems = document.querySelectorAll(".music-box");
    musicItems.forEach(item => {
        let songTitleElement = item.querySelector("h4");
        let artistNameElement = item.querySelector("p");

        // Store original content if not already done
        if (!songTitleElement.getAttribute("data-original")) {
            songTitleElement.setAttribute("data-original", songTitleElement.innerHTML);
        }
        if (!artistNameElement.getAttribute("data-original")) {
            artistNameElement.setAttribute("data-original", artistNameElement.innerHTML);
        }

        let songTitle = songTitleElement.getAttribute("data-original").toLowerCase();
        let artistName = artistNameElement.getAttribute("data-original").toLowerCase();

        if (songTitle.includes(input) || artistName.includes(input)) {
            item.style.display = "flex";
            highlightText(songTitleElement, input);
            highlightText(artistNameElement, input);
        } else {
            item.style.display = "none";
        }
    });
}
