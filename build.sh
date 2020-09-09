BUILD_PATH=src/app.min.js
MINIFIER_URL=https://javascript-minifier.com/raw

# Adding header
echo "/* Author: Parth Raghav <raghavp@reed.edu> */" > $BUILD_PATH
echo -e "// File: app.min.js\n" >> $BUILD_PATH

CURL_RETURN_CODE=0
CURL_OUTPUT=`curl -X POST -s --data-urlencode 'input@src/app.js' $MINIFIER_URL >> $BUILD_PATH` || CURL_RETURN_CODE=$?
if [ ${CURL_RETURN_CODE} -ne 0 ]; then  
    echo "🚨Build failed with error code - ${CURL_RETURN_CODE}"
else
    echo "✨Build successful"
fi
