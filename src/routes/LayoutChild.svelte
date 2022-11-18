<script>
	import Flag from '$lib/components/Flag.svelte';
	import FreeEntry from '$lib/components/FreeEntry.svelte';
	import Gapura1 from '$lib/components/Gapura1.svelte';
	import Gapura2 from '$lib/components/Gapura2.svelte';
	import Ground from '$lib/components/Ground.svelte';
	import Janur from '$lib/components/Janur.svelte';
	import Leaf1 from '$lib/components/Leaf1.svelte';
	import Leaf2 from '$lib/components/Leaf2.svelte';
	import Leaves from '$lib/components/Leaves.svelte';
	import SunMoon from '$lib/components/SunMoon.svelte';

	let headerHeight;
</script>

<svelte:head>
	<title>55 Tahun SMAKSTA HEBAT</title>
</svelte:head>

<section>
	<header bind:clientHeight={headerHeight} style="--headerHeight:{headerHeight}px">
		<picture>
			<img src="/images/smak.webp" alt="Logo" />
		</picture>
		<div class="title text-stroke">
			<a href="/">
				<div class="old">
					<span class="number"> 55</span>
					<span class="year">TH</span>
				</div>
				<div class="jargon">SMAKSTA <br /> HEBAT</div>
			</a>
		</div>

		<nav>
			<a href="/agenda" class="menu">Rundown Acara</a>
			<a href="/whitelist" class="menu">Data Alumni 2018</a>
			<a
				href="https://docs.google.com/forms/d/1sTb9gQRgvTa101MSU1_nuEsMU7rbyzvMBEu928rKoQA"
				target="_blank"
				rel="noreferrer"
				class="join"
			>
				Gabung
			</a>
		</nav>
	</header>
	<slot />
</section>

<FreeEntry />
<SunMoon />
<Gapura1 />
<Gapura2 />
<Janur />
<Flag />
<Ground />

<div class="leaves">
	<Leaf1 />
	<Leaf2 />
	<Leaf2 flip />
	<Leaves />
</div>

<style>
	section {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: +100;
	}

	header {
		display: flex;
		align-items: flex-start;
		padding: 2%;
	}

	picture {
		width: 7.5%;
		min-width: 80px;
		display: inline-block;
		margin-right: 1%;
	}

	.title a {
		text-decoration: none;
	}

	:global(.landscape) picture {
		min-width: 50px;
	}

	nav {
		margin-left: auto;
		margin-right: 18%;
		white-space: nowrap;
	}

	@media all and (max-width: 1000px) {
		nav {
			margin-right: 23%;
		}
		:global(main:not(.landscape)) picture {
			width: 23%;
		}
	}

	@media all and (max-width: 700px) {
		nav {
			display: none;
		}
	}

	nav .join {
		background-color: var(--color-secondary);
		color: var(--color-primary);
		text-transform: uppercase;
		padding: 2% 10%;
		text-decoration: none;
		border-radius: 10rem;
		border: 0.2rem solid var(--color-primary);
	}

	nav .menu {
		background-color: transparent;
		border: none;
		outline: none;
		font-weight: 700;
		font-size: 100%;
		margin-right: 5%;
		text-transform: uppercase;
		cursor: pointer;
		color: var(--color-secondary);
		text-decoration: none;
	}
	nav .menu:hover {
		text-decoration: underline;
	}

	.old {
		position: relative;
		font-family: var(--font-logo);
		color: var(--color-secondary);
	}

	.number {
		font-size: calc(0.35 * var(--headerHeight));
		line-height: 100%;
	}

	.year {
		position: absolute;
		left: 50%;
		top: -20%;
		color: var(--color-third);
		font-size: calc(0.2 * var(--headerHeight));
	}

	.jargon {
		font-size: calc(0.16 * var(--headerHeight));
		font-weight: 800;
		line-height: 100%;
		color: var(--color-secondary);
	}
</style>
