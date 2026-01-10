# Pure Magic - One-Click Deployment Script
# This script automates Git push which triggers Vercel Autodeploy

Write-Host "🚀 Starting Deployment Process..." -ForegroundColor Cyan

# 1. Increase Git POST Buffer (for large video files)
Write-Host "📦 Configuring Git for large media..." -ForegroundColor Yellow
git config http.postBuffer 524288000

# 2. Add all changes
Write-Host "📝 Staging changes..." -ForegroundColor Yellow
git add .

# 3. Request Commit Message
$msg = Read-Host "💬 Enter commit message (or press enter for 'Auto-update')"
if ([string]::IsNullOrWhiteSpace($msg)) { $msg = "Auto-update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }

# 4. Commit
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "$msg"

# 5. Push to GitHub (triggers Vercel)
Write-Host "⬆️ Pushing to GitHub..." -ForegroundColor Yellow
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed! Vercel is now building your site." -ForegroundColor Green
} else {
    Write-Host "❌ Deployment failed. Please check the error message above." -ForegroundColor Red
}

Write-Host "Press any key to exit..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
