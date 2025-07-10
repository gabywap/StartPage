### Ez a fájl határozza meg, mely Microsoft Store alkalmazások kerülnek bele a Windows ISO-ba.
### Csak a 22563-as build és annál újabb verziókban működik!
### A ConvertConfig.ini fájlban a következő beállításnak engedélyezettnek kell lennie:
### CustomList = 1

### Ahol nincs # jel, az alkalmazás belekerül az ISO-ba
### Ahol van #, az ki van kapcsolva

### Alap alkalmazások – minden kiadásnál elérhető

Microsoft.WindowsStore_8wekyb3d8bbwe            ### Microsoft Store – szükséges az alkalmazások letöltéséhez
Microsoft.StorePurchaseApp_8wekyb3d8bbwe        ### Vásárláskezelő – Store vásárlásokhoz szükséges
Microsoft.SecHealthUI_8wekyb3d8bbwe             ### Windows Security (Védelem) felhasználói felület
Microsoft.DesktopAppInstaller_8wekyb3d8bbwe     ### Winget, AppInstaller – Store-on kívüli telepítésekhez
Microsoft.Windows.Photos_8wekyb3d8bbwe          ### Képek megtekintése és szerkesztése (modern alkalmazás)
Microsoft.WindowsCamera_8wekyb3d8bbwe           ### Kamera alkalmazás – webkamera kezelése
Microsoft.WindowsNotepad_8wekyb3d8bbwe          ### Modern Jegyzettömb (Notepad) alkalmazás
Microsoft.Paint_8wekyb3d8bbwe                   ### Modern Paint – képszerkesztő
Microsoft.WindowsTerminal_8wekyb3d8bbwe         ### Windows Terminál – modern parancssor, PowerShell
MicrosoftWindows.Client.WebExperience_cw5n1h2txyewy ### Web Experience Pack – időjárás, hír widgetek, keresősáv
Microsoft.WindowsAlarms_8wekyb3d8bbwe           ### Ébresztőóra és időzítő
Microsoft.WindowsCalculator_8wekyb3d8bbwe       ### Számológép
# Microsoft.WindowsMaps_8wekyb3d8bbwe           ### Térkép alkalmazás – ritkán használt, online térképek
Microsoft.MicrosoftStickyNotes_8wekyb3d8bbwe    ### Jegyzetek – ragadós cetlik az asztalon
Microsoft.ScreenSketch_8wekyb3d8bbwe            ### Képernyőkép készítő és jegyzetelő (Snip & Sketch)
# microsoft.windowscommunicationsapps_8wekyb3d8bbwe ### Mail és Naptár (összevont app)
# Microsoft.People_8wekyb3d8bbwe                ### Kapcsolatok – személyes névjegyalapú app
# Microsoft.BingNews_8wekyb3d8bbwe              ### Bing Hírek – online hírportál alkalmazás
# Microsoft.BingWeather_8wekyb3d8bbwe           ### Bing Időjárás
# Microsoft.MicrosoftSolitaireCollection_8wekyb3d8bbwe ### Pasziánsz játék
# Microsoft.MicrosoftOfficeHub_8wekyb3d8bbwe    ### Office hub – Office appok telepítése/linkje
# Microsoft.WindowsFeedbackHub_8wekyb3d8bbwe    ### Visszajelzés küldése a Microsoftnak
Microsoft.GetHelp_8wekyb3d8bbwe                 ### Súgó – Microsoft online támogatás
# Microsoft.Getstarted_8wekyb3d8bbwe            ### Első lépések (bemutató app)
# Microsoft.Todos_8wekyb3d8bbwe                 ### Microsoft To Do – feladatlista alkalmazás
# Microsoft.XboxSpeechToTextOverlay_8wekyb3d8bbwe ### Xbox diktálás/játék segéd
# Microsoft.XboxGameOverlay_8wekyb3d8bbwe       ### Xbox játék HUD
# Microsoft.XboxIdentityProvider_8wekyb3d8bbwe  ### Xbox-fiók kezelés
# Microsoft.PowerAutomateDesktop_8wekyb3d8bbwe  ### Automatizálási eszköz (fejlett felhasználóknak)
# Microsoft.549981C3F5F10_8wekyb3d8bbwe         ### WebView2 runtime (webtartalom megjelenítés)
MicrosoftCorporationII.QuickAssist_8wekyb3d8bbwe ### Távoli segítségkérés (Quick Assist)
# MicrosoftCorporationII.MicrosoftFamily_8wekyb3d8bbwe ### Microsoft Családi beállítások
# Clipchamp.Clipchamp_yxz26nhyzhsrt            ### Videószerkesztő (webes alapú)
# Microsoft.OutlookForWindows_8wekyb3d8bbwe     ### Új Outlook app (előzetes verzió)
MicrosoftTeams_8wekyb3d8bbwe                    ### Microsoft Teams (alapverzió)
# Microsoft.Windows.DevHome_8wekyb3d8bbwe       ### Fejlesztői központ app (Dev Home)
# Microsoft.BingSearch_8wekyb3d8bbwe            ### Bing kereső app
Microsoft.ApplicationCompatibilityEnhancements_8wekyb3d8bbwe ### Kompatibilitási fejlesztések
MicrosoftWindows.CrossDevice_cw5n1h2txyewy      ### Többeszközös élmények (pl. telefon-PC integráció)
MSTeams_8wekyb3d8bbwe                           ### Teams újabb verzió vagy külön példány
Microsoft.MicrosoftPCManager_8wekyb3d8bbwe      ### PC Manager – optimalizáló eszköz (preview)
# Microsoft.StartExperiencesApp_8wekyb3d8bbwe   ### Start menü élmények bővítése

### Média alkalmazások (nem-N kiadások esetén)

Microsoft.ZuneMusic_8wekyb3d8bbwe              ### Zenelejátszó (Groove Music néven is ismert)
Microsoft.ZuneVideo_8wekyb3d8bbwe              ### Videólejátszó
Microsoft.YourPhone_8wekyb3d8bbwe              ### Telefon app – mobil és PC integráció
Microsoft.WindowsSoundRecorder_8wekyb3d8bbwe   ### Hangrögzítő
Microsoft.GamingApp_8wekyb3d8bbwe              ### Xbox App – játékkezelő felület
Microsoft.XboxGamingOverlay_8wekyb3d8bbwe      ### Xbox HUD játék közben
Microsoft.Xbox.TCUI_8wekyb3d8bbwe              ### Xbox kontextusmenü/fiókkezelő

### Média kodekek (nem-N kiadásokhoz, Surface Team kiadás)

Microsoft.WebMediaExtensions_8wekyb3d8bbwe     ### Webes média támogatás
Microsoft.RawImageExtension_8wekyb3d8bbwe      ### RAW formátum támogatás (fényképezőgépek)
Microsoft.HEIFImageExtension_8wekyb3d8bbwe     ### HEIF (nagy hatékonyságú képformátum) támogatás
Microsoft.HEVCVideoExtension_8wekyb3d8bbwe     ### HEVC (H.265) videók támogatása
Microsoft.VP9VideoExtensions_8wekyb3d8bbwe     ### VP9 videóformátum támogatás (YouTube)
Microsoft.WebpImageExtension_8wekyb3d8bbwe     ### WebP képformátum támogatás
Microsoft.DolbyAudioExtensions_8wekyb3d8bbwe   ### Dolby Audio dekóder
Microsoft.AVCEncoderVideoExtension_8wekyb3d8bbwe ### AVC/H.264 videókódolás támogatás
Microsoft.MPEG2VideoExtension_8wekyb3d8bbwe    ### MPEG-2 dekódoló
Microsoft.AV1VideoExtension_8wekyb3d8bbwe      ### AV1 videóformátum támogatás

### Surface Hub appok (általában csak Team kiadáshoz)

# Microsoft.Whiteboard_8wekyb3d8bbwe            ### Microsoft Whiteboard – rajz és ötlet app
# microsoft.microsoftskydrive_8wekyb3d8bbwe     ### Régi OneDrive kliens
# Microsoft.MicrosoftTeamsforSurfaceHub_8wekyb3d8bbwe ### Teams Surface Hubhoz
# MicrosoftCorporationII.MailforSurfaceHub_8wekyb3d8bbwe ### Mail Surface Hubhoz
# Microsoft.MicrosoftPowerBIForWindows_8wekyb3d8bbwe ### Power BI alkalmazás
# Microsoft.SkypeApp_kzf8qxf38zg5c              ### Skype (UWP) alkalmazás
# Microsoft.Office.Excel_8wekyb3d8bbwe          ### Office Excel (Store-os változat)
# Microsoft.Office.PowerPoint_8wekyb3d8bbwe     ### PowerPoint (Store)
# Microsoft.Office.Word_8wekyb3d8bbwe           ### Word (Store)
