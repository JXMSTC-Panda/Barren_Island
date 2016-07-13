#pragma strict
var firesystem_bl:GameObject;
var smokesystem_bl:GameObject;
var firesound:AudioClip;
var firelight:Light;
var fire_bl:boolean=false;
var firetext:UI.Text;
function Start () {

}

function Update () {

}
function OnControllerColliderHit(hit:ControllerColliderHit){
	if(hit.gameObject.tag=="fire"&&matchbox.havematchbox==true&&fire_bl==false){
		fire_bl=true;
		firesystem_bl.GetComponent.<Renderer>().enabled=true;
		smokesystem_bl.GetComponent.<Renderer>().enabled=true;
		firelight.enabled=true;
		gameObject.GetComponent.<AudioSource>().PlayOneShot(firesound);
		fire_bl=true;
		Destroy(gameObject.Find("matchimage"));
		guitest.talk=true;
		guitest.rolename="游戏结束";
		guitest.info="恭喜你成功发射求救信号\n游戏内容已结束，点击关闭退出游戏";
	}
	else if(hit.gameObject.tag=="fire"&&fire_bl==false) {
		firetext.text="需要火柴才能点火";
	
	}

}