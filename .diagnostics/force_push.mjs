import { execSync } from 'child_process';

try {
  console.log("Force pushing to origin...");
  execSync('git push -u origin main --force');
  
  console.log("Force pushing to secondary...");
  execSync('git push -u secondary main --force');

  console.log("Force push successful!");
} catch (error) {
  console.error("Error during force push:", error.message);
}
