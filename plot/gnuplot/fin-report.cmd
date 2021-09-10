gnuplot> history
    9  exit
   10  help
   16  reset
   17  clear
   13  set title "fin : date - amount"
   18  set key off
   20  set timefmt "%Y-%m-%d"
   21  set xdata time
   22  set format x "%Y-%m-%d"
   23  set xtics rotate by 90 offset 0,-4 out nomirror
   28  show xdata
   29  show timefmt
   30  set xrange ["2013-05-01":"2016-02-01"]
   32  plot 'C:\office\profile\workspace\project\mydata.dat' using 1:2
   33  history
gnuplot> set style line 1 lc rgb '#0060ad' lt 1 lw 2 pt 7 pi -1 ps 1.5
gnuplot> plot 'C:\office\profile\workspace\project\mydata.dat' using 1:2 with linespoints ls 1

set xtics rotate
set xtics rotate nooffset
set format x '%b %Y' # month YYYY display
 # set xtics 30*24*60*60
 # set datafile separator ","

