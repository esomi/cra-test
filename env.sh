#!/bin/bash

# [STEP 1] env-config.js 파일 생성하기
# Recreate config file
APP_DIR=/usr/share/nginx/html
rm -rf $APP_DIR/env-config.js
touch $APP_DIR/env-config.js

# Add assignment
echo "window._env_ = {" >> $APP_DIR/env-config.js

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # carriage return 있으면 제거
  line=$(echo "$line" | tr -d '\r')

  # ignore .env comment
  if printf '%s\n' "${line:0:1}" | grep -q -v '#'; then

    # Split env variables by character `=`
    if printf '%s\n' "$line" | grep -q -e '='; then
      varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
      varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    fi

    # 우선수위(도커환경변수의 value > .env 파일의 value)에 따라 value 설정
    value=$(printf '%s\n' "${!varname}")
    [[ -z $value ]] && value=${varvalue}

    # PUBLIC_URL 을 임시 환경변수로 설정
    if [ "$varname" = "PUBLIC_URL" ] && [ -z "${PUBLIC_URL}" ]; then
        export PUBLIC_URL="$value"
    fi

    # Append configuration property to JS file
    echo "  $varname: \"$value\"," >> $APP_DIR/env-config.js
  fi
done < .env

echo "}" >> $APP_DIR/env-config.js

# [STEP 2-1]  sub path 설정 : build 파일 변경, 파일 이동
# index.html 파일의 PUBLIC_URL 변경
if [ -z "${PUBLIC_URL}" ]; then
  PUBLIC_URL=''
fi

sed -i "s#%PUBLIC_URL%#$PUBLIC_URL#g" $APP_DIR/index.html
find $APP_DIR/static/js -name '*.js' -exec sed -i "s#%PUBLIC_URL%#$PUBLIC_URL#g" {} +

# PUBLIC_URL 이름의 디렉터리로 빌드파일 이동
DIR_NAME=$(echo $PUBLIC_URL | sed 's#^/##')

if [ -n "$DIR_NAME" ]; then
  cd $APP_DIR || exit
  mkdir -p "$DIR_NAME"
  find . -maxdepth 1 ! -name "$DIR_NAME" ! -name "." -exec mv {} "$DIR_NAME/" \;
fi
