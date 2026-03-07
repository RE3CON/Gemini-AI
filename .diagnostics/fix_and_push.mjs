import { execSync } from 'child_process';

try {
  console.log("Checking branch...");
  const branch = execSync('git branch --show-current').toString().trim();
  console.log("Current branch:", branch);

  if (branch !== 'main') {
    console.log("Renaming to main...");
    execSync('git branch -m main');
  }

  console.log("Staging and committing...");
  execSync('git add .');
  execSync('git commit -m "Fix build and release workflow"');
  
  console.log("Pushing to origin...");
  execSync('git push -u origin main');
  
  console.log("Pushing to secondary...");
  execSync('git push -u secondary main');

} catch (error) {
  console.error("Error:", error.message);
}
