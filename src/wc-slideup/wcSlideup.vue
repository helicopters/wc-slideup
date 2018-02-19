<style lang="less">
.wc-slideup__mask {
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0);
	transition: all 444ms;
	z-index: 1000;
}
.wc-slideup__mask--show {
	display: block;
}
.wc-slideup__mask--diff {
	background: rgba(0, 0, 0, 0.4);
}
.wc-slideup__content-wrapper {
	display: none;
	transform:translate3d(0, 100%, 0);
	position: fixed;
	bottom: 0;
	width: 100%;
	transition: all 222ms;
	z-index: 10000;
	background: white;
}
.wc-slideup__content-wrapper--show {
	display: block;
}
.wc-slideup__content-wrapper--diff {
	transform:translate3d(0, 0, 0);
}
</style>
<template>
	<div class="wc-slideup-container">
		<div class="wc-slideup__mask" ref="mask" @click="hide"></div>
		<div class="wc-slideup__content-wrapper" ref="content" @click.prevent.stop="fn">
			<slot/>
		</div>
	</div>
</template>
<script>
	let addClass = (el, _class) => {
		el.classList.add(_class);
	}
	let removeClass = (el, _class) => {
		el.classList.remove(_class);
	}
	let next = cb => {
		setTimeout(()=>{
			cb();
		}, 50)	
	}
	let handler = (e) => {
		e.preventDefault();
	}
	export default {
		name: 'wcSlideup',
		methods: {
			show () {
				addClass(this.$refs.mask, 'wc-slideup__mask--show');
				next(()=>{
					addClass(this.$refs.mask, 'wc-slideup__mask--diff');
				});
				addClass(this.$refs.content, 'wc-slideup__content-wrapper--show');
				next(()=>{
					addClass(this.$refs.content, 'wc-slideup__content-wrapper--diff');
				});		
				document.body.addEventListener('touchmove', handler, false);
			},
			hide () {
				document.body.removeEventListener('touchmove', handler, false);
				/* 隐藏 mask */
				removeClass(this.$refs.mask, 'wc-slideup__mask--diff');
				let maskHandler = ()=>{
					removeClass(this.$refs.mask, 'wc-slideup__mask--show');
					this.$refs.mask.removeEventListener('transitionend', maskHandler, false);
				}
				this.$refs.mask.addEventListener('transitionend', maskHandler, false);
				/* 隐藏内容 */
				removeClass(this.$refs.content, 'wc-slideup__content-wrapper--diff');
				let contentHandler = ()=>{
					removeClass(this.$refs.content, 'wc-slideup__content-wrapper--show');
					this.$refs.content.removeEventListener('transitionend', contentHandler, false);
				}
				this.$refs.content.addEventListener('transitionend', contentHandler, false);
			},
			fn () {}
		}
	}
</script>