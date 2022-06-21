//:ATOMIC_IVY_MMO_SOURCE_CODE:[034]:=========================://
/**----------------------------------------------------------:::

    Tutorial Where We Build This File ::::::::::::::::::::::::::

        www.tinyurl.com/BOMB-GAME-TUTORIAL        <<< Same_Place
        www.tinyurl.com/GAME-TUTS                 <<< Same_Place

:::----------------------------------------------------------:::

    Git Repo With All Source Code ::::::::::::::::::::::::::::::

        github.com/KanjiCoder/AIM                 <<< Same_Place
        tinyurl.com/ATOMIC-IVY-MMO-SOURCE-CODE    <<< Same_Place
        tinyurl.com/GAME-CODE                     <<< Same_Place
        
:::----------------------------------------------------------**/
//:=========================:ATOMIC_IVY_MMO_SOURCE_CODE:[034]://
//:DEPLOY_THIS_SERVER_YOURSELF:[034]:========================://
/**----------------------------------------------------------:::

    Atomic_Ivy_MMO (AIM) client _AND_ server.

    If you are looking at this code in a debugger, 
    you could copy+paste it and deploy it RIGHT NOW!

    Deployment Steps :
    
    1. Copy Everything You See And Save As "server.js"
    
    2. create package.json that looks like this:

        STEP 2 FOR PROGRAMMERS :

            touch package.json
            echo "{}" > package.json
        
        STEP 2 FOR ARTISTS :

            +---------------------------------------+
            | Notepad ++ : server.js        |[-]|[X]|
            +---------------------------------------+
            |         |                             |
            | LINE 01 |  { }                        |
            |         |                             |
            +---------+-----------------------------+
    
    3. git init . && git add . && git commit -m "[AIM]"
    
    4. heroku apps:create my-atomic-ivy-server
    
    5. git push heroku master
    
:::----------------------------------------------------------**/
//:========================:DEPLOY_THIS_SERVER_YOURSELF:[034]://
//:HIT_THE_GROUND_RUNNING_MY_FRIEND:[034]:===================://
/**----------------------------------------------------------:::

    DODS Hungarian Notation :       [DODS: DataOrientedDesign's]              

        d_    : data     ( GLOBAL ) 
        f_    : function ( GLOBAL ) 
        l_    : library  ( GLOBAL ) 
        
        m_    : member   ( LOCAL  )
        i_    : input    ( LOCAL  )
        o_    : output   ( LOCAL  )
        
:::----------------------------------------------------------**/
//:===================:HIT_THE_GROUND_RUNNING_MY_FRIEND:[034]://
//:ENVIRONMENT_DETECTION:====================================://

    var yesnode =( "undefined" === typeof window );
    var notnode =( "undefined"  != typeof window );

//:====================================:ENVIRONMENT_DETECTION://
//:DATA_BOTHENDS:============================================://

    var webpage =( "" //:--------------------://
    +'      <!DOCTYPE HTML><head>              '
    +'      <meta charset="utf-8"><title>      '
    +'          [AIM]                          '
    +'      </title>                           '
    +'          <script                        '
    +'              src    ="./ATOMIC_IVY_MMO" '
    +'              charset="UTF-8">           '
    +'          </script>                      '
    +'      </head>                            '
    );; //:----------------------------------://

    const TXT = { "Content-Type": "text/javascript"          } ;
    const PNG = { "Content-Type": "image/png"                } ;
    const HTM = { "Content-Type": "text/html"                } ;
    const J_S = { "Content-Type": "text/javascript"          } ;
    const EXE = { "Content-Type": "application/x-msdownload" } ;
    const CSS = { "Content-Type": "text/css"                 } ;

//:============================================:DATA_BOTHENDS://
//:DATA_SERVER_BACKEND:======================================://

    const LIB_F_S = yesnode ? require( "fs"  )              :{};
    const LIB_URL = yesnode ? require( "url" )              :{};
    const LIB_Q_S = yesnode ? require( "node:querystring" ) :{};

//:======================================:DATA_SERVER_BACKEND://
//:FUNCTION_CLIENT_FRONTEND:=================================://
if( notnode ){  window.onload = function( /** [030] **/ ){

    //:CLIENT_GLOBAL_DATA:[031]:=============================://

        let dom_can = null ;
       
    //:=============================:CLIENT_GLOBAL_DATA:[031]://
    //:BOILERPLATE:[028]:====================================://

        function ERR( i_msg ){

            alert( "[ERR]:" + i_msg );
            throw( "[ERR]:" + i_msg );
        };;
        function LOG( i_msg , i_any ){

            console.log( i_msg , ":" , i_any );
        };;
        function HAS( i_obj ){

            var o_has =( 0 );

            if( null      == i_obj
            ||  undefined == i_obj
            ||            ( !i_obj )
            || ""         == i_obj
            ){
                o_has =( 0 );
            }else{
                o_has =( 1 );
            };;
            return( o_has );
        };;

    //:====================================:BOILERPLATE:[028]://
    //:FUNCTION_CANVAS_RESIZE:[032]:=========================://

        const RES_CAN = function PRIVATE_RES_CAN( ){

            let wid =( 0 - 333 /** wid : Client Width  **/ );
            let hig =( 0 - 666 /** hig : Client Height **/ );
            let   W = window ;
            let   D = document.documentElement ;
            let   B = document.body            ;
            
            wid =(W.innerWidth ||D.clientWidth ||
                                 B.clientWidth || 0 );;
            hig =(W.innerHeight||D.clientHeight||
                                 B.clientHeight|| 0 );;
            
            dom_can.width = wid ;
            dom_can.height= hig ;
        };;
    //:=========================:FUNCTION_CANVAS_RESIZE:[032]://
    //:HTML_DOM_SETUP:[029]:=================================://

        const dom_roo = document.documentElement;//:@dom_rom@://
        var   dom_bod = document.body           ;//:@dom_bod@://

        if( HAS( dom_roo ) ){
            LOG( "[dom_roo]" , dom_roo );
        }else{
            ERR( "[dom_roo]" );
        };;
        if( HAS( dom_bod ) ){

            /** Okay. Do nothing. Already Exists. **/
        }else{
            /** Create Document Element **/
            LOG( "[bef:dom_bod]" , dom_bod );
            dom_bod = document.createElement( "body" );
            document.body = dom_bod ;
        };;

        LOG( "[dom_bod]" , dom_bod );

    //:=================================:HTML_DOM_SETUP:[029]://
    //:HTML_DOM_SETUP:[031]:=================================://
    {
        dom_can = document.createElement( "canvas" );
        dom_bod.appendChild( dom_can );

        RES_CAN( );
    }
    //:=================================:HTML_DOM_SETUP:[031]://
    //:HTML_DOM_SETUP:[032]:=================================://

        window.addEventListener( "resize" , RES_CAN );

    //:=================================:HTML_DOM_SETUP:[032]://
    //:WEBGL_SETUP:[033]:====================================://

        var wgl = dom_can.getContext( "webgl" );     //:@wgl@://
        //:.clearColor( _R_  ,  _G_  ,  _B_  ,  _A_ );       ://
        wgl.clearColor( 0.0  ,  1.0  ,  0.0  ,  1.0 );
        wgl.clear( wgl.COLOR_BUFFER_BIT /**ScreenBuffer**/ );

    //:====================================:WEBGL_SETUP:[033]://

};; };;
//:=================================:FUNCTION_CLIENT_FRONTEND://
//:FUNCTION_SERVER_BACKEND:==================================://
if( yesnode ){

require( "http" ).createServer( function( i_ask , i_giv ){

    var sob ={
      m_ask : i_ask                                  //!@ask@!//
    , m_giv : i_giv                                  //!@giv@!//
    , m_url : LIB_URL.parse( i_ask.url , 1 ).pathname//!@url@!//
    , m_pam : LIB_Q_S.parse( i_ask.url , 1 ).query   //!@pam@!//
    , m_seg : [ "URLPATH_SEGMENTS_NOT_LOADED]" ]     //!@seg@!//
    };;

    sob.m_url = sob.m_url.toUpperCase();             //!#MRI#!//

    if( sob.m_url == "/HELLO" ){

        sob.m_giv.end( "WORLD" );
    }else
    if( sob.m_url == "/ATOMIC_IVY_MMO" ){

        LIB_F_S.readFile( "./server.js" , function(err,cof){

            if(err){
                cof = "[we messed up]" ;
            }else{
                sob.m_giv.writeHead( 200 , TXT );
            };;
            sob.m_giv.end( cof , "utf-8" );
        });;
    }else{

        sob.m_giv.writeHead( 200 , HTM );
        sob.m_giv.end( webpage , "utf-8" );
    };;

}).listen(process.env.PORT);

};;
//:==================================:FUNCTION_SERVER_BACKEND://

/** CHANGE_HISTORY ***************************************** ***

    TUTORIAL PART 018 : https://pastebin.com/ZCFNxebJ
                      : tinyurl.com/SERVER-JS-PART-18
                      : git@github.com:KanjiCoder/AIM_018.git
                      : https://github.com/KanjiCoder/AIM_018

*** ***************************************** CHANGE_HISTORY **/
/** PREFIXES *********************************************** ***
    
    GLOBAL SCOPE PREFIXES :

        d_    : data        ( GLOBAL data  )
        f_    : function    ( GLOBAL func  )
        l_    : library     ( GLOBAL lib   )

    LOCAL SCOPE PREFIXES :

        m_    : member variable prefix.
        i_    : formal parameter argument ( i == input  )
        o_    : output argument from func ( o == output )

*** ******************************************************** **/
/** DONT_USE_THESE_AS_PREFIXES ***************************** ***

    LIB_  : any library we got by using require function
          : ( use l_ instead of LIB_ for terseness )

    c_    : client - only 
    s_    : server - only
    b_    : BOTH ( known by both client and server )
    g_    : global

    m_    : macro       NO MACROS IN JAVASCRIPT , simplify.
    t_    : type        TRY_NOT_TO_USE_THIS
    u_    : unit test   Unit tests are functions ( f_ )

*** ******************************************************** **/
/** COMMENTS_ARE_READ_LAST_OR_NEVER ************************ ***

    @LIB_URL@ : LIBRARY : Universal Resource Locator
    @LIB_Q_S@ : LIBRARY : QueryString

    @sob@ : State Object Bundle
    @ask@ : What client is asking for ( request  / req )
    @giv@ : What server is giving  us ( response / res )
    @url@ : /URL/NOT/INCLUDING/ROOT/DOMAIN
    @pam@ : query parameters dictionary
    @seg@ : @url@ parts packed into an array
    @has@ : Has as in "does object exist" ?
    @any@ : Any type
    @obj@ : An object type. So NOT a number or BOOL or STRING.
    @wid@ : The WIDTH  (usually pixels) of something.
    @hig@ : The HEIGHT (usually pixels) of something.
    @wgl@ : Web_GL ( context object )

    @dom_roo@ : DomainObjectModel - Root
    @dom_bod@ : DomainObjectModel - Body
    @doc_bod@ : Means[ document body ]USE[ dom_bod ]
    @dom_can@ : DomainObjectModel - Canvas

    @RES_CAN@ : RESize_CANvas

    @DODS@ : Data_Oriented_Design'S

    #MRI# : Make Routing ( case ) Insensitive 

    #_P_N_C_# : Paranoid_Null_Check



*** ******************************************************** **/