$(document).ready(function(){
    // Handle download button clicks
    $('.download-btn').on('click', function(e){
        e.preventDefault();

        // Get the actual download link from the data-download-url attribute
        let downloadUrl = $(this).data('download-url');

        // Open the Monetag ad link in a new tab first
        window.open('https://luglawhaulsano.net/4/7303820', '_blank');

        // Delay the download by 2 seconds to ensure interaction with the ad
        setTimeout(function() {
            window.open(downloadUrl, '_blank');
        }, 2000); // 2-second delay
    });
});
