#pragma strict
var targetsound:AudioClip;
static var coconut_count:int=0;
//var coconut_text:UI.texture;
function Start () {

}

function Update () {

}

function OnCollisionEnter(col:Collision){
	if(col.gameObject.tag=="coconut"){
		gameObject.GetComponent.<AudioSource>().PlayOneShot(targetsound);
		coconut_count++;
	//	coconut_text.text="得分："+coconut_count;
	//	target_bl.GetComponentInParent(GameObject).GetComponentInParent(GameObject).GetComponent.<Animation>().Play("down");
	}
}