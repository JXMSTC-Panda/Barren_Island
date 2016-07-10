#pragma strict
var door_open_sound:AudioClip;
var door_shut_sound:AudioClip;
var currentdoor:GameObject;
var doorisopen:boolean=false;
var doortext:UI.Text;
var time:float;
var door_locksound:AudioClip;
var door_light:Light;
static var windowSwitch:boolean=false;
private var windowRect= Rect(Screen.width/3,Screen.height/3,240,200);
function Start () {

}

function Update () {
	if(doorisopen){
		time+=Time.deltaTime;
		if(time>3.0){
			door(false,door_shut_sound,"doorshut",currentdoor);
			time=0.0;
		}
	}
	if(Input.GetKeyDown(KeyCode.Escape)){
		windowSwitch=!windowSwitch;
	
	}
	
}
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"&&collectpower.charge==4){
		door(true,door_open_sound,"dooropen",currentdoor);
		door_light.color=Color.green;
		Destroy(gameObject.Find("cellImage"));
//		Destroy(collectpower.powerimage_bl);
		//collectpower.powerimage_bl.enabled=false;
		//transform.Find("door light").color=Color.green;
	
	}
	else{
	if(col.gameObject.tag=="Player"){
		doortext.text="要收集到4个能量源才可以打开门";
		doortext.enabled=true;
		transform.GetComponent.<AudioSource>().PlayOneShot(door_locksound);
	}
	}

}
function OnTriggerExit(col:Collider){
	if(col.gameObject.tag=="Player"){
		doortext.enabled=false;
	}
	
	
	

}
function door(doorcheck:boolean,clip_name:AudioClip,anim_name:String,thisdoor:GameObject){
	doorisopen=doorcheck;
	thisdoor.GetComponent.<AudioSource>().PlayOneShot(clip_name);
	thisdoor.GetComponent.<Animation>().Play(anim_name);

}

function OnGUI(){
	if(windowSwitch==true){
		windowRect=GUI.Window(0,windowRect,WindowContain,"测试窗口");
	
	}

}
function WindowContain(windowID:int){
	if(GUI.Button(Rect(70,70,100,20),"关闭音乐")){gameObject.Find("Terrain").GetComponent(AudioSource).enabled=false;}
	if(GUI.Button(Rect(70,100,100,20),"打开音乐")){gameObject.Find("Terrain").GetComponent(AudioSource).enabled=true;}
	if(GUI.Button(Rect(70,130,100,20),"关闭窗口")){windowSwitch=false;}
	if(GUI.Button(Rect(70,160,100,20),"退出游戏")){Application.Quit();}
	GUI.DragWindow(new Rect(0,0,1000,100));
}