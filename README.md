# Better Ctrl-W

Vim users are used to using the `Ctrl-w` key combination for deleting the  last
word when in insert mode. That's no problem for Mac OS users when using
chrome, as the keyboard shortcut for closing a tab is Cmd+w. This is a problem
when using the browser on either Linux or Windows machines, as `Ctrl-w` is the
shortcut for closing a window. So, when editing a text, a Vim user might
accidentally close the current tab by issuing a `Ctrl-w` command, sometimes losing
important text that was being edited.

That annoyance motivated people to discuss solutions on [a StackOverflow thread][1],
in which user [`samson`][2] commented he created [a Chrome extension][3] precisely to:

1. Assign `Ctrl-w` to an extension shortcut that does absolutely nothing
2. Assign a hotkey to close the current tab (I like to use `Alt-w` to mimic Mac OS's `Cmd+w`)

The problem with his extension is that it only works with the currently active tab,
and I regularly use `Shift + Click` to highlight a bunch of tabs, so that I can close them
all at once. His plugin didn't support multiple highlighted tabs, so I created my own.

# Usage

To use this plugin as it's intended, you have to set up the keyboard shortcuts after
installing it. Go to `chrome://extensions/shortcuts` and set the following shortcuts:

1. Assign `Do absolutely nothing` to `Ctrl-w`
2. Assign `Close highlighted tabs` to `Alt-w` or any other key combination of choice

This way, `Ctrl-w` will no longer close the current tab by mistake when editing it,
and you will be able to use `Alt-w` to close either the current of all highlighted tabs.

[1]: https://superuser.com/a/1207752
[2]: https://superuser.com/users/276658/samson
[3]: https://chrome.google.com/webstore/detail/ctrlw/goejokenmdamcapadhgghgpeeaeaaedc?hl=en
