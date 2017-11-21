# Pre-requisites:

1. Install nightwatch by running the command `npm install -g nightwatch`

2. SauceLabs account

# Steps to run the tests:

1. Export the following two enviroment variables:
    ```
    export SAUCE_USER=<user>
    export SAUCE_KEY=<key>
    ```

    Replace `<user>` with the SauceLabs user id of the account created in 2.
    
    Replace `<key>` with the SauceLabs key for the account created in 2 (can be found in the user profile).

2. From the `tests/functional` folder, run the following command:
    ```
    nightwatch --config nightwatch.json
    ```
