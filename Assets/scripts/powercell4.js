#pragma strict
var win:AudioClip;
function Start () {

}

function Update () {
	if(target.coconut_count==10){
		transform.Translate(0,-0.1,-0.1);//移动对象位置
		gameObject.GetComponent.<AudioSource>().PlayOneShot(win);
		//transform.Rotate(100*Time.deltaTime,0,0);//让对象沿x轴旋转
	}
}
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		col.gameObject.SendMessage("cellpickup");
		Destroy(gameObject);
	}

}