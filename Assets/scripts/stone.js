#pragma strict

function Start () {

}

function Update () {
	transform.Rotate(0,100*Time.deltaTime,0);
}
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"&&collectpower.charge==2&&collectpower.stonecount<10){
		col.gameObject.SendMessage("stonepickup");
		Destroy(gameObject);
	}

}