REM npm i --global ionic capacitor
w:
cd "W:\SWSignWriter-App"
start "Ionic" ionic build

REM increment value of versionName in Notepad then save and close file
start "Notepad" notepad "W:\SWSignWriter-App\android\app\build.gradle"


pause


cd W:\SWSignWriter-App\android
start gradlew bundleRelease

REM You should have an aab file in /android/app/build/outputs/bundle/release

start chrome "https://play.google.com/console/u/0/developers/5490476019009349213/app/4974055831550911166/tracks/4698643009548496955/releases/9/preparehttps://play.google.com/console/u/0/developers/5490476019009349213/app/4974055831550911166/tracks/internal-testing"

REM log into the Google Play Consle Portal. Signwriter Admin. Go to section Pruebas>Prueba interna  
REM Click on the top right button labeled "Edit release"
REM Upload the aab file
REM click on Review Version
pause

