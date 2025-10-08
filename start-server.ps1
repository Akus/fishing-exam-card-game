Write-Host "Starting Hungarian Fishing Exam Quiz Game..." -ForegroundColor Green
Write-Host ""
Write-Host "Opening in browser at: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npx live-server . --port=3000 --open
