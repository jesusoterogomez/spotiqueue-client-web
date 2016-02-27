# Set pre-commit hook
ln -s ../../.pre-commit .git/hooks/pre-commit

# Ensure that pre-commit script is executable
chmod +x .git/hooks/pre-commit
