const width = 700;
const height = 1000;
const quantity = 170;
const types = [ 'text', 'select', 'progress', 'meter', 'button', 'radio', 'checkbox' ];
const greetings =[ '刘宝贝圣诞快乐','每天都在想宝贝','圣诞快乐','刘小仙女','刘小可爱','刘小猪猪','又是想你的一天','跟宝宝在一起的每天都开心','最喜欢宝宝了~','亲亲','小宝贝~', '快到哥哥怀里来','希望宝贝每天都开开心心','么么么','圣诞快乐','圣诞快乐','宝贝','刘宝贝圣诞快乐' ];

let tree = document.querySelector( '.tree' ),
treeRotation = 0;

tree.style.width = width + 'px';
tree.style.height = height + 'px';

window.addEventListener( 'resize', resize, false );


// 树
for( var i = 0; i < quantity; i++ ) {
	let element = null,
		type = types[ Math.floor( Math.random() * types.length ) ],
		greeting = greetings[ Math.floor( Math.random() * greetings.length ) ];

	let x = width/2,
		y = Math.round( Math.random() * height );

	let rx = 0,
		ry = Math.random() * 360,
		rz = -Math.random() * 15;

	let elemenWidth = 5 + ( ( y / height ) * width / 2 ),
		elemenHeight = 40;
	
	var elementhead=document.createElement( 'img' );
	elementhead.src="Y:/小玩意/DOMTree-master/js/无背景.png";
	elementhead.style.position="absolute";
	elementhead.style.top="-170px";
	elementhead.style.left="250px";
	elementhead.style.width = '200px';
	elementhead.style.height = '200px';

	var elementroot=document.createElement( 'img' );
	elementroot.src="Y:/小玩意/DOMTree-master/js/树干.png";
	elementroot.style.position="absolute";
	elementroot.style.top="960px";
	elementroot.style.left="300px";
	elementroot.style.width = '100px';
	elementroot.style.height = '300px';

	switch( type ) {
		case 'button':
			element = document.createElement( 'button' );
			element.textContent = greeting;
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'progress':
			element = document.createElement( 'progress' );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			if( Math.random() > 0.5 ) {
				element.setAttribute( 'max', '100' );
				element.setAttribute( 'value', Math.round( Math.random() * 100 ) );
			}
			break;
		case 'select':
			element = document.createElement( 'select' );
			element.setAttribute( 'selected', greeting );
			element.innerHTML = '<option>' + greetings.join( '</option><option>' ) + '</option>';
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'meter':
			element = document.createElement( 'meter' );
			element.setAttribute( 'min', '0' );
			element.setAttribute( 'max', '100' );
			element.setAttribute( 'value', Math.round( Math.random() * 100 ) );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'text':
		default:
			element = document.createElement( 'input' );
			element.setAttribute( 'type', 'text' );
			element.setAttribute( 'value', greeting );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			element.style.backgroundColor="#008000"
			element.style.font.color="#F8F8FF"
	}

	element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;
	tree.append(elementhead)
	tree.append(elementroot)
	tree.appendChild( element );
}

// 让它下雪
for( var i = 0; i < 200; i++ ) {
	let element = document.createElement( 'input' );
	element.setAttribute( 'type', 'radio' );

	let spread = window.innerWidth/2;

	let x = Math.round( Math.random() * spread ) - ( spread / 4 ),
		y = Math.round( Math.random() * height ),
		z = Math.round( Math.random() * spread ) - ( spread / 2 );

	let rx = 0,
		ry = Math.random() * 360,
		rz = 0;

	if( Math.random() > 0.5 ) element.setAttribute( 'checked', '' );

	element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

	tree.appendChild( element );
}


function resize() {
	tree.style.top = ( ( window.innerHeight - height - 100 ) / 2 ) + 'px';
}

resize();
