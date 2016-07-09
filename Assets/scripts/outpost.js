#pragma strict
var door_open_sound:AudioClip;
var door_shut_sound:AudioClip;
var currentdoor:GameObject;
var doorisopen:boolean=false;
var doortext:UI.Text;
var time:float;
var door_locksound:AudioClip;
var door_light:Light;
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