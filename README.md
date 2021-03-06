Best-Time-to-Post-On-Facebook
=============================


Project  description:   
This  is  a  Facebook  application  which  estimates  the  best  time  (hour)  for  the  user  to   post  a  status  on  Facebook  so  the  user  can  get  more  likes.  This  estimation  is  done   based  on  the  previous  likes  that  the  user  has  achieved  on  his  previous  statuses.  This   application  is  in  fact  a  Facebook  based  application  which  can  be  accessed  through   http://apps.facebook.com/dbproject      but   since   the   DNS   is   located   on   my   local   machine,  it  can  be  accessed  from  other  computers.        

How  things  work:

The  front  end  of  this  application  is  in  HTML  and  CSS  and  the  backend  is  written  in   JavaScript   language.   In   order   to   build   a   Facebook   application,   we   have   to   use   the   Facebook  SDK  and  choose  the  SDK,  which  goes  with  the  language  we’re  using.  Then   we   go   through   the   process   and   add   our   app   id   and   password   in   the   code.   This   application   was   started   in   Python   language   and   after   several   testing   and   working   with  Facebook  Applications  in  various  programming  languages,  I  realized  that  the   most  straight  forward  language  to  use  is  JavaScript  since  the  SDK  can  be  used  by   simple  copy  and  paste  in  our  JS  file.

Challenges  in  the  project:  

1. Facebook  application  requires  that  our  cloud  domain,  which  the  codes  lives   there,  supports  Secure  Socket  Layer  (SSL)  and  the  process  of  providing  this   protocol  on  the  cloud,  was  so  time  consuming  and  expensive.  Applying  SSL   on  the  domain  host  such  as  GoDaddy  requires  that  the  domain  owner  pays   additional   100$   dollars   which   is   not   efficient   to   pay   by   me   a   an   student.   Therefore,  I  chose  to  use  the  local  server  on  my  laptop  and  apply  the  SSL  on   my  local  server.     

2. Each  Browser  behaves  differently  to  our  application.  At  very  first  steps  of  the   project,  the  application  couldn’t  be  run  on  Google  Chrome  browser  and  after   several   searches   I   found   out   Chrome   is   so   sensitive   regarding   security   matters   in   the   build   up   code   and   everything   should   be   fixed   regarding   security  and  SSL.   

3. Through  this  project  I  was  exposed  to  many  new  aspects  of  JavaScript  and   JQuery,   which   I   had,   no   prior   experiences   and   I   had   to   learn   so   many   new   ways  of  using  methods  and  functions,  which  I  was  not  familiar.  
