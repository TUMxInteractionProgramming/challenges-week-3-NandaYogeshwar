function switchChannel(channelName){
    // Log channel name to console
    console.log('Tuning into channel ' + channelName);
    
    // Change channel name in app bar above chat area
    $('#selected-channel-for-chat span').text(channelName);

    // Change location in app bar above chat area
    $('#selected-channel-for-chat strong').text('upgrading.never.helps');
    $('#selected-channel-for-chat a').attr('href', 'http://w3w.co/upgrading.never.helps');

    // Empty the star
    $('#selected-channel-for-chat img').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    $('#selected-channel-for-chat img').attr('alt', 'not starred');
}

function toggleStarChatBar(){
    // Refill the star above the chat bar
    $('#selected-channel-for-chat img').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
    $('#selected-channel-for-chat img').attr('alt', 'starred');
}

function selectTab(tabId){
    // Unselect all tabs
    $('#tab-bar button').removeClass('selected');

    // Select the clicked one
    $('#'+tabId).addClass('selected');

    // Log the tab name to console
    console.log('Changing to tab ' + tabId);
};

function toggleEmojis(){
    // Hide/show emojis when clicked
    $('#emojis').toggle();
}