set SENTRY_AUTH_TOKEN=78e8851c467f4d6ea0ccfd80bb928fd6d9a820bb907c450b9a635359508220c9
set SENTRY_ORG=swsignwriter
for /f %%i in ('.\node_modules\.bin\sentry-cli releases propose-version') do set VERSION=%%i
start .\node_modules\.bin\sentry-cli releases new  -p swsignwriterproj "%VERSION%"
npm run deploy
start .\node_modules\.bin\sentry-cli releases finalize -p swsignwriterproj "%VERSION%"
pause