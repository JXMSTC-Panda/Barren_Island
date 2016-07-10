#pragma strict

function Start () {

}

function Update () {
	transform.Rotate(0,100*Time.deltaTime,0);
}
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		col.gameObject.SendMessage("stonepickup");
		if(collectpower.stonecount==10){
			Destroy(gameObject.Find("stonecount"));
		}
		Destroy(gameObject);
	}

}