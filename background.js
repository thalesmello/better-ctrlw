chrome.commands.onCommand.addListener(command => {
    if (command === "close-highlighted-windows") {
        var highlightedQuery = {
            highlighted: true,
            currentWindow: true,
        };

        chrome.tabs.query(highlightedQuery, tabs => {
            chrome.tabs.remove(tabs.map(tab => tab.id));
        });
    }
});
