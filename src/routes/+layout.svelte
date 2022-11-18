<script>
	import { onMount } from 'svelte';
	import particleConfig from '$lib/helpers/particle-config';
	import { landscapeMode, screenHeight, screenWidth } from '$lib/stores';
	import './styles.css';
	import LayoutChild from './LayoutChild.svelte';
	import Loader from '$lib/components/Loader.svelte';

	let loaded = false;
	let innerHeight = 0;
	let innerWidth = 0;
	$: screenHeight.set(innerHeight);
	$: screenWidth.set(innerWidth);

	onMount(() => {
		window.particlesJS('particle', particleConfig);

		const { angle } = window.screen.orientation;
		landscapeMode.set(angle === 90 || angle === 270);
		window.addEventListener('orientationchange', () => {
			const { angle } = window.screen.orientation;
			landscapeMode.set(angle === 90 || angle === 270);
		});
		loaded = true;
	});
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<Loader {loaded} />
<main
	style="--screenWidth:{innerWidth}px; --screenHeight:{innerHeight}px"
	class:landscape={$landscapeMode}
>
	<div id="particle" />
	{#if loaded}
		<LayoutChild>
			<slot />
		</LayoutChild>
	{/if}
</main>

<style>
	main {
		width: var(--screenWidth);
		height: var(--screenHeight);
		display: flex;
		position: relative;
		overflow: hidden;
	}

	#particle {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0%;
		pointer-events: none;
	}
</style>
