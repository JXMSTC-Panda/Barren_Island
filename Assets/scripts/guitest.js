#pragma strict
var myguiskin:GUISkin;
private var winrect:Rect;
static var talk:boolean=false;
static var info:String;
static var rolename:String;
private var scrpos:Vector2;
function Start () {
	winrect=Rect(Screen.width*2/3,Screen.height*2/3,360,510);
	
}
function OnGUI(){
	GUI.skin=myguiskin;
	if(talk==true){
	winrect=GUI.Window(1,winrect,domywindow,"");
}
}
function domywindow(windi:int){
	GUILayout.BeginVertical();//垂直布局
	GUILayout.Space(8);
	GUILayout.Button("","mybuttonskin");
	GUILayout.Label("","mydividerskin");
	GUILayout.Label(rolename,"mylabelskin");
	GUILayout.Label("","mydividerskin");
	GUILayout.Label(info,"mytestskin");
	GUILayout.EndVertical();//结束垂直布局
	if(GUI.Button(Rect(150,440,60,20),"关闭")){talk=false;}
	else if(GUI.Button(Rect(150,440,60,20),"关闭")&&guitest.rolename=="游戏结束"){
		Application.Quit();
	
	}
	GUI.DragWindow(Rect(0,0,1000,1000));
}