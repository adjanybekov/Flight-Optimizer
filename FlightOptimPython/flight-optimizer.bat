@echo off && setlocal EnableDelayedExpansion
set "_cnt=0" && for %%Z in (%*) do set "_arg_=%%Z" && (
set /a "_cnt=!_cnt! + 1" && set "_arg_[!_cnt!]=!_arg_!")

rem skipping --from and --to parameters

for /l %%l in (1 1 !_cnt!) do (
	(if not %%l ==1  if not %%l == 3  call set "c=%%c%% !_arg_[%%l]!" )
	)

rem ECHO python main.py %c%
python main.py %c%
