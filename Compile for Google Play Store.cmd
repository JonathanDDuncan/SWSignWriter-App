npm i --global ionic capacitor
cd "W:\SWSignWriter-App"
ionic build

notepad "W:\SWSignWriter-App\android\app\build.gradle"

REM increment value of versionName
pause

REM ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
REM SETX JAVA_HOME "C:\Program Files\Java\jre1.8.0_333"

cd W:\SWSignWriter-App\android
gradlew bundleRelease

REM You should have an aab file in /android/app/build/outputs/bundle/release
explorer "W:/SWSignWriter-App/android/app/build/outputs/bundle/release"

REM log into the Google Play Consle Portal. https://play.google.com/console/u/0/developers/5490476019009349213/app-list?pli=1
REM Signwriter Admin. 
REM Go to section Pruebas>Prueba interna https://play.google.com/console/u/0/developers/5490476019009349213/app/4974055831550911166/tracks/internal-testing
REM Click on the top right button labeled "Edit release"
REM Upload the aab file
REM click on Review Version

