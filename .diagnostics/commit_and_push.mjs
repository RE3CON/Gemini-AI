import { execSync } from 'child_process';

try {
  console.log("Staging and committing changes...");
  execSync('git add .');
  execSync('git commit -m "Remove hardcoded secret"');
  
  console.log("Force pushing to origin...");
  execSync('git push -u origin main --force');
  
  console.log("Force pushing to secondary...");
  execSync('git push -u secondary main --force');

  console.log("Push successful!");
} catch (error) {
  console.error("Error during push:", error.message);
}
