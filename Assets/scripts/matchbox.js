#pragma strict
var matchboxsound:AudioClip;
var match_image:UI.RawImage;
static var havematchbox:boolean=false;
function Start () {

}

function Update () {

}
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		AudioSource.PlayClipAtPoint(matchboxsound,transform.position);
		
		Destroy(gameObject);
		match_image.enabled=true;
		havematchbox=true;
		Destroy(gameObject.Find("firetext"));
	}

}