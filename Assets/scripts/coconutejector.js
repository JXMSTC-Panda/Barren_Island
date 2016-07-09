#pragma strict
var shootsound:AudioClip;
var coconut_bl:Rigidbody;
var coconutcollider:Collider;
function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1")&&mat.canfirecoconut==true){
		gameObject.GetComponent.<AudioSource>().PlayOneShot(shootsound);
		var newcoconut:Rigidbody=Instantiate(coconut_bl,transform.position,transform.rotation);//产生射弹
		newcoconut.velocity=transform.forward*30.0;//给射弹添加力和方向
		//Physics.IgnoreCollision(coconutcollider.GetComponent.<Collision>(),newcoconut.GetComponent.<Collision>(),true);//忽略主角和射弹的碰撞
	}
}