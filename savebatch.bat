@echo off
 

echo %cd%

set curr_dir=%cd%
 
c:
rem cd ..
rem cd ..
rem cd ..
rem cd ..
rem cd ..
rem cd ..
rem cd "Program Files\Adobe\Reader 9.0\Reader"
echo %cd%
cd ..
cd ..

cd "Program Files\Adobe\Acrobat Reader DC\Reader"
REM do your stuff...

echo %cd%
rem AcroRd32.exe /t "C:\Users\dheeraj.kumar\Downloads\amCharts.pdf" "Canon iR3025"
croRd32.exe /t "D:\Current_Project\printmoduleExample\output.pdf"
rem AcroRd32.exe /A "zoom=50" "D:\Current_Project\printmoduleExample\output.pdf"
rem chdir /C %curr_dir%

cd %curr_dir%

rem echo %cd% %:D%

echo %cd%


exit /b 0


pause>nul