if [ -d "../dist" ]; 
then
rsync --delete -vzrtopgq -aP --exclude=.* bin/ ../dist/bin/
rsync --delete -vzrtopgq -aP --exclude=.* server/ ../dist/server/
#rsync --delete -vzrtopgq -aP --exclude=.* node_modules/ ../dist/node_modules/
cp ./app.js ../dist
cp ./package.json ../dist
else
if ! ([ -d "./dist" ];)
then
mkdir ./dist
fi
rsync --delete -vzrtopgq -aP --exclude=.* bin/ ./dist/bin/
rsync --delete -vzrtopgq -aP --exclude=.* server/ ./dist/server/
#rsync --delete -vzrtopgq -aP --exclude=.* node_modules/ ./dist/node_modules/
cp ./app.js ./dist
cp ./package.json ./dist
cp ./conf.js ./dist
fi

rsync --delete -vzrtopgq -aP --exclude=.* bin/ app/www/
if [ -d "./app/platforms/ios/www" ]; then cp -fr app/www/ app/platforms/ios/www/; echo "ios updated"; fi
if [ -d "./app/platforms/android/assets/www" ]; then cp -fr app/www/ app/platforms/android/assets/www/; echo "android updated"; fi

echo file copied