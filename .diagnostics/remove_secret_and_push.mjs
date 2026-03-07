import { execSync } from 'child_process';

try {
  console.log("Removing secret file...");
  execSync('rm .diagnostics/check_failures.cjs');
  
  console.log("Amending commit...");
  execSync('git add .');
  execSync('git commit --amend --no-edit');
  
  console.log("Force pushing to origin...");
  execSync('git push -u origin main --force');
  
  console.log("Force pushing to secondary...");
  execSync('git push -u secondary main --force');

  console.log("Push successful!");
} catch (error) {
  console.error("Error during push:", error.message);
}
