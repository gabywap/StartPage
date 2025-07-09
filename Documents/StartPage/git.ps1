###ha nem müködne akkor elsõnek futtatni ::: Set-ExecutionPolicy RemoteSigned
### aktuális felhasználó esetében ::: Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

#[Console]::OutputEncoding

$REPO          = 'https://github.com/SolutionMasterIT/getstarted'
$REPO_git      = 'https://github.com/SolutionMasterIT/getstarted.git'

Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.Application]::EnableVisualStyles()

$ErrorActionPreference                     = 'SilentlyContinue'
$wshell                                    = New-Object -ComObject Wscript.Shell
$Button                                    = [System.Windows.MessageBoxButton]::YesNoCancel
$ErrorIco                                  = [System.Windows.MessageBoxImage]::Error

$Form                                      = New-Object system.Windows.Forms.Form
$Form.ClientSize                           = New-Object System.Drawing.Point(350,200) #magasság,szélesség
$Form.text                                 = "GIT: getstarted"
$Form.StartPosition                        = "CenterScreen"
$Form.TopMost                              = $false
$Form.BackColor                            = [System.Drawing.ColorTranslator]::FromHtml("#e9e9e9")
$Form.AutoScaleDimensions                  = '192, 192'
$Form.AutoScaleMode                        = "Dpi"
$Form.AutoSize                             = $true
$Form.AutoScroll                           = $True
$Form.FormBorderStyle                      = 'FixedSingle'
$Form.Width                                = $objImage.Width
$Form.Height                               = $objImage.Height

#Panelek:::
$x_left                                    = 0
$y_top                                     = 0
$margin_left                               = 5
$margin_top                                = 5
$d_left                                    = 200
$d_top                                     = 15

#default panel
$Panel_default                             = New-Object system.Windows.Forms.Panel
$Panel_default.height                      = 350
$Panel_default.width                       = $d_left-$margin_left
$Panel_default.location                    = New-Object System.Drawing.Point(($x_left+$margin_left),($y_top+$margin_top))

$Form.controls.AddRange(@($Panel_default)) ###vesszõvel választjuk el ha több panel van

#Panelek tartalma
$x_left         = 0
$y_top          = 0
$margin_left    = 5
$margin_top     = 5
$d_left         = 120
$d_top          = 50

#DEFAULT:
$gitHub_init                                    = New-Object system.Windows.Forms.Button
$gitHub_init.text                               = "GITHUB ::: init"
$gitHub_init.width                              = $d_left-5
$gitHub_init.height                             = $d_top-5
$gitHub_init.location                           = New-Object System.Drawing.Point(($x_left+$margin_left),($y_top+$margin_top))#(0+5,20)
$gitHub_init.Font                               = New-Object System.Drawing.Font('Microsoft Sans Serif',9)
$y_top          = $y_top + $d_top

$git_clone                                      = New-Object system.Windows.Forms.Button
$git_clone.text                                 = "GIT ::: clone"
$git_clone.width                                = $d_left-5
$git_clone.height                               = $d_top-5
$git_clone.location                             = New-Object System.Drawing.Point(($x_left+$margin_left),($y_top+$margin_top))#(0+5,20)
$git_clone.Font                                 = New-Object System.Drawing.Font('Microsoft Sans Serif',9)
$y_top          = $y_top + $d_top

$gitHub_commit                                  = New-Object system.Windows.Forms.Button
$gitHub_commit.text                             = "GITHUB ::: commit, push(main)"
$gitHub_commit.width                            = $d_left-5
$gitHub_commit.height                           = $d_top-5
$gitHub_commit.location                         = New-Object System.Drawing.Point(($x_left+$margin_left),($y_top+$margin_top))#(0+5,20)
$gitHub_commit.Font                             = New-Object System.Drawing.Font('Microsoft Sans Serif',9)
$y_top          = $y_top + $d_top

$Panel_default.controls.AddRange(@($gitHub_init,$git_clone,$gitHub_commit)) ###vesszõvel választjuk el ha több elem van

#eventek
$gitHub_init.Add_Click({
	Write-Host "Start::: gitHub_init!"
	$CMD       = 'git'
	& $CMD config --global user.name "Nyilas János"
	& $CMD config --global user.email "janos.fejleszto@gmail.com"
	& $CMD init
	& $CMD remote add origin $REPO_git
	& $CMD add .
	& $CMD commit -m "0.0.0"
	& $CMD push -u origin main
	Write-Host "KÉSZ!"
})

$git_clone.Add_Click({
	Write-Host "Start::: git_clone!"
	$CMD       = 'git'
	& $CMD -c http.sslVerify=false clone $REPO
	Write-Host "KÉSZ!"
})

$gitHub_commit.Add_Click({
	Write-Host "Start::: gitHub_commit!"
	$CMD       = 'git'
	$outVar    = (git log -1) | Out-String
	$outShell  = New-Object -ComObject Wscript.Shell
	$outShell.Popup($outVar,0,"Last Commit")
	$commit    = Read-Host -Prompt 'commit = '
	& git add .
	& git commit -m $commit
	& git push -u origin main
	Write-Host "KÉSZ!"
})

[void]$Form.ShowDialog()