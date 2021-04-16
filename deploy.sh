set -e

#build
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:judieyyang/gh-pages.git master:gh-pages

cd -
