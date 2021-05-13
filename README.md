# Client for Authorization server
#### Client for service which can uploading and downloading data
## Installation

Clone this git repository using

`git clone https://github.com/hinagawa/arch_client_web.git`

Download and install 

[Node](https://nodejs.org/)

Install project dependencies:

`npm install`

Run project:

`npm start`

## Tests

### To run autotest_ui:

Set terminal in autotest_ui directory and run:

`npm run test`

### To run testcafe-tests:

Install testcafe dependencies:

`npm install -g testcafe`

Set terminal in testcafe-tests directory and run:

`npx testcafe chrome,edge,firefox testcafe-tests/`

## Usage
#### Only authorized users can reach Main page.
* Sign up page (https://sadmadsoul.dev/sign_up)
* Auth page (https://sadmadsoul.dev/auth)
* Main page (https://sadmadsoul.dev/index)
## Related repositories
1. [Configuration Server](https://github.com/unbrokenguy/sys-arch-conf-app)
2. [Authorization Server](https://github.com/unbrokenguy/sys-arch-auth-app)
3. [Command line client](https://github.com/unbrokenguy/sys-arch-client)
