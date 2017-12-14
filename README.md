Deck Remote
===========

**deprecated** If acquinted myself with the following framework [controldeck.js][7].
I recommend it whole heartily.

[deck.js][1] is a framework for creating modern HTML
presentations. This project creates a plugin for deck to remote
control the progress through the presentation.

Environment
-----------

This is a [node.js][2] project and it is using [npm][3] to handle the
dependencies. To download all the dependencies execute

    npm install

Furthermore, the project relies on [submodules][6]. Run the following
commands to correctly setup the project.

    git submodule init
    git submodule update

Development
-----------

While developing [nodemon][5] is an indispensable tool. It restarts
the application when underlying files are changed. To start the
nodemon serving the deck remote server run

    node_modules/.bin/nodemon server.js

Tests
-----

Execute the following command to run all the tests

    npm test

[Mocha][4] is used as a test framework.


[1]: http://imakewebthings.com/deck.js/ "Homepage for deck.js"
[2]: http://nodejs.org/ "Homepage for node.js"
[3]: https://npmjs.org/ "Homepage for npm"
[4]: http://visionmedia.github.com/mocha/ "Homepage for Mocha"
[5]: https://github.com/remy/nodemon "nodemon on GitHub"
[6]: http://git-scm.com/book/en/Git-Tools-Submodules "Submodule documentation for git"
[7]: http://johnpolacek.github.io/controldeck.js/ "Controldeck.js homepage"
