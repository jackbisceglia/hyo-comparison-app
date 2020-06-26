#!/bin/bash
#!/usr/bin/env python3

func ()
{
STR1="import ArgsFilter; ArgsFilter.FilterArgsAndReturnValueToBash('"
STR2="')"
RES="$STR1$@$STR2"
myvar=$(python3 -c"$RES")
echo $myvar
return 
}

