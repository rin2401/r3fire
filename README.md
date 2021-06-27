# r3fire


## Firebase CLI
### Install
```
npm install -g firebase-tools
```
### Setup
```
firebase login
firebase init host
firebase init functions
```
### Run local
```
firebase emulators:start
```
### Deploy
Preview and clone
```
firebase hosting:channel:deploy test
firebase hosting:clone r3fire:test r3fire:live
```
Deploy to live
```
firebase deploy --only hosting
```

