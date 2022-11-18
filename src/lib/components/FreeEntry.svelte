<script>
	let clientHeight;
</script>

<div class="free-entry" bind:clientHeight style="--content:{clientHeight}px">
	<span> Free Entry </span>
</div>

<style>
	.free-entry {
		width: 12%;
		min-width: 100px;
		position: absolute;
		top: 0;
		right: 0;
		aspect-ratio: 1/1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-primary);
		font-weight: 700;
		text-transform: uppercase;
		font-size: calc(0.15 * var(--content));
		transform: translate(23%, -23%);
	}

	.free-entry::after {
		content: '';
		background-image: url('/images/badge.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: 115%;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		animation: rotate infinite 10s linear;
	}

	span {
		width: 80%;
		text-align: center;
		transform: rotate(20deg);
	}

	@media all and (max-width: 850px) {
		:global(main:not(.landscape)) .free-entry {
			width: 23%;
		}
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
