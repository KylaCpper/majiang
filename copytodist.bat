robocopy bin ./dist/bin /MIR /NFL /NDL /NJH /NJS /nc /ns /np
robocopy server ./dist/server /MIR /NFL /NDL /NJH /NJS /nc /ns /np
REM robocopy node_modules ./dist/node_modules /MIR /NFL /NDL /NJH /NJS /nc /ns /np
robocopy ./ ./dist app.js package.json conf.js

robocopy bin ./app/www /MIR /NFL /NDL /NJH /NJS /nc /ns /np

echo "done!"
