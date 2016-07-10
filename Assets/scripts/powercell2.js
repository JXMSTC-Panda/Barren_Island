#pragma strict

function Start () {

}

function Update () {
	transform.Rotate(0,100*Time.deltaTime,0);
}
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"&&collectpower.woodcount==10){
		col.gameObject.SendMessage("cellpickup");
		Destroy(gameObject.Find("woodcount"));
		Destroy(gameObject);
	}

}