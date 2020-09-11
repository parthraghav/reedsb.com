SRC_PATH=src/app.js
BUILD_PATH=src/app.min.js
TMP_BUILD_PATH=src/_app.min.js
ERR_LOG_PATH=error_log
MINIFIER_URL=https://javascript-minifier.com/raw
BUILD_HEADER="/* Author: Parth Raghav <raghavp@reed.edu> */\n// File: app.min.js\n"

CURL_RETURN_CODE=0
CURL_OUTPUT=`curl -X POST -s -o $BUILD_PATH --data-urlencode input@$SRC_PATH -w "%{http_code}" $MINIFIER_URL || CURL_RETURN_CODE=$?`
if [ $CURL_OUTPUT != "200" ]; then  
    echo "🚨Build failed with error code - ${CURL_RETURN_CODE}"
    # Move error logs
    cat $BUILD_PATH >> $ERR_LOG_PATH
    # Clean the build file
    echo > $BUILD_PATH
else
    echo "✨Build successful"
    # Adding header
    cat <(echo -e "$BUILD_HEADER") $BUILD_PATH > $TMP_BUILD_PATH
    mv $TMP_BUILD_PATH $BUILD_PATH
fi
