# This script will run after each npm/yarn install. If dependencies are installed at the root of
# a git repository, any pre-existing pre-commit hooks will be cleared prior to installing
# husky and configuring the pre-commit hook (preventing duplicates).

CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

if [ -d ".git" ]
then
   echo "${CYAN}Found local .git directory, installing husky pre-commit hook...${NC}\n"
   rm -rf .husky/pre-commit && husky install && npx husky add .husky/pre-commit "npm run pre-commit"
else
   echo "${CYAN}No local .git directory found, skipping husky install.${NC}\n"
   echo "${YELLOW}Tip: Pre-commit hooks with husky can only be installed at the root of a git repository.${NC}"
fi
