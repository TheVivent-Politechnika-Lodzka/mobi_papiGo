# MOBI - PapiGo

## Wymagania:

> - zainstalowany yarn/npm wraz z node.js
> - skonfigurowane środowisko Android Studio zgodnie z poradnikiem dostępnym tutaj: https://reactnative.dev/docs/environment-setup

## uruchomienie w środowisku developerskim

1. `yarn` / `npm install` - instalacja pakietów
2. `yarn android` / `npm run android` - buduje projekt i uruchamia bundler metro
3. `yarn start` / `npm run start` - uruchami bundler metro
4. `yarn test` / `npm run test` - wykonuje testy i generuje raport pokrycia w `./coverage`

## budowanie aplikacji

> UWAGA !!! projekt nie jest przygotowany pod wydanie "production", tzn nie zostały skonfigurowane odpowiednie klucze dla sklepu play ani dla chmury firebase. Aplikacja zostanie poprawnie zbudowana, ale z kluczami deweloperskimi

1. `cd ./android`
2. `./gradlew assembleRelease` - zbuduje aplikację w `\android\app\build\outputs\apk\release`
