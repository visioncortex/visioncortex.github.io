set -e
npm run build
git add docs
git commit -m Build
git push -f origin master:gh-pages
git reset --hard HEAD~1