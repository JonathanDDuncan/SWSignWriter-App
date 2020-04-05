set SENTRY_AUTH_TOKEN=78e8851c467f4d6ea0ccfd80bb928fd6d9a820bb907c450b9a635359508220c9
set SENTRY_ORG=swsignwriter
start .\node_modules\.bin\sentry-cli releases finalize %1
pause